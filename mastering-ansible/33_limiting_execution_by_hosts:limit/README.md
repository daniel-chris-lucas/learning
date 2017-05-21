# Limiting Execution by Hosts: limit

You can add an exclusion criteria just by supplying the --limit flag to /usr/bin/ansible or /usr/bin/ansible-playbook:

```sh
ansible-playbook site.yml --limit datacenter2
```

[https://docs.ansible.com/ansible/intro_patterns.html](https://docs.ansible.com/ansible/intro_patterns.html)
