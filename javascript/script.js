function darkMode() {
    var element = document.body;
    var content = document.getElementById("DarkModetext");
    element.className = "dark-mode";
    content.innerText = "Dark Mode is ON";
    let imageMode = document.getElementById("mode");
    imageMode.src = "https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg";
    
  }
  function lightMode() {
    var element = document.body;
    var content = document.getElementById("DarkModetext");
    element.className = "light-mode";
    content.innerText = "Dark Mode is OFF";
    let imageMode = document.getElementById("mode");
    imageMode.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg/800px-The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg";
  }
var tID; //we will use this variable to clear the setInterval()
function animateScript() {
var    position = 233.33; //start position for the image slicer
const  interval = 100; //100 ms of interval for the setInterval()
tID = setInterval ( () => {
document.getElementById("image").style.backgroundPosition = 
`-${position}px 0px`; 
//we use the ES6 template literal to insert the variable "position"
if (position < 1400)
{ position = position + 233.33;}
//we increment the position by 256 each time
else
{ position = 233.33; }
//reset the position to 256px, once position exceeds 1536px
}
, interval ); //end of setInterval
} //end of animateScript()


function stopAnimate() {
clearInterval(tID);
} //end of stopAnimate()

//based on: https://medium.com/dailyjs/how-to-build-a-simple-sprite-animation-in-javascript-b764644244aa
const myInterval = setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  document.getElementById("demo").textContent = date.toLocaleTimeString();
}

function myStopFunction() {
  clearInterval(myInterval);
}

// Array of Irish counties
const irishCounties = [
  'author', 'web developer', 'software developer', 'UI designer'
];

// Function to display Irish counties on the webpage
function displayCounties() {
  const countyList = document.getElementById('county-list');

  irishCounties.forEach(county => {
    // Create a new list item element
    const listItem = document.createElement('li');
    
    // Set the text content of the list item
    listItem.textContent = county;

    // Append the list item to the unordered list
    countyList.appendChild(listItem);
  });
}

// Call the function to display Irish counties
displayCounties();

const bookinfo = {
  name: 'fish',
  price: 'free',
  code: 544107
};

// Function to display county information on the webpage
function displaybookinfo() {
//Select the div with id county-info
  const bookinfoContainer = document.getElementById('book-info');
  // Display the county object properties on the webpage
  countyInfoContainer.innerHTML = `
    <p>Name: ${bookinfo.name}</p>
    <p>Province: ${bookinfo.price}</p>
    <p>Population: ${bookinfo.code}</p>
  `;
}

// Call the function to display county information
displaybookinfo();
const email = document.getElementById("email");
const password = document.getElementById("password"); 
const form = document.getElementById("form");
const msg = document.getElementById("msg");


// Function to validate the email
const validateEmail = (inputEmail)=> inputEmail.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

// Function to validate password
const validatePassword = (inputPassword) => inputPassword.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

// Function used to display errors
const generateError = (errorName, errorMsg) =>{
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  if(errorName == "email"){
      emailError.innerText = errorMsg;    
  }else if(errorName == "password"){
      passwordError.innerText = errorMsg;
  }
}

const formValidate = (inputEmail, inputPassword) =>{
  if(!validateEmail(inputEmail)){
      emailError = "please enter a valid email address";
      generateError("email",emailError);
      return;
  }
  if(!validatePassword(inputPassword)){
      passwordError = "please enter correct password";
      generateError(generateError("password",passwordError));
      return;
  }

}

//triggers when user submits the form
form.addEventListener("submit",(e) => {
  e.preventDefault();
  formValidate(email, password);
});

// Focusout event listener. Triggers when the user clicks anywhere else besides the input
email.addEventListener("focusout", (e)=>{
  if(!validateEmail(email)){
      email.style.borderColor = "red";
      generateError("email", "Please enter a valid email");
      email.parentElement.classList.add("error");
  }
});

// Focusout event listener triggers when the user clicks anywhere else besides the input
password.addEventListener("focusout", (e)=>{
  if(!validatePassword(password)){
      password.style.borderColor = "red";
      generateError("password", "Please enter a valid password");
      password.parentElement.classList.add("error");
  }
});
