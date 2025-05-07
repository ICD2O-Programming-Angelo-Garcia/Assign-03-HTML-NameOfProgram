/* Created by: Angelo Garcia
* Created on: May 2025
* This file contains the CSS for index.html
*/
// Function to convert miles per hour to kilometers per hour
function convertMphToKph() {
  // Get the value from the input field
  var mph = document.getElementById("mph-input").value;
  
  // Check if the input is a valid number
  if (mph && mph > 0) {
    // Convert mph to km/h (1 mph = 1.60934 km/h)
    var kph = mph * 1.60934;
    
    // Display the result
    document.getElementById("result").innerHTML = mph + " mph is equal to " + kph.toFixed(2) + " km/h";
  } else {
    // If input is invalid, display an error message
    document.getElementById("result").innerHTML = "Please enter a valid number greater than 0.";
  }
}
