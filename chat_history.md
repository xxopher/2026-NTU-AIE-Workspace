# Pair-Programming History & Solution Registry

This repository contains the completed solutions for the **(SCTP) Advanced Professional Certificate in AI Engineering - Technical Entry Assessment**. The solutions are written in **Python** (using the `q1_python.py`, `q2_python.py`, and `q3_python.py` files).

---

## 📋 Research & Formula Registry

| Category | Item | Specifications / Formulas | Official Reference |
| :--- | :--- | :--- | :--- |
| **Q1** | Temperature Conversion | Celsius to Fahrenheit: `(value × 9/5) + 32`<br>Fahrenheit to Celsius: `(value − 32) × 5/9` | [SCTP Technical Entry Assessment PDF / Specs](README.md) |
| **Q2** | Inventory Storage | List-based unique item storage with existence checking | [Python List Documentation](https://docs.python.org/3/tutorial/datastructures.html) |
| **Q3** | String Formatting | Case correction with `.capitalize()` and initials via string indexing `[0].upper()` | [Python String Methods](https://docs.python.org/3/library/stdtypes.html#string-methods) |

---

## 🛠️ Technical Decisions & Implementation Details

### 1. Question 1: Temperature Converter (`q1_python.py`)
* **Logic Design:** A consolidated `convertTemp(value, unit)` function.
* **Formulas & Operations:**
  * Uses `round(result, 2)` to guarantee exactly 2 decimal places before returning.
  * Handles the edge case of an invalid unit `"X"` by returning `-1`.
  * Safe-guarding: If input is invalid (like `"invalid"` temperature value), the code will return `-1` if the unit is unrecognized.

### 2. Question 2: Inventory Tracker (`q2_python.py`)
* **Logic Design:** Use a globally scoped `inventory` array (Python List).
* **Functions:**
  * `addItem(itemName)`: Uses Python's `in` keyword to search for items in $O(N)$ time. Prints `{itemName} is already in inventory.` on duplicates. Otherwise, appends via `.append()`.
  * `listInventory()`: Check empty state using `len(inventory) == 0`. Prints formatted listing `Inventory: [...]` to match assessment specification requirements.

### 3. Question 3: Name Formatting Utility (`q3_python.py`)
* **Logic Design:** Reformatting names into standardized layouts.
* **Functions:**
  * `formatName(firstName, lastName)`: Leverages `.capitalize()` to ensure names are always proper nouns (first letter capitalized, other letters in lowercase). Returns `"lastName, firstName"`.
  * `formatInitials(firstName, lastName)`: Grabs index `[0]` of each string, converts to uppercase via `.upper()`, and appends terminal periods for output formatting (e.g., `"J.S."`).

---

## 🚀 Execution & Operations Guide

### How to Run Locally
Ensure you have Python 3.x installed on your machine. Run the solution files using the terminal:

```bash
# Run Temperature Converter
python q1_python.py

# Run Inventory Tracker
python q2_python.py

# Run Name Formatting Utility
python q3_python.py
```

### Git Commits & Remote Sync Instructions
To synchronize changes to your remote GitHub branch:

```bash
# Add all files to staging
git add .

# Commit solutions
git commit -m "feat: complete all python assessment solutions and add history backup"

# Push to default main branch
git push -u origin main
```
