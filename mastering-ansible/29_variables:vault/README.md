# Variables: vault

The vault feature can encrypt any structured data file used by
Ansible. This can include `groups_vars/` or `host_vars/` intro_inventory
variables, variables loaded by `include_vars` or `vars_files`, or
variables passed on the ansible-playbook command line.

[https://docs.ansible.com/ansible/playbooks_vault.html](https://docs.ansible.com/ansible/playbooks_vault.html)

## create vault file

```sh
ansible-vault create {file_name}
```

## Edit vault

```sh
ansible-vault edit {file_name}
```

## Accessing vault in commands

The password can be passed in through the command-line like so:

```sh
ansible-playbook play.yml --ask-vault-pass
```

---

To save typing the password each time, the password can be stored in a file:

```sh
echo "password" > ~/.vault_pass.txt
```

To use the password use `--vault-password-file`

```sh
ansinble-playbook play.yml --vault-password-file=~/.vault_pass.txt
```

To save having to specify the password file each time, it can be put
in the `ansible.cfg` file:

```
[defaults]
inventory = ./dev
vault_password_file = ~/.vault_pass.txt
```
