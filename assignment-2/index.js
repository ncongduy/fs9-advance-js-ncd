// Your code here
class Countries {
	constructor() {}

	async getAllCountries() {
		try {
			const fetchData = await fetch('https://restcountries.com/v3.1/all');
			const responseData = await fetchData.json();
			const getListName = responseData.map(
				(country) => country.name.official
			);

			return getListName;
		} catch (error) {
			console.log('Error when get all list countries', error);
		}
	}

	async searchCountry(countryName) {
		try {
			const fetchData = await fetch(
				`https://restcountries.com/v3.1/name/${countryName}`
			);
			const responseData = await fetchData.json();

			return responseData;
		} catch (error) {
			console.log(
				'Error when search country by international or native name',
				error
			);
		}
	}
}

const example = new Countries();
