console.log('script start');

// Enter value on number_input.html
function saveNumber() {
    let number = document.getElementById("numberInput").value;
    localStorage.setItem("savedNumber", number);
    // alert("Number saved successfully!");
}

// Display value on display_number.html
function displaySavedNumber() {
    let savedNumber = localStorage.getItem("savedNumber");
    document.getElementById("displayArea").innerText = "Snowflake Save the Bears: " + savedNumber;
  }

  // Call the function initially
  displaySavedNumber();

  // Continuously check for changes in localStorage
  setInterval(function() {
    displaySavedNumber();
  }, 1000); // Check every second