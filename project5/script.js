// Get DOM Element
 const main = document.getElementById('main');
 const addUserbtn = document.getElementById('add-user');
 const doublebtn = document.getElementById('double');
 const filterbtn = document.getElementById('filter');
 const sortbtn = document.getElementById('sort');
 const sumbtn = document.getElementById('sum');

 // Initialize user data array
 let data = [];

 // Fetch Random User from randomuser.me API
 async function getRandomUser() {
     // Wait for the result form API
    const res = await fetch('https://randomuser.me/api/')
    // Wait for response to convert into JSON
    const data = await res.json();

    // console.log(data);

    // Get the User Data
    const user = data.results[0];
    console.log(user);

    // Create the New User
    const newUser = {
        name: `${user.name.title} ${user.name.first} ${user.name.last}`,
        balance: Math.floor(Math.random()*1000000)
    }
    console.log(newUser);

    // Add the new user into data array
    addData(newUser);
};

// Function to add user data into user data array
function addData(newUser) {
    // Add the new User data into the user data array
    data.push(newUser);
    // Update the DOM to display user in the data array
    updateDOM();
}

// Update the UI with data from user data array
function updateDOM(userData = data) {
    // Clear previous UI
    main.innerHTML = '<h2><strong>User</strong>Wealth</h2>'
    // Loop through userData and render in the UI
    userData.forEach(user => {
        // Create a new div element for the user
        const userDiv = document.createElement('div');
        // Apply the user class to the new div
        userDiv.classList.add('user');
        // Add inner HTML to the user div
        userDiv.innerHTML = `<strong>${user.name}</strong> ${user.balance}`
        // Add the new element into the DOM
        main.appendChild(userDiv);
    });

}

// Create a Random User
getRandomUser();
getRandomUser();
getRandomUser();
getRandomUser();
getRandomUser();