import { Row, Col } from 'components/HTML'
import { SelectAspectRatio } from '.';
import { QuantitySelector } from 'components/Forms/Inputs/components'
import { useState } from 'react'
import { InputLabel } from 'components/Forms/Inputs/components';

const ImageInputs = ({ scale, setScale, ratioID, setRatioID, base }) => {

	const [quantity, setQuantity] = useState(scale * 100);

	const onScaleImage = (value) => {
		setQuantity(value);
		setScale(value / 100);
	};

	return (
		<div className="container mb-4 p-4 rounded-3 border">
			<Row className="g-3">
				<Col cols="12 md-8 lg-9">
					<SelectAspectRatio
						ratioID={ratioID}
						setRatioID={setRatioID}
						base={base}
					/>
				</Col>
				<Col cols="12 md-4 lg-3">
					<InputLabel label="Resize (percent)"/>
					<QuantitySelector
						qty={quantity}
						setData={onScaleImage}
					/>
				</Col>
			</Row>
		</div>
	)
}

export default ImageInputs
