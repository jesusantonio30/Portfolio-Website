// Retrieve the current dark mode status from localStorage
let darkmode = localStorage.getItem('darkmode');

// Select the toggle button element
const toggle = document.getElementById('nav-light-toggle');


// Function to enable dark mode
const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
};

// Function to disable dark mode
const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', 'inactive');
};

// Initialize the theme based on localStorage value
if(darkmode === 'active') enableDarkmode();

// Add event listener to the toggle button
toggle.addEventListener('click', ()=>{
    darkmode = localStorage.getItem('darkmode');
    darkmode !== 'active' ? enableDarkmode() : disableDarkmode();
})

