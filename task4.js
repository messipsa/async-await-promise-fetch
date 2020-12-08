// Task 4: get the neigher countries of Columbia

const fetchCountry = async (alpha3Code) => {
  try {
    const res = await fetch(
      `https://restcountries.eu/rest/v2/alpha/${alpha3Code}`
    );

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};


const fetchNeighb = async ()=>
{
   const pays = await fetchCountry('col');
   console.log(pays);

   const neighb = await Promise.all(pays.borders.map(border => fetchCountry(border))); 
   console.log(neighb);
}

fetchNeighb();