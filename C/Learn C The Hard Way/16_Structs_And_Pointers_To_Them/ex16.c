#include <stdio.h>
#include <assert.h>
#include <stdlib.h>
#include <string.h>

struct Person
{
    char *name;
    int age;
    int height;
    int weight;
};

struct Person *Person_create(char *name, int age, int height, int weight)
{
    struct Person *who = malloc(sizeof(struct Person));
    assert(who != NULL);

    who->name = strdup(name);
    who->age = age;
    who->height = height;
    who->weight = weight;

    return who;
}

void Person_destroy(struct Person *who)
{
    assert(who != NULL);

    free(who->name);
    free(who);
}

void Person_print(struct Person *who)
{
    assert(who != NULL);

    printf("Name: %s\n", who->name);
    printf("\tAge: %d\n", who->age);
    printf("\tHeight: %d\n", who->height);
    printf("\tWeight: %d\n", who->weight);
}

int main(int argc, char *argv[])
{
    // make two people structures
    struct Person *dan = Person_create("Daniel Lucas", 26, 72, 140);
    struct Person *john = Person_create("John Doe", 20, 64, 180);

    // print them out and where they are in memory
    printf("Dan is at memory location %p:\n", dan);
    Person_print(dan);

    printf("John is at memory location %p:\n", john);
    Person_print(john);

    // make everyone age 20 years and print them again
    dan->age = 20;
    dan->height -= 2;
    dan->weight += 40;
    Person_print(dan);

    john->age += 20;
    dan->weight += 20;
    Person_print(john);

    // destroy them both so we clean up
    Person_destroy(dan);
    Person_destroy(john);

    return 0;
}
