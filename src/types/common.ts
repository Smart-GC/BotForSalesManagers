import { ChangeEvent } from 'react';

export type TCnEvent = ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;
``;

export interface IFieldProps {
	type?: 'date' | 'time' | 'input' | 'checkbox' | 'phone' | 'email';
	name?: string;
	label?: string;
	value: string | boolean;
	className?: string;
	plaseholder?: string;
	autoComplete?: boolean;
}

export interface IInputProps extends IFieldProps {
	setValue: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface IAreaProps extends IFieldProps {
	setValue: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface IFelds {
	getCourse: string;
	present: string;
	description: string;
	tags: string;
	loading: string;
}

export enum EPlaceholder {
	name = 'Введите имя',
	lastName = 'Укажите фамилию',
	group = 'Укажите группу',
	phone = 'Укажите телефон',
}

export enum EKey {
	NAME = 'name',
	LASTNAME = 'lastName',
	GROUP = 'group',
	PHONE = 'phone',
	TIME = 'time',
	GK = 'gk',
	PSS = 'pss',
	RATE = 'rate',
	LT = 'lt',
	PAIDPART = 'paidPart',
	TIMECONNECT = 'timeConnect',
	DATE = 'date',
	MBA = 'mba',
	BONUSMODULE = 'bonusModule',
	ERLYBOOKING = 'earlyBooking',
	FLOWDATE = 'flowDate',
}
