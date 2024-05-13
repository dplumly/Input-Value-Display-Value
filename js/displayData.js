console.log('Start display data script');

////////////////////////////////////////////////////////////////////////////
// Displays the number
////////////////////////////////////////////////////////////////////////////

setInterval(() => {
    let savedNumber = localStorage.getItem("savedNumber");
    document.getElementById("displayArea").innerText = "Snowflake Save the Bears: " + savedNumber;
  }, 1000); 