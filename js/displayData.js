console.log('Start display data script');


////////////////////////////////////////////////////////////////////////////
// Displays the number
////////////////////////////////////////////////////////////////////////////

// Update the display every second
setInterval(updateDisplay, 1000);

// Function to update the display
function updateDisplay() {
  let savedNumber = localStorage.getItem("savedNumber") || 0;
  document.getElementById("displayArea").innerText = "Snowflake Save the Bears: " + savedNumber;
  console.log('Updated value: ' + savedNumber);
}

// Set savedNumber to 0 if it's null
function setToZero(savedNumber) {
  if (savedNumber === null) {
    console.log('Set to 0');
    savedNumber = 0;
  }
  return savedNumber;
}