import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import PrimerApp from '../PrimerApp';

describe('Pruebas en PrimeraApp', () => {
	// test('debe de mostrar el mensaje Hola Soy Goku', () => {
	// 	const saludo = "Hola Soy Goku";
	// 	const { getByText } = render(<PrimerApp saludo={saludo} />);

	// 	expect(getByText(saludo)).toBeInTheDocument();
	// });

	test('debe de mostrar <PrimerApp /> correctamente', () => {
		const saludo = 'Hola Soy Goku';
		const wrapper = shallow(<PrimerApp saludo={saludo} />);

		expect(wrapper).toMatchSnapshot();
	});

	test('debe mostrar el subtitulo enviado por props', () => {
		const saludo = 'Hola Soy Goku';
		const subtitulo = 'Soy un subtitulo';
		const wrapper = shallow(
			<PrimerApp 
				saludo={saludo} 
				subtitulo={subtitulo}
			/>
		);

		const textoParrafo = wrapper.find('p').text();

		expect(textoParrafo).toBe(subtitulo);
	});
});