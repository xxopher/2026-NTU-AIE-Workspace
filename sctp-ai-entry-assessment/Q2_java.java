// Question 2 - Arrays and Loops
// Topic: Inventory Tracker
//
// Task 1:
// An ArrayList called inventory has been declared for you below.
//
// Task 2:
// Write a method called addItem(itemName) that adds the given item to the
// inventory list. If the item already exists, print a message instead of adding it.
// Example message: "Mouse is already in inventory."
//
// Task 3:
// Write a method called listInventory() that prints all items in the inventory.
// If the inventory is empty, print: "Inventory is empty."

import java.util.ArrayList;

public class Q2_java {

    static ArrayList<String> inventory = new ArrayList<>();

    public static void addItem(String itemName) {
        // Add your code here
    }

    public static void listInventory() {
        // Add your code here
    }

    public static void main(String[] args) {
        // Task 4: Call the methods in this order and observe the output:
        addItem("Laptop");
        addItem("Mouse");
        addItem("Keyboard");
        addItem("Mouse");   // Should trigger duplicate warning
        listInventory();

        // Expected output:
        // Mouse is already in inventory.
        // Inventory: [Laptop, Mouse, Keyboard]
    }
}
