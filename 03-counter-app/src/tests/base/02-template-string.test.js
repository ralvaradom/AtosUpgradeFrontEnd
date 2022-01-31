import '@testing-library/jest-dom';

import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02-template-string', () => {
	test('getSaludo debe de rotornar Hola Fernado!', () => {
		const nombre = 'Fernando';

		const saludo = getSaludo(nombre);
		
		expect(saludo).toBe(`Hola ${nombre}!`);
	});

	test('getSaludo debe de rotornar Hola Carlos!', () => {
		expect(getSaludo()).toBe(`Hola Carlos!`);
	});
});