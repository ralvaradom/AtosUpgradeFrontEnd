import { renderHook } from "@testing-library/react-hooks";
import useFetch from "../../hooks/useFetch";

describe('tests en useFetch', () => {

	test('debe de regresar los valores por defecto', () => {
		const { result } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
		const { data, loading, error } = result.current;

		expect(data).toBe(null);
		expect(loading).toBe(true);
		expect(error).toBe(null);
	});

	test('debe de regresar la info deseada', async() => {
		const { result, waitForNextUpdate } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
		await waitForNextUpdate();

		const { data, loading, error } = result.current;

		expect(data.length).toBe(1);
		expect(loading).toBe(false);
		expect(error).toBe(null);
	});

	test('debe de regresar el error', async() => {
		const { result, waitForNextUpdate } = renderHook(() => useFetch('https://www.breakingbadapi.com/apdi/quotes/1'));
		await waitForNextUpdate();

		const { data, loading, error } = result.current;

		expect(data).toBe(null);
		expect(loading).toBe(false);
		expect(error).toBe('No se pudo cargar la data');
	});

});