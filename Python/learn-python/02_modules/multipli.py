"""multipli module containing table function"""
import os


def table(nb, max=10):
    """Display multiplication table for nb from 1 * nb to max * nb"""
    i = 0
    while i < max:
        print(i + 1, "*", nb, "=", (i + 1) * nb)
        i += 1

# Test the function table
# Only called if directly executing this file (not import)
if __name__ == "__main__":
    table(4)
    os.system("pause")
