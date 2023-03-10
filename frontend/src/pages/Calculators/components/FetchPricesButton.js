import clsx from 'clsx';
import { InfoAlert } from 'components/Alerts';
import { ModalButton } from 'components/Buttons/Type';
import { LoaderButton } from 'components/Buttons';
import { QuantitySelector } from 'components/Forms/Inputs/components';
import { ToolTip } from 'components/ToolTip';
import { getMetals } from 'features/metals/metalsSlice';
import { useMobile } from 'hooks';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { themeClasses } from 'theme';

import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import { SiteData } from 'data';

const FetchPricesButton = ({ metalsProps, className = '', label = '' }) => {

	const {
		spreadInfoMessage,
		currentMetalPrices,
		setSpread,
		spread
	} = metalsProps;

	const { isXSmall } = useMobile();

	const [ready, setReady] = useState(false);
	const [syntheticLoading, setSyntheticLoading] = useState(false);

	const { metals, isLoading, isError, message } = useSelector(state => state.metal);
	const dispatch = useDispatch()

	useEffect(() => {
		if (metals?.rates) {
			currentMetalPrices(metals?.rates)
		}
	}, [metals?.rates, currentMetalPrices])

	useEffect(() => {
		if (ready && isError) {
			toast.error(message)
		}
		let timer = setTimeout(() => {
			setReady(false)
		}, 800)
		return () => clearTimeout(timer)
	}, [isError, message, ready])

	const onFetchMetals = useCallback(() => {
		setReady(true)
		dispatch(getMetals({ selSymbols: "XAU,XAG,XPT" }))
	}, [dispatch])

	useEffect(() => {
		if (syntheticLoading) {
			let timer = setTimeout(() => {
				setSyntheticLoading(false);
			}, 200);
			return () => clearTimeout(timer);
		}
	}, [syntheticLoading]);

	const onSetSpread = (value) => {
		setSyntheticLoading(true);
		const qty = value ? Math.abs(value) : 0;
		setSpread(_ => qty);
	};

	return (
		<div className={clsx(
			'd-flex',
			isXSmall ? 'flex-column mt-3 ps-4 gap-3' : 'justify-content-end align-items-center'
		)}>
			{isXSmall && (
				<div className="d-flex justify-content-start align-items-center">
					<div className="me-2 text-xs">Update metal prices</div>
					<LoaderButton
						className={themeClasses.button.icon.light}
						loading={isLoading}
						disabled={isLoading}
						type="loader"
						icon="sync-alt"
						setOnclick={onFetchMetals}
					/>
				</div>
			)}
			<div className="d-flex justify-content-start align-items-center me-4">
				<label className="me-2 text-xs">Buyer spread</label>
				{!isXSmall && (
					<InfoAlert
						message={spreadInfoMessage}
						className="me-2"
						interactive
					/>
				)}
				<QuantitySelector
					qty={spread}
					loading={syntheticLoading}
					setData={onSetSpread}
					suffix="%"
				/>
				{isXSmall && (
					<ModalButton
						className="p-0 ms-3"
						modalID={SiteData.modalIDs.spreadInfo}
					>
						<FAIcon icon="info-circle" className="text-info" />
					</ModalButton>
				)}
			</div>
			{!isXSmall && (
				<ToolTip tip="Update metal prices">
					<LoaderButton
						className={themeClasses.button.icon.light}
						loading={isLoading}
						disabled={isLoading}
						type="loader"
						icon="sync-alt"
						setOnclick={onFetchMetals}
					/>
				</ToolTip>
			)}
		</div>

	)
}

export default FetchPricesButton
