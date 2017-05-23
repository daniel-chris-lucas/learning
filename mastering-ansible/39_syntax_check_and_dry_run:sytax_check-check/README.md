# Syntax-Check & Dry-Run: syntax-check, check

## Check Mode ("Dry Run")

When ansible-playbook is executed with `--check` it will not make any
changes on remote systems. Instead, any module instrumented to support
‘check mode’ (which contains most of the primary core modules, but it is
not required that all modules do this) will report what changes they would
have made rather than making them. Other modules that do not support check
mode will also take no action, but just will not report what changes they
might have made.

Check mode is just a simulation, and if you have steps that use
conditionals that depend on the results of prior commands, it may be less
useful for you. However it is great for one-node-at-time basic configuration
management use cases.

[https://docs.ansible.com/ansible/playbooks_checkmode.html](https://docs.ansible.com/ansible/playbooks_checkmode.html)

## Check Syntax

```sh
ansible-playbook --syntax-check site.yml
```

## Dry Run

```sh
ansible-playbook --check site.yml
```
