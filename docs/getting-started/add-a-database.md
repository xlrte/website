---
sidebar_position: 7
---

# Add a database

Remember how your service looks something like this?

```yaml
name: my-shiny-service # the name of your service
runtime: cloudrun # runtime, at the moment, only cloudrun supported
spec:
  base_name: hello-app 
  http:
    public: true #should this service be publicly accessible?
    http2: false #should we use http2, for instance for gRPC?
```

To add a database, simply add the following lines to the file:

```yaml
depends_on:
  cloudsql: 
  - name: [desired database name]
    type: postgres
```

Next time you run `xlrte apply -e [env]`, xlrte will do the following:

* Create a random username & password as encrypted secrets, stored encrypted in your repository.
* Deploy the secrets in GCP Secret Manager
* Create a private network for the database to live in.
* Create a serverless VPC connector, for your Cloud Run service to have access to the database.
* Create the actual database instance and postgres database, with the set username and password.
* Connect the GCP Secrets to your Cloud Run instance, together with the IP & database name, through the environment variables:
  * `DB_[db name]_USER`, `DB_[db name]_PASSWORD`, `DB_[db name]_HOST`.
  * Database name to connect to will be your `[db name]-[env]`, where the environment is accessible from the `XLRTE_ENV` environment variable.

That is a whole lot of infrastructure configuration that xlrte does for you by convention!

#### Note: Adding CloudSQL instances take a long time
Please note that CloudSQL instance creation is far from instant. It can take up to 20 minutes in some cases. Please have patience when you add one.