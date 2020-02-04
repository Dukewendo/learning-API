const api_url = 'https://swapi.co/api/people/2/';

async function getData() {
	const response = await fetch(api_url);
	const recievedData = await response.json();
	console.log(recievedData);
	//const height = recievedData.height;
	//const mass = recievedData.mass;
	const { height, mass} = recievedData;

	document.getElementById('result1').textContent = height;
	document.getElementById('result2').textContent = mass;
}

getData();

