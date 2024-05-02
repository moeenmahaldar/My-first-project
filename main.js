async function myApiFunction(value) {
  const url = `https://netdetective.p.rapidapi.com/query?ipaddress=${value}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "187f9249b4msh83468419969c164p1ad908jsn3509a2d9e8e8",
      "X-RapidAPI-Host": "netdetective.p.rapidapi.com",
    },
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
  let targetDiv = document.getElementById("apiContainer");
  targetDiv.innerHTML = `
	<h1>API DATA</h1>
	<p>Target IP ADDRESS : ${data.result.ipAddress}</p> 
	<p>SUCCESS : ${data.success}</p>
  <p>Is DDOS : ${data.result.isDDos}</p>
  <p>IS VPN : ${data.result.isVpn}</p>
  <p>IS DATACENTER : ${data.result.isDataCenter}</p>
  <p>IS BRUTEFORCE : ${data.result.isBruteForce}</p>
  <p>IS SPAM : ${data.result.isSpam}</p>
  <p>IS BOGON : ${data.result.isBogon}</p>
  <p>IS PROXYHTTP : ${data.result.isProxyHttp}</p>
  <p>IS PROXYWEB : ${data.result.isProxyWeb}</p>
  <p>IS PROXYOTHER : ${data.result.isProxyOther}</p>
  <p>IS SMTPRELAY : ${data.result.isSmtpRelay}</p>
  <p>IS WEBVULN : ${data.result.isWebVuln}</p>
  <p>IS NOMAIL : ${data.result.isNoMail}</p>
  <p>IS ZOMBIE : ${data.result.isZombie}</p>
  <p>IS POTENTIALZOMBIE : ${data.result.isPotentialZombie}</p>
  <p>IS DYNAMIC : ${data.result.isDynamic}</p>
  <p>IS NOSERVER : ${data.result.isNoServer}</p>
  <p>IS BADCONF : ${data.result.isBadConf}</p>
  <p>IS OPENDNS : ${data.result.isOpenDns}</p>
  <p>IS WORM : ${data.result.isWorm}</p>
  <p>IS IRCDRONE : ${data.result.isIrcDrone}</p>
  <p>IS NOTSPAM : ${data.result.isNotSpam}</p>
  `;
}

let input = document.getElementById("myInput");
let button = document.getElementById("apiButton");
button.addEventListener("click", () => {
  myApiFunction(input.value);
});