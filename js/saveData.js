console.log('Start save data script');

// let number = document.getElementById("numberInput").value;

let number = localStorage.getItem('savedNumber');

window.addEventListener("load", () => {
    document.getElementById("currentNumber").innerText = "Current number is: " + number;
  });

////////////////////////////////////////////////////////////////////////////
// Saves the number
////////////////////////////////////////////////////////////////////////////

document.getElementById("saveButton").addEventListener('click', () => {
    let number = document.getElementById("numberInput").value;
    localStorage.setItem("savedNumber", number);

    document.getElementById("currentNumber").innerText = "Current number is: " + number;
    document.getElementById('numberInput').value = null;
});

////////////////////////////////////////////////////////////////////////////
// Reset the number to 0
////////////////////////////////////////////////////////////////////////////
document.getElementById('resetButton').addEventListener('click', () => {
    localStorage.clear();
    document.getElementById('numberInput').value = 0;
    document.getElementById("currentNumber").innerText = "Current number is: " + 0;
});