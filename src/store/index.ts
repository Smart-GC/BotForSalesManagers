import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

// + Ссылка на ГК:  https://course.smart-child.ru/sales/control/deal/update/id/381490609
// + Направление(если в курс входит псс, пишем псс+курс):  Практический психолог
// + Тариф: пакет «Профессионал»
// + Часы: 1300
// + В какой поток идет по основному курсу:октябрь
// + В какой поток идет по МБА (если он включен): нет
// + Лт (да/нет):да
// + Оплачено ли 50 % курса, если включена лт (да/нет): да
// + Бонусный модуль(да/нет) (на 1 мес или на 3 мес):  нет
// + Время, когда связаться:около 15 ч
// Клиент идет по акции раннего бронирования (да/нет):нет

type TFormState = {
	name: string;
	lastName: string;
	phone: string;
	time: string;
	date: string;
	gk: string;
	timeConnect: string;
	earlyBooking: boolean;
	bonusModule: boolean;
	group: string;
	paidPart: boolean;
	flowDate: string;

	pss: string;
	rate: string;
	lt: boolean;

	mba: string;
};

export type TKey = keyof TFormState;

interface IUseFormState {
	formState: TFormState;
	setValue: (key: TKey, value: string | boolean) => void;
}

const useFormState = create(
	devtools<IUseFormState>((set) => ({
		formState: {
			name: '',
			lastName: '',
			group: '',
			phone: '',
			time: '',
			gk: '',
			pss: '',
			rate: '',
			lt: false,
			paidPart: false,
			timeConnect: '',
			date: '',
			mba: '',
			bonusModule: false,
			earlyBooking: false,
			flowDate: '',
		},
		setValue: (key, value) =>
			set((state) => ({
				formState: {
					...state.formState,
					[key]: value,
				},
			})),
	}))
);

export default useFormState;
