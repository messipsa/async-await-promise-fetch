// Task 3: using https://restcountries.eu/ API,
// get country where alpha3Code = col

const fetchData = async () =>
{

   const result =await fetch('https://restcountries.eu/rest/v2/alpha/col');
   const country = await result.json();
   console.log(country);

}

fetchData();