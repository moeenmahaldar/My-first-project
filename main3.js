async function myApiFunction2(value){
 const url = `https://ip-geo-location.p.rapidapi.com/ip/${value}?format=json`;
 const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '187f9249b4msh83468419969c164p1ad908jsn3509a2d9e8e8',
		'X-RapidAPI-Host': 'ip-geo-location.p.rapidapi.com'
	}
 };

 try {
	const response = await fetch(url, options);
	const result = await response.json();
	renderData(result);
 } catch (error) {
	console.error(error);
 }
}

async function renderData(data) {
    let targetDiv = document.getElementById("apiContainer2");
        targetDiv.innerHTML = `
      <h1>API DATA</h1>
      <p>IP : ${data.ip}</p>
      <p>TYPE : ${data.type}</p>
      <p>LOCATION : </p>
      <p>LATITUDE : ${data.location.latitude}</p>
      <p>LONGITUDE : ${data.location.longitude}</p>
      
      <h3>AREA : </h3>
      <p>CODE : ${data.area.code}</p>
      <p>GEONAMEID : ${data.area.geonameid}</p>
      <p>NAME : ${data.area.name}</p>

      <h3>ASN : </h3>
      <p>NUMBER : ${data.asn.number}</p>
      <p>ORGANISATION : ${data.asn.organisation}</p>

      <h3>CITY : </h3>
      <p>GEONAMEID : ${data.city.geonameid}</p>
      <p>NAME : ${data.city.name}</p>

      <h3>CONTINENT : </h3>
      <p>GEONAMEID : ${data.continent.geonameid}</p>
      <p>NAME : ${data.continent.name}</p>
      <p>CODE : ${data.continent.code}</p>
      
      <h3>COUNTRY : </h3>
      <p>GEONAMEID : ${data.country.geonameid}</p>
      <p>NAME : ${data.country.name}</p>
      <p>CODE : ${data.country.code}</p>
      <p>CAPITAL : ${data.country.capital}</p>
      <p>AREA SIZE : ${data.country.area_size}</p>
      <POPULATION : ${data.country.population}</p>
      <p>PHONE CODE : ${data.country.phone_code}</p>
      <p>IS-IN_EU : ${data.country.is_in_eu}</p>
      
      <h3>CURRENCY : </h3>
      <p>CODE : ${data.currency.code}</p>
      <p>NAME : ${data.currency.name}</p>
      
      <h3>TIME : </h3>
      <p>TIMEZONE : ${data.time.timezone}</p>


    `;
    }
  
  let input = document.getElementById("myInput2");
  let button = document.getElementById("apiButton2");
  button.addEventListener("click", () => {
    myApiFunction2(input.value);
  });

