import { IInputProps } from '../../types//common';

export const TextField: React.FC<IInputProps> = (props): JSX.Element => {
	const { autoComplete = false, className, value, name, plaseholder, setValue, label, type } = props;

	return (
		<label className="label-field">
			<span>{label}</span>
			<input
				autoComplete={autoComplete ? '' : 'off'}
				type={type ?? 'text'}
				placeholder={plaseholder}
				value={value.toString()}
				name={name}
				className={'input-field' + ' ' + className}
				onChange={setValue}
			/>
		</label>
	);
};
