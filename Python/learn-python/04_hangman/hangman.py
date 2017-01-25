"""This file contains the Hangman game.

It uses the files :
- data.py
- functions.py"""

from data import *
from functions import *

# Get the scores of the game
scores = fetch_scores()

# Get the username
user = fetch_username()

# If the user doesn't have a score, add one
if user not in scores.keys():
    scores[user] = 0
