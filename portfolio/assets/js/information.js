//side bar navigation for home page
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

//pop up
document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent the form from submitting
    alert("Form submitted successfully!");
  });
