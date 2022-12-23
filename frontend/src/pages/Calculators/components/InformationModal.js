import { SiteData } from 'data'
import { ModalWrapper } from 'components/Modals';

const InformationModal = ({ metalsProps }) => {

	return (
		<ModalWrapper
			modalID={SiteData.modalIDs.spreadInfo}
			modalName="spreadInformation"
			modalTitle="Spread Information"
		>
			<div className="d-flex justify-content-start align-items-center">
				<div className="container rounded-3 bg-dark text-slate-300 shadow p-3 text-sm">
					{metalsProps.spreadInfoMessage}
				</div>
			</div>
		</ModalWrapper>
	)
}

export default InformationModal
