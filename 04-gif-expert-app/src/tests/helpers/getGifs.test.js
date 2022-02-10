import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con getGifs', () => {
	test('debe de traer 10 imagenes', async () => {
		const gifs = await getGifs('One punch');

		expect(gifs.length).toBe(10);
	});

	test('debe de traer 0 imagenes', async () => {
		const gifs = await getGifs('');

		expect(gifs.length).toBe(0);
	});
});