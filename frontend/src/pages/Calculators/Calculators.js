import { PageContainer } from 'components/Containers';
import { ImageCropModal } from 'components/Gallery/ImageTransformation';
import { useMetalsLogic } from "hooks";
import { Layout } from 'Layout';
import { useSelector } from 'react-redux';
import ErrorBoundary from 'state/ErrorBoundary';
import {
	InformationModal,
	InputCard,
	MetalPricesRibbon,
	ResultsCard
} from './components';

const Calculators = () => {

	const { settings, isLoading } = useSelector(state => state.setting);

	const metalsProps = useMetalsLogic();

	return (
		<Layout
			settings={settings}
			isLoading={isLoading}
		>
			<PageContainer>
				<ErrorBoundary>
					<ImageCropModal />
					<InformationModal metalsProps={metalsProps} />
					<MetalPricesRibbon metalsProps={metalsProps} />
					<InputCard metalsProps={metalsProps} />
					<ResultsCard metalsProps={metalsProps} />
				</ErrorBoundary>
			</PageContainer>
		</Layout>
	)
}

export default Calculators
