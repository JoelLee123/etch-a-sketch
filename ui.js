//Get button
const btn = document.querySelector('#btnGenerator')
const parentDiv = document.querySelector('#parentDiv');

btn.addEventListener('click', () => {
    let number = getUserInput();
    generateGrid(number);
});


function getUserInput() {
    let number;

    while (true) {
        try {
            let userInput = prompt("Enter a number between 1 and 100");

            if (userInput === null) {
                throw new Error("User input must be provided");
            } 

            //10 is for base 10 numbering system
            number = parseInt(userInput, 10);

            if (isNaN(number) || number < 1 || number > 100) {
                throw new Error("Invalid input. Please enter a number between 1 and 100");
            }

            return number;

        } catch (error) {
            alert(error.message);
        }
    }
}

function generateGrid(number) {
    //1. Clear the previous grid
    parentDiv.innerHTML = "";

    //2. Generate the new grid with the given number
    for (let i = 0; i < number; i++) {
        const div = document.createElement("div");
        div.className = "childDiv";
        parentDiv.appendChild(div);
    }
}
