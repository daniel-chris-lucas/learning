# Roles Overview

## Playbook Roles and Include Statements

While it is possible to write a playbook in one very large file (and you might start out learning playbooks this way), eventually you’ll want to reuse files and start to organize things.

At a basic level, including task files allows you to break up bits of configuration policy into smaller files. Task includes pull in tasks from other files. Since handlers are tasks too, you can also include handler files from the ‘handler’ section.

[https://docs.ansible.com/ansible/playbooks_roles.html](https://docs.ansible.com/ansible/playbooks_roles.html)

## Ansible Galaxy

Ansible Galaxy refers to the [Galaxy](https://galaxy.ansible.com/) website
where users can share roles, and to a command line tool for installing,
creating and managing roles.

[https://docs.ansible.com/ansible/galaxy.html](https://docs.ansible.com/ansible/galaxy.html)

### Creating roles

Use the `init` command to intialize the base structure of a new role,
saving time on creating the various directories and main.yml files a
role requires.

```sh
ansible-galaxy init role_name
```

[https://docs.ansible.com/ansible/galaxy.html#create-roles](https://docs.ansible.com/ansible/galaxy.html#create-roles)
