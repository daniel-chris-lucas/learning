# Debugging: debug

## debug: Print statements during execution

This module prints statements during execution and can be useful for
debugging variables or expressions without necessarily halting the
playbook.

Useful for debugging together with the 'when:' directive.

[https://docs.ansible.com/ansible/debug_module.html](https://docs.ansible.com/ansible/debug_module.html)

---

In the code add a debug statement:

```
- debug: var=active.stdout_lines

# or
- debug:
    var: active.stdout_lines
    verbosity: 2

# display all vars
- debug: var=vars

# display hosts
- debug: var=hosts
```
