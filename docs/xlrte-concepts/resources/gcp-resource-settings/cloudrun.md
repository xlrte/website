---
sidebar_position: 2
---

# Runtime: Cloud Run

Cloud Run is purely a `runtime` for your services.

As per _xlrte_ convention, the main definition goes into `.xlrte/config/services[filename].yaml`, where you can give your services any file-name as long as it ends with `.yaml` or `.yml`.

Extra resources are defined in the environment specific `resources.yaml` file, which lives in `.xlrte/config/environments/[env name]`.

## service.yaml 
As mentioned above, can be named whatever you want.
Explanations of settings inline.
```yaml
name: cloudrun-srv2 # name, must be unique
runtime: cloudrun
spec:
  base_name: hello-app # basename of the Google Container Registry artifact
  http:
    public: true # publicly exposed http endpoint?
    http2: false # use http2, for instance for protobuf?
depends_on: # resource dependencies go here
  cloudstorage: #example of a GCS bucket dependency
  - name: foo-bucket
    access: readwrite
  cloudrun: # you can also connect cloudrun services with other services
  - name: other-service # name of other service
    env: OTHER_URL #env variable to inject URL into
env: # environment vars
  vars: # regular variables, can be overriden in resources
    foo: bar # env var name & value
  secrets: # secrets
    very_secret: very-secret #env var name + secret name (by reference)
```

### resources.yaml
By default, you don't have to add _anything_ into the env specific `resources.yaml` as sensible defaults are provided, but you can set the following settings (complete `resources.yaml` shown):

```yaml
context: some-project # project in GCP terms
region: europe-west6
resources:
  cloudrun: # provide a list of services, referenced by name to set resources for each service
  - name: cloudrun-srv # name of service we are defining resources for
    domain: # you can attach a GCP managed domain, with an SSL cert & Load balancer by adding this.
      name: cde.app 
      dns_zone: cdeapp # GCP project dns_zone for the domain
    memory: 512Mi # memory settings for Cloud Run
    cpu: 1 # CPU settings for Cloud Run
    timeout: 300 # request time out
    max_requests: 80 # max requests per container
    scaling: #scaling settings for Cloud Run
      min_instances: 0
      max_instances: 100

```