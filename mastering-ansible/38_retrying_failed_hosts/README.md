# Retrying Failed Hosts

If site.yml failed run :

```sh
ansible-playbook site.yml --limit @/home/ansible/site.retry
```
