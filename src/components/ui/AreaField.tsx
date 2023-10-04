import { IAreaProps } from '../../types/common';

export const AreaField: React.FC<IAreaProps> = (props): JSX.Element => {
	const { value, name = '', plaseholder, setValue, label } = props;

	return (
		<label className="label-field">
			<span>{label}</span>
			<textarea
				placeholder={plaseholder}
				value={value.toString()}
				name={name}
				className="area-field"
				onChange={setValue}
			/>
		</label>
	);
};
