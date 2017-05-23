# Jumping to Specific Tasks: list-tasks, step, start-at-task

These modes are very useful for testing new plays or debugging.

[https://docs.ansible.com/ansible/playbooks_startnstep.html](https://docs.ansible.com/ansible/playbooks_startnstep.html)


## Interactive execution of plays

```sh
ansible-playbook site.yml --step
```

## List all tasks in a playbook

```sh
ansible-playbook site.yml --list-tasks
```

## Start playbook from a task

```sh
ansible-playbook site.yml --start-at-task "copy demo app source"
```
