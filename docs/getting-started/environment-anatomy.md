---
sidebar_position: 4
---

# Anatomy of an environment

If you initialized an environment in the previous step, you should now have a folder structure that looks something like this in your project folder: 

```bash
.xlrte
│
└───config
    │
    └───environments
    │   │
    │   └───[environment name]
    │       │   resources.yaml
    │       │   versions.yaml
    │       └───pubkeys
    │       │    │   [name & email].asc
    │       └───secrets
    │   
    └───services
        │   [service.yaml-files go here!]

```

A minimal `resources.yaml` should look something like this:

```yaml
context: [gcp project you chose]
region: [gcp region]
```

`xlrte` follows a folder convention, where:

* `config/environments` contains the separate environment specific configurations in sub-folders named after each environment.
* `config/environments/[env]/resources.yaml` contains basic environment information and customizations to the resources used (such as virtual CPUs, memory, storage etc). For now, you do not need to concern yourself with any configuration other than `context` and `region`, as by default we provide sensible defaults for a low-traffic, cheap-to-run development environment.
* `config/environments/[env]/versions.yaml` contains service versions to deploy for this environment. This file is not mandatory, and the `-v` cli argument can be used instead to define a version for services. `versions.yaml` is however necessary if you want to have different versions of the numerous services you might deploy.
* `config/environments/[env]/secrets` contains all secrets for an environment, encrypted at rest. Run `xlrte secret help` to get more information on how to use secrets from the cli.
* `config/services` is the folder that contains all services and their dependency definitions, independent of environment.
