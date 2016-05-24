# Learn C The Hard Way

## Exercise 2 : Make Is Your Python Now

Create a basic Makefile to clean builds and automatically compile
with warnings and debugging.

```
CFLAGS=-Wall -g

clean:
	rm -f ex1
	rm -rf ex1.dSYM
```

To use simply run `make clean` or `make ex1`
