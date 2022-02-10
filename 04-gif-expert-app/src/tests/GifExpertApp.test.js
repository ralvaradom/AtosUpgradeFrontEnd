import { shallow } from 'enzyme';
import GifExpertApp from "../GifExpertApp";

describe('Pruebas en <GifExpertApp />', () => {

	test('debe mostararse correctamente', () => {
		const wrapper = shallow(<GifExpertApp />);
		expect(wrapper).toMatchSnapshot();
	});

	test('debe mostarar una lista de categorias', () => {
		const categories = ['One punch', 'Dragon Ball'];
		const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('GifGrid').length).toBe(categories.length);
	});
});