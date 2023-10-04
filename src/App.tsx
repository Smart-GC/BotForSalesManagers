import { CheckBoxField } from './components/ui/CheckboxField';
import { TextField } from './components/ui/TextField';
import useFormState, { TKey } from './store/index';
import { EKey } from './types/common';

const App = () => {
	const state = useFormState((state) => state.formState);
	const setValue = useFormState((state) => state.setValue);

	const setValueHandler = (key: TKey, value: string | boolean) => {
		setValue(key, value);
	};

	const submit = () => {};

	return (
		<div className="app container">
			<h3 className="app__title">Данные клиента</h3>
			<div className="app__form">
				<TextField
					label="Введите имя клиента"
					plaseholder="Имя"
					value={state.name}
					setValue={({ target }) => setValueHandler(EKey.NAME, target.value)}
				/>
				<TextField
					label="Введите фамилию клиента"
					plaseholder="Фамилия"
					value={state.name}
					setValue={({ target }) => setValueHandler(EKey.LASTNAME, target.value)}
				/>

				{/* @TODO:Сделать валидацию */}
				<TextField
					label="Введите телефон клиента"
					plaseholder="Телефон 89091233578"
					type="phone"
					value={state.phone}
					setValue={({ target }) => setValueHandler(EKey.PHONE, target.value)}
				/>
				<TextField
					label="Ссылка на GetCourse"
					plaseholder="Ссылка на GetCourse"
					value={state.gk}
					setValue={({ target }) => setValueHandler(EKey.GK, target.value)}
				/>
				<TextField
					label="Укажите группу"
					plaseholder="Укажите группу"
					value={state.group}
					setValue={({ target }) => setValueHandler(EKey.GROUP, target.value)}
				/>
				<TextField
					label="Время, когда связаться"
					plaseholder="Время, когда связаться"
					type="time"
					value={state.time}
					setValue={({ target }) => setValueHandler(EKey.TIME, target.value)}
				/>

				<TextField
					label="В какой поток идет по МБА"
					plaseholder="В какой поток идет по МБА"
					value={state.mba}
					setValue={({ target }) => setValueHandler(EKey.MBA, target.value)}
				/>

				{/* @TODO:Сделать выбо циклом по тарифам */}
				<TextField
					label="По какому тарифу"
					plaseholder="По какому тарифу"
					value={state.rate}
					setValue={({ target }) => setValueHandler(EKey.RATE, target.value)}
				/>

				{/* @TODO:Сделать выбо циклом по месяцам */}
				<TextField
					label="В какой поток идет по основному курсу"
					plaseholder="Ссылка на GetCourse"
					value={state.flowDate}
					setValue={({ target }) => setValueHandler(EKey.FLOWDATE, target.value)}
				/>

				{/* Boolean */}
				<CheckBoxField
					label="Бонусный модуль(да/нет)"
					type="checkbox"
					value={state.bonusModule}
					setValue={({ target }) => setValueHandler(EKey.BONUSMODULE, target.checked)}
				/>
				<CheckBoxField
					label="Клиент идет по акции раннего бронирования"
					type="checkbox"
					value={state.earlyBooking}
					setValue={({ target }) => setValueHandler(EKey.ERLYBOOKING, target.checked)}
				/>
				<CheckBoxField
					label="Оплачено ли 50 % курса"
					type="checkbox"
					value={state.paidPart}
					setValue={({ target }) => setValueHandler(EKey.PAIDPART, target.checked)}
				/>
				<CheckBoxField
					label="ЛТ"
					type="checkbox"
					value={state.lt}
					setValue={({ target }) => setValueHandler(EKey.LT, target.checked)}
				/>

				<button onClick={submit} className="btn btn-submit">
					Отправить данные
				</button>
			</div>
		</div>
	);
};

export default App;
