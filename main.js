
                                                                // Light Mode
// Retrieve the current light mode status from localStorage
let lightmode = localStorage.getItem('lightmode');

// Select the toggle button element
const toggle = document.querySelectorAll('.nav-light-toggle');

// Function to enable light mode
const enableLightmode = () => {
    document.body.classList.add('lightmode');
    localStorage.setItem('lightmode', 'active');
};

// Function to disable light mode
const disableLightmode = () => {
    document.body.classList.remove('lightmode');
    localStorage.setItem('lightmode', 'inactive');
};

// Initialize the theme based on localStorage value
if(lightmode === 'active') enableLightmode();

// Add event listener to the toggle button
toggle.forEach(e => {
    e.addEventListener('click', ()=>{
        let lightmode = localStorage.getItem('lightmode');
        lightmode !== 'active' ? enableLightmode() : disableLightmode();
    })
});


                                                                // Sidebar 

const sidebar = document.getElementById('sidebar')

const showSidebar = () => {
    sidebar.style.display = 'block';
    localStorage.setItem('sidebar', 'active');
};

const hideSidebar = () => {
    sidebar.style.display = 'none';
    localStorage.setItem('sidebar', 'inactive');
};