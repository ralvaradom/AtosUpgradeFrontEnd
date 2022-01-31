import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import CounterApp from '../CounterApp';

describe('Pruebas en CounterApp', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<CounterApp />);
	});

	test('debe de mostrar <CounterApp /> correctamente', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('debe mostrar el valor enviado por props', () => {
		const value = 100;
		const wrapper = shallow(<CounterApp value={value} />);

		const textoContador = wrapper.find('h2').text();

		expect(textoContador).toBe(value.toString());
	});

	test('debe incrementar el valor con el boton +1', () => {
		wrapper.find('button').at(0).simulate('click');

		const textoContador = wrapper.find('h2').text();

		expect(textoContador).toBe('11');
	});

	test('debe decrementar el valor con el boton -1', () => {

		wrapper.find('button').at(2).simulate('click');

		const textoContador = wrapper.find('h2').text();

		expect(textoContador).toBe('9');
	});

	test('debe de resetear el contador al valor por defecto', () => {
		const wrapper = shallow(<CounterApp value={105} />);

		wrapper.find('button').at(0).simulate('click');
		wrapper.find('button').at(0).simulate('click');
		wrapper.find('button').at(1).simulate('click');

		const textoContador = wrapper.find('h2').text();

		expect(textoContador).toBe('105');
	});
});