---
sidebar_position: 3
---

# What are Resources?
`Resources` are the services, such as databases, messaging middleware, block storage services (GCS, S3) etc that a service could depend on.

Typically resources will be identified by name and have two sets of configurations:
* Service configuration, in the `depends_on` block.
* Environment specific configuration in `resources.yaml`, which tells of environment specific resources.

The latter may not be necessary for all resources, and is not necessary for non-production environments, as all resources come pre-configured with sensible defaults for a cheap-to-run, low volume environment. However, where they are required, they will be separated as above, in order to enforce _separation of concerns_.

## Example: a Postgres database
Say we wanted to add a postgres database as a dependency to a service, we might add something like this to the `service.yaml` file:

```yaml
depends_on:
  cloudsql: 
  - name: my-pg-db
    type: postgres

```

Because GCP's `CloudSQL` service is one that requires some settings to define resources allocated, we could have the following in an environment specific file, such as `.xlrte/config/environments/prod/resources.yaml`:

```yaml 

 cloudsql:
  - name: my-pg-db 
    machine_type: db-n1-standard-4
    storage_size: 50
```
This would tell GCP to allocate 50GB of db storage, using a `db-n1-standard-4` instance. There are more configuration options available, which you can find in the `GCP Resource Reference` section of this documentation.