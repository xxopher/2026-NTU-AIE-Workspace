// Question 2 - Arrays and Loops
// Topic: Inventory Tracker
//
// Task 1:
// Declare an empty array called inventory to store item names as strings.

// Add your code here


// Task 2:
// Write a function called addItem(itemName) that adds the given item to the
// inventory array. If the item already exists, print a message instead of adding it.
// Example message: "Mouse is already in inventory."

function addItem(itemName) {
    // Add your code here
}


// Task 3:
// Write a function called listInventory() that prints all items in the inventory.
// If the inventory is empty, print: "Inventory is empty."

function listInventory() {
    // Add your code here
}


// Task 4:
// Call the functions in this order and observe the output:
addItem("Laptop");
addItem("Mouse");
addItem("Keyboard");
addItem("Mouse");   // Should trigger duplicate warning
listInventory();

// Expected output:
// Mouse is already in inventory.
// Inventory: [ 'Laptop', 'Mouse', 'Keyboard' ]
