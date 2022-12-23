import clsx from 'clsx';
import { CenteredBrand } from 'components/Blocks/Brand';
import { SettingsContext } from 'contexts';
import { NotFoundSVG } from 'globals/img';
import { AlertPage, Layout } from 'Layout';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ErrorBoundary from 'state/ErrorBoundary';

const NotFound = () => {

	const { settings, isLoading } = useSelector(state => state.settings);

	const navigate = useNavigate();

	const { isSmall } = useContext(SettingsContext).screen;

	const onClickHandler = (e) => {
		e.preventDefault()
		navigate('/', { replace: true })
	};

	return (
		<Layout
			settings={settings}
			isLoading={isLoading}
		>
			<ErrorBoundary>
				<AlertPage
					h1={true}
					title="404 Page Not Found"
					label="Return Home"
					BackGroundSVG={NotFoundSVG}
					BrandBlock={(
						<div className={clsx(
							'container position-relative',
							isSmall && 'mt-2'
						)}>
							<CenteredBrand
								loading={isLoading}
								isSmall={isSmall}
								settings={settings}
							/>
						</div>
					)}
					onClickHandler={onClickHandler}
				/>
			</ErrorBoundary>
		</Layout>
	);
};

export default NotFound;
