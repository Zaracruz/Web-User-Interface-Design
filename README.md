# Web-User-Interface-Design
For my website i created a digital portfolio
the portfolio consists of 5 different pages, the Home page (index), the digital art page, the paintings page, pencil drawings, and info page.

Home page:
On the home page I have a header with "Zara Cruise Digital Portfolio" inside 
 <header> 
                <h1>Zara Cruise</h1>
                <h2>Digital portfolio</h2>
            </header>

The navigation bar with the links to the seperate pages within the website.
            <nav>
                <a href="digital.html">Digital</a>
                <a href="paintings.html">Paintings</a>
                <a href="pencilwork.html">Pencilwork</a>
                <a href="Information.html">Information</a>
             </nav>

On this page I also demonstarted labs 5 and 6 on this page 
lab 5 code: html-
                           <!-- Element to fade out -->
<div id="elementToFadeOut"> Please Explore The Art Work Provided...</div>

js-

//element to fade out
$(document).ready(function(){
    $('#elementToFadeOut').fadeOut();
});

css-
#elementToFadeOut {
  width: 400px;
  height: 100px;
  background-color: orange;
  border: 4px solid white;
  padding: 10px;
  margin: 20px;
}

and heres a snippet from lab 6 the weather dashboard:
hmtl:
<div class="search-container">
    <input type="text" id="cityInput" placeholder="Enter city name">
    <button id="submitBtn">Search</button>
</div>

<div class="sorting-buttons">
    <button id="sortByCity">Sort by City</button>
    <button id="sortByTemp">Sort by Temperature</button>
</div>

<ul id="logList" class="logs-container">
    <!-- Weather logs will be displayed here dynamically -->
</ul>

js:
//weather dashboard
//  submit button 
document.getElementById('submitBtn').addEventListener('click', function() {
    //  city name 
    const city = document.getElementById('cityInput').value;
    // Call the function to display weather 
    fetchWeatherData(city);
});

// sorting by city name/ temperature
document.getElementById('sortByCity').addEventListener('click', sortByCity);
document.getElementById('sortByTemp').addEventListener('click', sortByTemperature);

// Function to get weather data from OpenWeatherMap API for input
function fetchWeatherData(city) {
    // OpenWeatherMap API key 
    const apiKey = 'd28652ddef5a030870d4425dda3b1269';
    // Construct the API URL with the city name and API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

this specific part of the javascript code creates an event listen for "click" for the submit button for the user to enter the city
collects the input from the user 
and calls the function to collect the data for the weather 

it then sorts the city by name and temp with an event listener "click" and an element id

the next fuction collects the data from the OpenWeatherAPI with unique api key when you sugn up to the website.

css-
#submitBtn {
    padding: 5px 10px; 
    margin: 0 5px; 
    background-color: #007bff; 
    color: white;
    border: none; /* Removes the default border */
    border-radius: 5px; 
    cursor: pointer; /* Changes the cursor to a pointer to indicate clickability */
    transition: background-color 0.3s ease; /* Smooth background color transition on hover */
}
styling for submit button

lab 3 is also on the index.html - welcome message:

js
function showAlert() {
    alert('Welcome to my digital portfolio, please enjoy and explore the artwork provided!');
}

// event listener to the window.onload event
window.onload = showAlert;


All seperate pages have similar styling only difference in colors, The nav bar changes color what the user hovers over the links

the digital page has lab 4s add a new paragraph 
js:
function addParagraph() {
    // new paragraph element
    var newParagraph = document.createElement('p');
    //text content of the paragraph
    newParagraph.textContent = 'These pieces are examples of my first digital art works, they were preated in aesprite.';
    //  content div
    var contentDiv = document.getElementById('content');
    // Append the new paragraph to the content div
    contentDiv.appendChild(newParagraph);
}

//event listener to the button
document.getElementById('addParagraphBtn').addEventListener('click', addParagraph);


css-
  img {
    width: 100%; /* Make images responsive */
    max-width: 300px; /* maximum width for images */
    height: auto; /* Maintain aspect ratio */
    margin: 10px; /* margin between images */
    border: 2px solid white; /* border */
    border-radius: 8px; /* border-radius for rounded corners */
}

The images are all styled with the same code rather than seperate ones, I would have prefered a neater layout as I feel this will be messy 
with more images added.

All pages have a footer styled to stay at the bottom no matter how short the content.

The paintings page demonstrates responsiveness with the images:
the images are laid out in a image gallery which I created with the help from W3Schools;

html:
<div class="responsive">
  <div class="gallery">
    <a target="_blank" href="assets/img/oilCanvas2.jpg">
      <img src="assets/img/oilCanvas2.jpg" alt="Field of sunflowers" width="600" height="300">
    </a>
    <div class="desc">This is oil on canvas, a field of sunflowers</div>
  </div>
</div>

 css:
  .responsive {
    padding: 0 6px;
    float: left;
    width: 24.99999%;
  }
  
  @media only screen and (max-width: 700px) {
    .responsive {
      width: 49.99999%;
      margin: 6px 0;
    }
  }
  
  @media only screen and (max-width: 500px) {
    .responsive {
      width: 100%;
    }
  }
  styling for responsiveness.

  There is a problem with the layout as the images are all different sizes and some are portrait and others are lanscape
  there is a gap left in the middle of the gallery that I couldnt seem to figure out how to fix.

Pencil Work Page :

use of w3schools for grid container:
html:

<div class="grid-container">
      <div> <img src="assets/img/pencil1.jpg" ></div>
      <div>  <img src="assets/img/pencil2.jpg" ></div>  
      <div> <img src="assets/img/pencil3.jpg" ></div>
      <div><img src="assets/img/pencil4.jpg" ></div>
      <div><img src="assets/img/pencil5.jpg" ></div>  
</div>

css:
 .grid-container {
    display: grid;
   grid-template-columns: auto;
    gap: 10px;
    background-color: blue;
    padding: 10px;
  }

  This allowed me to conatain the images for this page in a neater fashion, which is more appealing to the user 
  it didnt work perfectly as I had hoped it would put them into a two rows of 4 but instead just put them in a vertical line.


  For the Information page I used a container to style the page into two columns a main content column and a sidebar :

  html:
   <div class="container clearfix">

        <!-- Main content area -->
        <div class="main-content">
            <h2>A Bit About Me </h2>
            <p>My name is Zara Cruise, I am currently a student studying Interactive Digital Art and design<a>
                at Setu Carlow. I have a passion for Art and learning new skills. During my first year of the IDAD</a>
                course I learned a lot about coding and developed skills in games development, but progressing into second<a>
                year I began to learn more about web development, and absolutely love it.</a> My choice of course allows me to
                be creative and have fun. I've taken my love for art and made it digital!</p>
        </div>
    
        <!-- Sidebar area -->
        <div class="sidebar">
            <img src="assets/img/potrait.jpg">

The main content worked well but I felt that the side bar couldve been placed more to the left to leave no gap at the side between 
the edge and the sidebar

the side bar contains labs 3 redirect to an external webpage but the link didnt work.

html:
<title>ExternalSite Button</title>
   <button onclick="redirectToExternalSite()">Portfolio Referance</button>

js:
// Function to redirect to an external site
 function redirectToExternalSite() {
    var externalSiteUrl = "https://www.juliapaul.com//";
    window.location.href = externalSiteUrl;
}

I ran into some problems with the weather dashboard and used chat GPT for fixing issues and the reference to the weather dahsboard provided in the lab.
  



    
