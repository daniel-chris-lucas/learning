# Idempotence: changed_when, failed_when

When a shell/command or other module runs it will typically report “changed” status based on whether it thinks it affected machine state.

Sometimes you will know, based on the return code or output that it did not make any changes, and wish to override the “changed” result such that it does not appear in report output or does not cause handlers to fire.

[https://docs.ansible.com/ansible/playbooks_error_handling.html#overriding-the-changed-result](https://docs.ansible.com/ansible/playbooks_error_handling.html#overriding-the-changed-result)
