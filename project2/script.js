// Get DOM Elements
const container = document.querySelector( '.container');
const seats = document.querySelectorAll( '.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

populateUI();

let ticketPrice = +movieSelect.value;

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat)); 
    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex))
}
// Save the movie data to local storage
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

// Get data from local storage to populateUI
function populateUI(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
 // check if selected seats is not null and not empty, and if true, then loop through all seats and mark matching seats with class selected
 if(selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
        if(selectedSeats.indexOf(index) > -1) {
            seat.classList.add('selected')
        }
    })
};    
  // Get the selected movie index from local storage
  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
  // Using the value from local storage, select the movie on page load
  if(selectedMovieIndex !== null) {
      movieSelect.selectedIndex = selectedMovieIndex;
  }
}


// Eventlisteners
// 1. Eventlistener for container to check for click on seats
container.addEventListener('click', e=> {
   if(e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
) {  
   e.target.classList.toggle('selected') 
   updateSelectedCount();
   }

} )

//2. Eventlistener for movie select
movieSelect.addEventListener('change', e=> {
    ticketPrice = +e.target.value;
    console.log(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
})

//Inital count and total price
updateSelectedCount();