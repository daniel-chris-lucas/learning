# Selective Removal: shell, register, with_items, when

## shell

Execute commands in nodes.

The `shell` module takes the command name followed by a list of
space-delimited arguments. It is almost exactly like the `command`
module but runs the command through a shell(`/bin/sh`) on the remote
node.

[https://docs.ansible.com/ansible/shell_module.html](https://docs.ansible.com/ansible/shell_module.html)

## Register Variables

Often in a playbook it may be useful to store the result of a given command in a variable and access it later. Use of the command module in this way can in many ways eliminate the need to write site specific facts, for instance, you could test for the existence of a particular program.

The ‘register’ keyword decides what variable to save a result in. The resulting variables can be used in templates, action lines, or `when` statements.

[https://docs.ansible.com/ansible/playbooks_conditionals.html#register-variables](https://docs.ansible.com/ansible/playbooks_conditionals.html#register-variables)

## The When Statement

Sometimes you will want to skip a particular step on a particular host. This could be something as simple as not installing a certain package if the operating system is a particular version, or it could be something like performing some cleanup steps if a filesystem is getting full.

This is easy to do in Ansible with the `when` clause, which contains a raw Jinja2 expression without double curly braces.

[https://docs.ansible.com/ansible/playbooks_conditionals.html#the-when-statement](https://docs.ansible.com/ansible/playbooks_conditionals.html#the-when-statement)
