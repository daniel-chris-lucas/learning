# Test if a year, given by the user,
# is a leap year or not

# Ask the user for a year
year = input("Enter a year : ")

# Convert the input to a number
year = int(year)

if year % 400 or (year % 4 == 0 and year % 100 != 0):
    print("The year is a leap year.")
else:
    print("The year is not a leap year.")
