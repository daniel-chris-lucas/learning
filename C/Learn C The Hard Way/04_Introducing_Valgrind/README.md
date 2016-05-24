# Learn C The Hard Way

## Exercise 4 : Introducing Valgrind

Install Valgrind from source and learn how to use it.

### Installation

```
# 1) Download it (use wget if you don't have curl)
curl -O http://valgrind.org/downloads/valgrind-3.6.1.tar.bz2

# use md5sum to make sure it matches the one on the site
md5sum valgrind-3.6.1.tar.bz2

# 2) Unpack it.
tar -xjvf valgrind-3.6.1.tar.bz2

# cd into the newly created directory
cd valgrind-3.6.1

# 3) configure it
./configure

# 4) make it
make

# 5) install it (need root)
sudo make install
```

### Using

Compile the application making sure that -g is passed to cc for debugging. `make ex4`

Then execute the binary using valgrind:

```
valgrind ./ex4

# Might need to use this for real lines
valgrind --track-origins=yes ./ex4
```
