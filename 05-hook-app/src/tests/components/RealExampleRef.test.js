import React from 'react';
import { shallow } from 'enzyme';
import RealExampleRef from '../../components/04-useRef/RealExampleRef';


describe('Pruebas en <MultileCustomHooks />', () => {

	const wrapper = shallow(<RealExampleRef />);
	
	test('debe mostrarse correctamente', () => {

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
	});

	test('debe de mostrar la informacion', () => {

		wrapper.find('button').simulate('click');

		expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
	});
});
