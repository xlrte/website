---
sidebar_position: 2
---

# Secrets

Secrets management is built into `xlrte` and rests on the following principles:

* Secrets can be committed to git, as they are encrypted at rest.
* Secrets are environment specific, thus allowing different versions of the same secrets between environments. This also allows different people to have different privileges to access secrets.
* Secrets will be stored in your cloud providers native secret store, for instance Secret Manager for Google Cloud Platform.

For more help on how to use xlrte secrets, use the `xlrte secret` sub-command to get help. 
Noteworthy is, when a new person is added to the project, they should run `xlrte secret init -e [env]`, push the changes including their public-key entry, and ask someone who already has access to run the `xlrte secret refresh` command, to give them access.

## Binding secrets to services
For resources managed by `xlrte`, such as Cloud SQL, secrets are automatically created and bound to the services.

For services added by developers with `xlrte secret add`, a reference must be added in the `service.yaml` for the given service, in the top-level `env` block, like so:

```yaml
env:
  secrets:
    api_key: my-api-key
```

The above would bind the secret `my-api-key` to the `api_key` environment variable at runtime.