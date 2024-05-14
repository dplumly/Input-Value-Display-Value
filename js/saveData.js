console.log('Start save data script');


// Load current number when the window loads
window.addEventListener("load", () => {
    let number = localStorage.getItem('savedNumber') || 0;
    document.getElementById("currentNumber").innerText = "Current number is: " + number;
});

// Save the number when the save button is clicked
document.getElementById("saveButton").addEventListener('click', () => {
    let number = document.getElementById("numberInput").value;
    localStorage.setItem("savedNumber", number);

    document.getElementById("currentNumber").innerText = "Current number is: " + number;
    console.log('Updated value: ' + number);
});

// Reset the number to 0 when the reset button is clicked
document.getElementById('resetButton').addEventListener('click', () => {
    localStorage.clear();
    document.getElementById('numberInput').value = 0;
    document.getElementById("currentNumber").innerText = "Current number is: 0";
    console.log('Number reset to 0');
});