async function myApiFunction1(value) {
    const url = `https://subdomain-finder3.p.rapidapi.com/v1/subdomain-finder/?domain=${value}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '187f9249b4msh83468419969c164p1ad908jsn3509a2d9e8e8',
            'X-RapidAPI-Host': 'subdomain-finder3.p.rapidapi.com'
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
    let targetDiv = document.getElementById("apiContainer1");
    targetDiv.innerHTML = `
      <h1>API DATA</h1>
      <p>SCAN DATE : ${data.scan_date}</p>
      ${data.subdomains.map((item,idx)=>{
        return (
            `<br>`+
            `S.No ${idx + 1} :`+
            `<p>Subdomain : ${item.subdomain}</p>`+
            `<p>IP Address : ${item.ip}</p>`+
            `<p>Cloudflare : ${item.cloudflare}</p>`+
            `<br>`+
            `----------------------------------------`
        )
      })}
    `;
  }
  
  let input = document.getElementById("myInput1");
  let button = document.getElementById("apiButton1");
  button.addEventListener("click", () => {
    myApiFunction1(input.value);
  });