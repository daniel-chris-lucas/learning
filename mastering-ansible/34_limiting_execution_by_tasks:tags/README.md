# Limiting Execution by Tasks: tags

If you have a large playbook it may become useful to be able to run a specific part of the configuration without running the whole playbook.

Both plays and tasks support a “tags:” attribute for this reason. You can __ONLY__ filter tasks based on tags from the command line with --tags or --skip-tags. Adding “tags:” in any part of a play (including roles) adds those tags to the contained tasks.

[https://docs.ansible.com/ansible/playbooks_tags.html](https://docs.ansible.com/ansible/playbooks_tags.html)

-----

To list tags:

```sh
ansible-playbook site.yml --list-tags
```

To filter tasks by tag:

```sh
# Use tags
ansible-playbook site.yml --tags "packages"

# Skip tags
ansible-playbook site.yml --skip-tags "packages"
```
