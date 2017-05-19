# Support Playbook 2 - Stack Status: uri, register, fail, when

## uri

Interacts with webservices

Interacts with HTTP and HTTPS web services and supports Digest, Basic
and WSSE HTTP authentication mechanisms.

[https://docs.ansible.com/ansible/uri_module.html](https://docs.ansible.com/ansible/uri_module.html)

## Register Variables (conditional)

Often in a playbook it may be useful to store the result of a given
command in a variable and access it later.

Use of the command module in this way can in many ways eliminate
the need to write site specific facts, for instance, you could test
for the existence of a particular program.

The `register` keyword decides what variable to save a result in.
The resulting variables can be used in templates, action lines,
or `when` statements.

[https://docs.ansible.com/ansible/playbooks_conditionals.html#register-variables](https://docs.ansible.com/ansible/playbooks_conditionals.html#register-variables)

[https://docs.ansible.com/ansible/playbooks_conditionals.html](https://docs.ansible.com/ansible/playbooks_conditionals.html)

## The When Statement

Sometimes you will want to skip a particular step on a particular host.
This could be something as simple as not installing a certain package
if the operating system is a particular version, or it could be something like performing some cleanup steps if a filesystem is getting full.

[https://docs.ansible.com/ansible/playbooks_conditionals.html#the-when-statement](https://docs.ansible.com/ansible/playbooks_conditionals.html#the-when-statement)

## Looping over the inventory

If you wish to loop over the inventory, or just a subset of it, one can use a regular `with_items` with the `play_hosts` or `groups` variables.

[http://docs.ansible.com/ansible/playbooks_loops.html#looping-over-the-inventory](http://docs.ansible.com/ansible/playbooks_loops.html#looping-over-the-inventory)
