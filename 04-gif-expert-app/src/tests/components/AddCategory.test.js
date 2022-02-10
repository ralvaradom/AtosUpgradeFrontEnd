import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
	
	const setCategories = jest.fn();
	const wrapper = shallow(<AddCategory setCategories={setCategories} />);

	test('debe mostrarse correctamente', () => {
		expect(wrapper).toMatchSnapshot();
	});
	
	test('no debe de enviar la informacion en submit', () => {
		wrapper.find('form').simulate('submit', {preventDefault(){}});

		expect(setCategories).not.toHaveBeenCalled();
	});

	test('debe de cambiar la caja de texto', () => {
		const input = wrapper.find('input');
		const value = 'Hola mundo';

		input.simulate('change', {target: {value}});
	});

	test('debe llamar el setCategories y liempiar la caja de texto', () => {
		wrapper.find('input').simulate('change', {target: {value: 'Hola mundo'}});
		wrapper.find('form').simulate('submit', {preventDefault(){}});

		expect(setCategories).toHaveBeenCalled();
		expect(wrapper.find('input').prop('value')).toBe('');
	});

});