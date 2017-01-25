"""This file defines the function that are used for the program.

Uses the program data from data.py"""
import os
import pickle

from data import *

# Score management

def fetch_scores():
    """Function to get the saved scores if the file exists.
    In any case return a dictionary, either unpickled
    or an empty dictionary"""

    if os.path.exists(scores_file_name):
        scores_file = open(scores_file_name, "rb")
        file_unpickler = pickle.Unpickler(scores_file_name)
        scores = file_unpickler.load()
        scores_file.close()
    else:
        scores = {}

    return scores

# User input management

def fetch_username():
    """Function for getting the user's name.
    The username must be at least 4 characters long,
    exclusively letters and numbers

    If the name isn't valid, recursively call the function
    until a valid name is given"""

    username = input("Enter your name : ")
    # Put first letter uppercase, the rest lowercase
    username = username.capitalize()
    if not username.isalnum() or len(username) < 4:
        print("Invalid username.")
        # Call the function again to enter a new username
        return fetch_username()
    else:
        return username
