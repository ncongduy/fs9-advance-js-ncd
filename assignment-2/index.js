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
}

const example = new Countries();
