// Function to get URL parameters
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Get the username parameter from the URL
var userName = getParameterByName('user_name');
if (userName) {
    // Display the username in the first div
    var userDiv1 = document.getElementById('user_name');
    userDiv1.innerText = 'HELLO   ' + userName;

    // Display the username in the second div
    var userDiv2 = document.getElementById('userNameElement2');
    userDiv2.innerText = userName;
} else {
    // If username not found in URL, display a message
    var userDiv1 = document.getElementById('user_name');
    userDiv1.innerText = 'Username not found.';

    var userDiv2 = document.getElementById('userNameElement2');
    userDiv2.innerText = 'Username not found.';
}
// Add event listener to the form submit event
var form = document.getElementById("myform");

// Add event listener to the form submit event
form.addEventListener("submit", function(event) {
    // Prevent default form submission
    event.preventDefault();

    // Get the file input element
    var fileInput = document.querySelector('input[type="file"]');

    // Check if a file is selected
    if (fileInput.files && fileInput.files[0]) {
        var file = fileInput.files[0];
        var reader = new FileReader();

        // Read the file as data URL
        reader.onload = function(e) {
            // Create a text node with the file name
            var fileName = document.createTextNode(file.name);

            // Create audio element
            var audio = document.createElement('audio');
            audio.controls = true;
            audio.src = e.target.result;

            // Create divs to hold the audio player and file name
            var fileNameContainer = document.createElement('div');
            var audioPlayerContainer = document.createElement('div');

            // Append the file name to its container
            fileNameContainer.appendChild(fileName);

            // Append the audio player to its container
            audioPlayerContainer.appendChild(audio);

            // Create a div to hold the audio player and file name
            var audioContainer = document.createElement('div');

            // Append the file name container first
            audioContainer.appendChild(fileNameContainer);

            // Append the audio player container next
            audioContainer.appendChild(audioPlayerContainer);

            // Select the container where you want to append the audio and file name
            var uploadedContainer = document.getElementById('uploaded');

            // Append the audio player and file name container to the selected container
            uploadedContainer.appendChild(audioContainer);
            
           
        }
        };

        // Read the file
        reader.readAsDataURL(file);
})