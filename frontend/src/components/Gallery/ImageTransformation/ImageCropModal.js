import { ModalWrapper } from 'components/Modals'
import { SiteData } from 'data';
import { ImageCrop } from '.'

const ImageCropModal = () => {

    return (
        <ModalWrapper
            modalID={SiteData.modalIDs.imageUploadCrop}
            modalName="Image Transform"
            modalTitle="Image Transform"
        >
            <ImageCrop />
        </ModalWrapper>
    )
}

export default ImageCropModal
