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

# Keep track of when to stop the game
keep_playing = 'y'

while keep_playing != 'n':
    print("Player {0}: {1} point(s)".format(user, scores[user]))
    word_to_find = pick_word()
    found_letters = []
    found_word = fetch_masked_word(word_to_find, found_letters)
    nb_chances = nb_tries

    while found_word != word_to_find and nb_chances > 0:
        print("Word to find {0} ({1} tries remaining)".format(found_word, nb_chances))
        letter = fetch_letter()

        if letter in found_letters:
            print("You have already tried this letter.")
        elif letter in word_to_find:
            found_letters.append(letter)
            print("Well done.")
        else:
            nb_chances -= 1
            print("... no, this letter is not in the word...")

        found_word = fetch_masked_word(word_to_find, found_letters)

    # Has the word been found or all chances used?
    if word_to_find == found_word:
        print("Congratulations! You found the word {0}".format(word_to_find))
    else:
        print("HUNG !!! You lost.")

    # Update the user's score
    scores[user] += nb_chances

    keep_playing = input("Do you want to keep playing (Y/N)")
    keep_playing = keep_playing.lower()

# Game is finished, save the scores
save_scores(scores)

# Display user's score
print("You finished the game with {0} points.".format(scores[user]))
