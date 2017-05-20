# Variables: defaults

Role default variables allow you to set different variables for included
or dependent roles. To create default add a _defaults/main.yml_ file
in your role directory. These variables will have the lowest priority
of any variables available, and can be easily overridden by any other
variable, including inventory variables.

[https://docs.ansible.com/ansible/playbooks_roles.html#role-default-variables](https://docs.ansible.com/ansible/playbooks_roles.html#role-default-variables)
