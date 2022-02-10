import { renderHook, act } from '@testing-library/react-hooks';
import useCounter from '../../hooks/useCounter';

describe('Pruebas en useCounter', () => {
	test('debe retornar valores por defecto', () => {
		const { result } = renderHook(() => useCounter());

		expect(result.current.counter).toBe(1);
		expect(typeof result.current.increment).toBe('function');
		expect(typeof result.current.decrement).toBe('function');
		expect(typeof result.current.reset).toBe('function');
	});

	test('debe de establecer el counter al valor inicial', () => {
		const { result } = renderHook(() => useCounter(100));

		expect(result.current.counter).toBe(100);
	});

	test('debe incrementar el counter', () => {
		const { result } = renderHook(() => useCounter());
		const { increment } = result.current;

		act(() => {
			increment();
		});

		const { counter } = result.current;
		expect(counter).toBe(2);
	});

	test('debe decrementar el counter', () => {
		const { result } = renderHook(() => useCounter(2));
		const { decrement } = result.current;

		act(() => {
			decrement();
		});

		const { counter } = result.current;
		expect(counter).toBe(1);
	});

	test('debe hacer reset al counter', () => {
		const { result } = renderHook(() => useCounter(100));
		const { increment, reset } = result.current;

		act(() => {
			increment();
			increment();
			reset();
		});

		const { counter } = result.current;
		expect(counter).toBe(100);
	});
});