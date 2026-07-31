# Question 1 - Functions and Conditionals
# Topic: Temperature Converter
#
# Task 1:
# Write a function called convertTemp that accepts two arguments:
#   - value: a numeric temperature value
#   - unit: a string, either "C" for Celsius or "F" for Fahrenheit
#
# The function should:
#   - Convert Celsius to Fahrenheit if unit is "C"  →  Formula: (value × 9/5) + 32
#   - Convert Fahrenheit to Celsius if unit is "F"  →  Formula: (value − 32) × 5/9
#   - Return -1 if unit is neither "C" nor "F"
#   - Round the result to 2 decimal places before returning

def convertTemp(value, unit):
    # Add your code here
    pass


# Task 2:
# Call the function with the following inputs and print each result:
#   convertTemp(100, "C")     → Expected: 212.0
#   convertTemp(32, "F")      → Expected: 0.0
#   convertTemp(37, "C")      → Expected: 98.6
#   convertTemp("invalid","X")→ Expected: -1

# Add your code here
def convertTemp(value, unit):
    # Task 1: Check the unit and apply the correct conversion formula
    if unit == "C":
        result = (value * 9/5) + 32
        return round(result, 2)
        
    elif unit == "F":
        result = (value - 32) * 5/9
        return round(result, 2)
        
    else:
        # Returns -1 if the unit is neither "C" nor "F"
        # This also handles the "X" case in your test inputs
        return -1


# Task 2: Function Calls and Printing Results
print(convertTemp(100, "C"))         # Expected: 212.0
print(convertTemp(32, "F"))          # Expected: 0.0
print(convertTemp(37, "C"))          # Expected: 98.6
print(convertTemp("invalid", "X"))   # Expected: -1