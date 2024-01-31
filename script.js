
document.querySelector('#search_button').addEventListener('click', function () {
	const tripDeparture = document.querySelector('#departure').value;
	const tripArrival = document.querySelector('#arrival').value;
	const tripDate = document.querySelector('#date').value;
	console.log(tripDeparture, tripArrival, tripDate);
	console.log(typeof tripDate);
	fetch('http://localhost:3000/trip',{
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ departure: tripDeparture,arrival: tripArrival,date: tripDate }),})
    .then(response => response.json())
	.then(data => {
        if (data.result) {
			document.querySelector('#card_dispo').innerHTML = '';
			for (let i = 0; i < data.trips.length; i++) {
				document.querySelector('#card_dispo').innerHTML += `
				<div class="trip">
					<h4 class="departure">${data.trips[i].departure} > </h4>
					<h4 class="arrival">${data.trips[i].arrival}</h4>
                	<h4 class="date">${data.trips[i].date}</h4>
                	<h4 class="price">${data.trips[i].price}$</h4>
                	<button id="book_button">Book</button>
				</div>
			`;
			}
		} else {
			document.querySelector('#card_dispo').innerHTML = `
			<div id="card_loupe">
            <img class="loupe" src="./images/notfound.png" alt="img_de_loupe">
           <p class="slogan">No trip found</p>
      	   </div>
			`;
		}
	document.querySelector('#book_button').addEventListener('click', function () {
		console.log('click detected');
			const tripDeparture = document.querySelector('#departure').value;
			const tripArrival = document.querySelector('#arrival').value;
			const tripDate = document.querySelector('#date').value;
			console.log(tripDeparture, tripArrival, tripDate);
			console.log(typeof tripDate);
			fetch('http://localhost:3000/trip',{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ departure: tripDeparture,arrival: tripArrival,date: tripDate }),})
			.then(response => response.json())
			.then(data => {
				if (data.result) {
					document.querySelector('#card_dispo').innerHTML = '';
					for (let i = 0; i < data.trips.length; i++) {
						document.querySelector('#card_trips').innerHTML += `
						<div class="trip">
							<h4 class="departure">${data.trips[i].departure} > </h4>
							<h4 class="arrival">${data.trips[i].arrival}</h4>
							<h4 class="date">${data.trips[i].date}</h4>
							<h4 class="price">${data.trips[i].price}$</h4>
							<button id="book_button">Book</button>
						</div>
					`;
					}
				}
			});
		});
	});
});
