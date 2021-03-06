---
sidebar_position: 5
---
# Setup your first service
If you want some more context, you can look at our [example project](https://github.com/xlrte/example-app-gcp), which roughly mirrors this example.
## Your first service
To add your first service, simply create a file such as `.xlrte/config/services/my-shiny-new-services.yaml`. This will be the baseline for this service in _any_ environment. The important thing is you place these files in `.xlrte/config/services`, and that they have a `.yaml` or `.yml` file-ending.

A minimal content for your service-yaml would be:

```yaml
name: my-shiny-service # the name of your service
runtime: cloudrun # runtime, at the moment, only cloudrun supported
spec:
  base_name: hello-app 
  http:
    public: true #should this service be publicly accessible?
    http2: false #should we use http2, for instance for gRPC?
```
The comments in the example explain most of the fields. We should perhaps explain `base_name` a little more closely:
#### A little bit about service version and artifact resolution
We assume the following things:

* Your service Docker image is pushed to the `Google Container Registry` of the same project that hosts your xlrte environment.
* The versions of your service are either defined in `.xlrte/config/environments/[env]/versions.yaml` as simple `[servicename]: [version]` key-pairs OR
  * you use the `-v` flag at runtime to define the version, but this will set the same version for ALL services, should you have more than one.

Based on these assumptions, xlrte will put together the correct artifact to deploy.