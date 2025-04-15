/*
===========================================
🐾 Debugging & Exception Handling Activity
===========================================

🎯 Activity Overview:
Students will be presented with a partially written program containing
runtime and logic errors. Their goal is to debug the program, identify
exceptions, and implement appropriate try/catch blocks.

---

📘 Scenario:
You’ve been hired to help a local pet shelter digitize its animal adoption records.

The program is intended to:
- Allow users to enter an animal type and adoption fee
- Add the animal and fee to a list
- Retrieve the adoption fee for a specific animal

Unfortunately, the original developer left the program with bugs and missing error handling.
Your job is to fix it!

---

🧭 Instructions:

1️⃣ Understand the Errors:
   - Run the program
   - Observe any thrown exceptions
   - Document what went wrong and where

2️⃣ Write Exception Handling Code:
   - Use `try/catch` blocks to catch runtime issues

3️⃣ Test and Debug:
   - Try valid and invalid inputs
   - Ensure the program handles errors gracefully and continues running
*/

// ============================================
// 🐞 Initial Code with Bugs (to be debugged)
// ============================================

// ============================================
// 🐾 Debugging & Exception Handling Activity
// ============================================

const prompt = require('prompt-sync')();

let animals = [];
let fees = [];

function addAnimal(name, fee) {
    if (!name || typeof name !== 'string' || name.trim() === '') {
        throw new Error("Animal name cannot be blank.");
    }
    if (isNaN(fee) || fee < 0) {
        throw new Error("Adoption fee must be a non-negative number.");
    }
    animals.push(name.trim());
    fees.push(fee);
}

function getAdoptionFee(animalName) {
    let index = animals.indexOf(animalName.trim());
    if (index === -1) {
        throw new Error("Animal not found in records.");
    }
    return fees[index];
}

// ============================================
// 🚀 Main Program Logic
// ============================================

console.log("Welcome to the Pet Shelter System");

while (true) {
    try {
        let action = prompt("Choose an action: 'add', 'fee', or 'exit': ").toLowerCase();

        if (action === "exit") {
            console.log("Goodbye!");
            break;
        }

        if (action === "add") {
            let animal = prompt("Enter the animal's name: ");
            let feeInput = prompt("Enter the adoption fee: ");
            let fee = Number(feeInput);

            try {
                addAnimal(animal, fee);
                console.log(`${animal} added with a fee of $${fee}.`);
            } catch (err) {
                console.log("Error adding animal:", err.message);
            }

        } else if (action === "fee") {
            let animal = prompt("Enter the animal's name to find its adoption fee: ");

            try {
                let fee = getAdoptionFee(animal);
                console.log(`${animal}'s adoption fee is $${fee}.`);
            } catch (err) {
                console.log("Error retrieving fee:", err.message);
            }

        } else {
            console.log("Invalid action. Please choose 'add', 'fee', or 'exit'.");
        }

    } catch (err) {
        console.log("Unexpected error:", err.message);
    }
}

// ============================================
// 🧩 Problems to Solve
// ============================================

/*
🔹 Invalid Input Errors:
- What if the user enters a negative fee?
A: I added checks so it throws an error if someone types in a negative number or something else that isn't a number at all.
- What if the animal name is blank?
A: I made sure the animal name can't be blank or just spaces.
- What if an animal isn't found?
A: If someone searches for an animal that was never added it shows an error instead of crashing.

🔹 Code Flow Problems:
- What happens when an exception is thrown?
A: I wrapped the risky stuff in try and catch so the program keeps going even when something breaks.
- Does the rest of the program continue?
A: Now when an error happens it tells the user what went wrong and keeps running like it shold.
🔹 Structured Exception Handling:
- Add `try/catch` blocks to catch these errors and allow the app to continue running.
*/

/*
🛠️ My Debugging Notes:

- The original code was using prompt() but it broke in Node so I added prompt-sync to fix that.
- I noticed there was no check for empty names or non-number fees, so I added validation for both.
- I used try/catch to stop the program from crashing when users enter bad input or ask for animals that don’t exist.
- I tested it by adding normal animals, using blank names, typing letters instead of numbers, and asking for animals not in the list.
- Everything worked and the program keeps running even after an error, which is what the instructions asked for.
*/