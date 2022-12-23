import { InputLabel } from 'components/Forms/Inputs/components';

const DropdownWrapper = ({ label, smallLabel, componentLabel, children, ...props }) => {

	return (
		<div className="dropdown">
			{(label || componentLabel) && (
				<InputLabel
					label={label}
					componentLabel={componentLabel}
					smallLabel={smallLabel}
					{...props}
				/>
			)}
			{children}
		</div>
	);
};

export default DropdownWrapper;
