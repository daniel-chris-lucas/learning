# Services: apache2_module, handlers, notify

## apache2_module

Enables or disables a specified module of the Apache2 webserver.

[https://docs.ansible.com/ansible/apache2_module_module.html](https://docs.ansible.com/ansible/apache2_module_module.html)

## Handlers

Handlers are used for running operations on change.

These 'notify' actions are triggered at the end of each block of tasks
in a play, and will only be triggered once even if notified by
multiple different tasks.

[https://docs.ansible.com/ansible/playbooks_intro.html#handlers-running-operations-on-change](https://docs.ansible.com/ansible/playbooks_intro.html#handlers-running-operations-on-change)
