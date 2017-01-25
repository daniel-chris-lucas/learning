import os
import random
from math import ceil

user_money = 1000
keep_playing = True

print("You are sitting at a roulette table with $", user_money)

# As long as the user keeps playing keep repeating
while keep_playing:
    # Get the number to bet on
    user_number = -1
    while user_number < 0 or user_number > 49:
        user_number = input("Choose number to bet on (between 0 and 49) : ")

        # Try to convert the input
        try:
            user_number = int(user_number)
        except ValueError:
            user_number = -1
            continue

        if user_number < 0:
            print("The given number is lower than 0")
        if user_number > 49:
            print("The given number is larger than 49")

    # We've got the number and validated it, now ask how much to place on the bet
    bet_amount = 0
    while bet_amount <= 0 or bet_amount > user_money:
        bet_amount = input("Enter amount of money to place on bet : ")

        # Try to convert the input
        try:
            bet_amount = int(bet_amount)
        except ValueError:
            bet_amount = -1
            continue

        if bet_amount <= 0:
            print("The given amount is lower than 1")
        if bet_amount > user_money:
            print("You can't place this amount, you have $", user_money)

    # Spin the roulette
    winning_number = random.randrange(50)
    print("The roulette spins... ... and stops on", winning_number)

    # Calculate player's gains
    if winning_number == user_number:
        print("Congratulations! You won $", bet_amount * 3)
        user_money += bet_amount * 3
    elif winning_number % 2 == user_number % 2:
        bet_amount = ceil(bet_amount * 0.5)
        print("You bet on the correct colour. You won $", bet_amount)
        user_money += bet_amount
    else:
        print("Not this time, you lost your bet")
        user_money -= bet_amount

    # Stop the game if the player is ruined
    if user_money <= 0:
        print("You are ruined. Game over")
        keep_playing = False
    else:
        # Display player's money and ask if they want to keep playing
        print("You currently have $", user_money)
        quit = input("Do you want to leave the casino (y/n) ?")
        if quit == "y" or quit == "Y":
            print("You leave the casino with your gains")
            keep_playing = False

# Pause the system (Windows)
os.system("pause")
