import React from 'react';
import { shallow } from 'enzyme';
import MultipleCustomHooks from '../../components/03-examples/MultipleCustomHooks';
import useFetch from '../../hooks/useFetch';

jest.mock('../../hooks/useFetch');

describe('Pruebas en <MultileCustomHooks />', () => {

	test('debe mostrarse correctamente', () => {

		useFetch.mockReturnValue({
			data: null,
			loading: true,
			error: null
		});

		const wrapper = shallow(<MultipleCustomHooks />);
		expect(wrapper).toMatchSnapshot();
	});

	test('debe de mostrar la informacion', () => {

		useFetch.mockReturnValue({
			data: [{
				author: 'Fernando',
				quote: 'hola mundo'
			}],
			loading: false,
			error: null
		});

		const wrapper = shallow(<MultipleCustomHooks />);

		expect(wrapper.find('.alert').exists()).toBe(false);
		expect(wrapper.find('p').text().trim()).toBe('hola mundo'); 
		expect(wrapper.find('footer').text().trim()).toBe('Fernando');

	});
});
