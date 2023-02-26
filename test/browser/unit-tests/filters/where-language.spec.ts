import { WhereLanguage } from '../../../../lib';

describe('WhereLanguage', () => {
	it('should have a language property set to the given value', () => {
		const language = 'en-US';
		const whereLanguage = new WhereLanguage(language);
		expect(whereLanguage.language).toEqual(language);
	});

	it('should correctly format the getParameter() method', () => {
		const language = 'en-US';
		const whereLanguage = new WhereLanguage(language);
		expect(whereLanguage.getParameter()).toEqual(`filter[where][and][system.language]=${language}`);
	});
});
