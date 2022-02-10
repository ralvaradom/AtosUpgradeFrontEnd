import { shallow } from 'enzyme';
import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

	test('debe mostararse correctamente', () => {
		useFetchGifs.mockReturnValue({
			data: [],
			loading: true
		});

		const wrapper = shallow(<GifGrid category='One punch' />);
		expect(wrapper).toMatchSnapshot();
	});

	test('debe mostrar items cuando se cargan las imagenes', () => {
		const gifs = [
			{
				id: 'ABC',
				url: 'https://localhost/cualquiercosa/cosa.jpg',
				title: 'cualquiercosa'
			},
			{
				id: 'ABC',
				url: 'https://localhost/cualquiercosa/cosa.jpg',
				title: 'cualquiercosa'
			},
		]

		useFetchGifs.mockReturnValue({
			data: gifs,
			loading: false,
		});

		const wrapper = shallow(<GifGrid category='One punch' />);
		expect(wrapper.find('p').exists()).toBe(false);
		expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
	});
});