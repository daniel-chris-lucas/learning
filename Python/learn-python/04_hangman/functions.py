"""This file defines the function that are used for the program.

Uses the program data from data.py"""
import os
import pickle
from random import choice

from data import *


# Score management

def fetch_scores():
    """Function to get the saved scores if the file exists.
    In any case return a dictionary, either unpickled
    or an empty dictionary"""

    if os.path.exists(scores_file_name):
        scores_file = open(scores_file_name, "rb")
        file_unpickler = pickle.Unpickler(scores_file)
        scores = file_unpickler.load()
        scores_file.close()
    else:
        scores = {}

    return scores


def save_scores(scores):
    """Function to save the scores in the file scores_file_name.
    Receives the scores to save as a parameter"""

    scores_file = open(scores_file_name, "wb")
    file_pickler = pickle.Pickler(scores_file)
    file_pickler.dump(scores)
    scores_file.close()


# User input management

def fetch_username():
    """Function for getting the user's name.
    The username must be at least 4 characters long,
    exclusively letters and numbers

    If the name isn't valid, recursively call the function
    until a valid name is given"""

    username = input("Enter your name : ")
    username = username.capitalize()
    if not username.isalnum() or len(username) < 4:
        print("Name is invalid. Please enter another name.")
        # Call the function again to get another name
        return fetch_username()

    return username


def fetch_letter():
    """Function for getting a letter from the user.
    If the input is not a letter, recursively call the function until
    the input is valid"""

    letter = input("Enter a letter : ")
    letter = letter.lower()

    if len(letter) > 1 or not letter.isalpha():
        print("You have not entered a valid letter.")
        return fetch_letter()

    return letter


# Hangman functions

def pick_word():
    """Function returns a random word from the list of words words_list

    Uses the choice function from the random module."""
    return choice(words_list)


def fetch_masked_word(complete_word, found_letters):
    """Function returns a partially or entirely masked word, based on:
    - the original word (type str)
    - the found letters (type list)

    Returns the original word with * replacing the letters that haven't
    been found"""

    masked_word = ""
    for letter in complete_word:
        if letter in found_letters:
            masked_word += letter
        else:
            masked_word += "*"

    return masked_word
