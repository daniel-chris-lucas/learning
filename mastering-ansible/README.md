# Mastering Ansible

To execute commands inside the Ansible controller, go inside `*/ansible` first.

## Setting up the environment

### Creating the environment

Before any of this can be done, make sure that __docker__, __docker-machine__
& __docker-compose__ are installed on the computer.

Start by creating a Docker machine so that `ssh` and other commands can be run
simulating a real environment:

```sh
docker-machine create -d virtualbox dev
```

This will create a new machine called 'dev'.

To add the machines environment variables to the current session run:

```sh
eval $(docker-machine env dev)
```

Navigate to `mastering-ansible/env` then generate ssh certificates that can be
used on your host machine and inside the ansible control machine :

```sh
# Generate the certificates
ssh-keygen -t rsa -f ansible

# Make a copy of the certificates in the hosts ssh directory
cp ansible* ~/.ssh

# Activate the new certificate on the host
ssh-add ~/.ssh/ansible

# Add ssh config to quickly ssh into machines
cat ssh_host_config >> ~/.ssh/config
```

Create the Docker network by running the following command from the
`mastering-ansible` directory :

```sh
docker-compose build && docker-compose run
```

### Restarting the environment

If the environment has already been created and needs starting run the following
commands from the `mastering-ansible` directory:

```sh
# Start the docker machine
docker-machine start dev

# Add docker machine env variables to the session
eval $(docker-machine env dev)

# Start the docker network
docker-compose up
```

### Using the environment

When everything has been set up and the network is running, open a new terminal
session. You should be able to ssh into the machines by running:

```sh
# ssh into ansible controller
ssh control

# ssh into webserver 1
ssh app01

# ssh into webserver 2
ssh app02

# ssh into loadbalancer
ssh lb01

# ssh into database
ssh db01
```

From the control container it is possible to ssh into all the other machines.
