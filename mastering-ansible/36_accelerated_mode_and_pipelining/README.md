# Accelerated Mode and Pipelining

## Accelerated Mode (Deprecated)

Accelerated mode is there to help connections work faster, but still uses SSH for initial secure key exchange. There is no additional public key infrastructure to manage, and this does not require things like NTP or even DNS.

Accelerated mode works by launching a temporary daemon over SSH. Once the daemon is running, Ansible will connect directly to it via a socket connection. Ansible secures this communication by using a temporary AES key that is exchanged during the SSH connection (this key is different for every host, and is also regenerated periodically).

[https://docs.ansible.com/ansible/playbooks_acceleration.html](https://docs.ansible.com/ansible/playbooks_acceleration.html)

## Pipelining

Enabling pipelining reduces the number of SSH operations required to execute a module on the remote server, by executing many ansible modules without actual file transfer. This can result in a very significant performance improvement when enabled, however when using “sudo:” operations you must first disable ‘requiretty’ in /etc/sudoers on all managed hosts.

[https://docs.ansible.com/ansible/intro_configuration.html#pipelining](https://docs.ansible.com/ansible/intro_configuration.html#pipelining)
