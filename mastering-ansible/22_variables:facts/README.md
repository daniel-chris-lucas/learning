# Variables: facts

Information discovered from systems: Facts

There are other places where variables can come from, but these are
a type of variable that are discovered, not set by the user.

Facts are derived from speaking with your remote systems.

[https://docs.ansible.com/ansible/playbooks_variables.html#information-discovered-from-systems-facts](https://docs.ansible.com/ansible/playbooks_variables.html#information-discovered-from-systems-facts)

## setup module

Gathers facts about remote hosts

This module is automatically called by playbooks to gather useful variables
about remote hosts that can be used in playbooks. It can also be executed
directly by `/usr/bin/ansible` to check what variables are available to a
host. Ansible provides many facts about the system, automatically.

[https://docs.ansible.com/ansible/setup_module.html](https://docs.ansible.com/ansible/setup_module.html)
