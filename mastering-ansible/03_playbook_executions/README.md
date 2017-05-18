# Playbook Executions

## Quick Ansible Notes

### Executing Ansible Commands

__List hosts :__

```sh
ansible --list-hosts all

ansible --list-hosts "*"

ansible --list-hosts loadbalancer

ansible --list-hosts db01

ansible --list-hosts "app0*"
```

__Ping hosts :__

```sh
ansible -m ping all
```

__Get hostnames :__

```sh
ansible -m command -a "hostname" all
```

## Executing Ansible Playbooks

```sh
ansible-playbook playbooks/hostname.yml
```
