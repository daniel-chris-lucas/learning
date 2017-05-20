# Converting to Roles: tasks, handlers

[https://docs.ansible.com/ansible/playbooks_roles.html](https://docs.ansible.com/ansible/playbooks_roles.html)

## Roles

Roles are just automation around 'include' directives, and don't contain
much additional magic beyond some improvements to search path handling
for references files.

[https://docs.ansible.com/ansible/playbooks_roles.html#roles](https://docs.ansible.com/ansible/playbooks_roles.html#roles)

-----

Move tasks into _{role}_/tasks/main.yml

Move handlers into _{role}_/handlers/main.yml

Remove tasks and handlers from play and call the role using the `roles`
keyword. Example:

```
---
- hosts: control
  become: true
  roles:
      - control
```
