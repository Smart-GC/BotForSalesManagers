import { IInputProps } from '../../types//common';

export const CheckBoxField: React.FC<IInputProps> = (props): JSX.Element => {
	const { className, value, name, plaseholder, setValue, label } = props;

	return (
		<label className="label-field checkbox">
			<span>{label}</span>
			<input
				type="checkbox"
				placeholder={plaseholder}
				checked={!!value}
				name={name}
				className={'input-field' + (className ? ' ' + className : '')}
				onChange={setValue}
			/>
		</label>
	);
};
