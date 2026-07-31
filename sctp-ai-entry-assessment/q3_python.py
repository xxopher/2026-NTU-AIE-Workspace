# Question 3 - String Manipulation
# Topic: Name Formatting Utility
#
# Task 1:
# Write a function called formatName(firstName, lastName) that accepts two strings
# and returns a formatted string in this format: "lastName, firstName"
# Example: formatName("John", "Smith") → "Smith, John"

def formatName(firstName, lastName):
    # Add your code here
    # .capitalize() ensures the first letter is uppercase and the rest are lowercase
    clean_first = firstName.capitalize()
    clean_last = lastName.capitalize()
    
    # Using an f-string to format into "LastName, FirstName"
    return f"{clean_last}, {clean_first}"


# Task 2:
# Write a function called formatInitials(firstName, lastName) that returns the
# initials of the person as a string in uppercase.
# Example: formatInitials("john", "smith") → "J.S."
# Note: your function should handle inputs in any case (upper, lower, or mixed)
# and always produce properly capitalised output.

def formatInitials(firstName, lastName):
    # Add your code here
    # [0] grabs the first character, and .upper() ensures it is capitalized
    first_initial = firstName[0].upper()
    second_initial = lastName[0].upper()
    
    # Combining them with periods
    return f"{first_initial}.{second_initial}."


# Task 3:
# Call both functions with the following inputs and print each result:
#   formatName("Alice", "Tan")  → Expected: "Tan, Alice"
#   formatName("bob", "lim")    → Expected: "Lim, Bob"
#   formatInitials("Alice","Tan") → Expected: "A.T."
#   formatInitials("bob","lim")   → Expected: "B.L."

# Add your code here
print(formatName("Alice", "Tan"))      # Expected: "Tan, Alice"
print(formatName("bob", "lim"))        # Expected: "Lim, Bob"
print(formatInitials("Alice", "Tan"))  # Expected: "A.T."
print(formatInitials("bob", "lim"))    # Expected: "B.L."