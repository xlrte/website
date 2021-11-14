---
sidebar_position: 3
---

# Cloud SQL

Currently, only Postgres databases are supported by _xlrte_. When you add a Cloud SQL dependency to a service, we will automatically create the following:

* A private network to ensure the DB is secure
* Username and password secrets
* A serverless VPC so your service can connect to the database
* The database instance and database itself

## service.yaml
A Cloud SQL database is added in the `depends_on` section of a service like this:

```yaml
## omitted part of service definition
depends_on:
  cloudsql: 
  - name: my-pg-db
    type: postgres
```

This is all you need. But you can optionally define environment specific settings in `resources.yaml`, as below:

## resources.yaml
Below we show the available settings. All settings show their defaults, so if you want them, they can all be omitted.

```yaml
context: some-project # project in GCP terms
region: europe-west6
resources:
  cloudsql:
  - name: my-pg-db
    machine_type: db-f1-micro # GCP machine type, default is db-f1-micro
    size: 20 # GB size of db, default 10
    delete_protection: false # default false
    maintenance_window_hour: 7 # default 7, 07:00
    maintenance_window_day: 7 # default 7, sunday
    point_in_time_recovery_enabled: false # default false
    backup_enabled: true # defaults to true
    backup_start_time: "04:00" # time of backups to be started
  # vpc connector resources are optional, and define the resources of the VPC access
  # between the services and the database instances.
  vpc_access_connector:
    min_instances: 2 # default and minimum 2, must be lower than max_instances
    max_instances: 3 # default and minimum 3, max 10
    instance_type: e2-standard-4 # default is 'f1-micro', 'e2-standard-4' gives more bandwidth processing ability
```