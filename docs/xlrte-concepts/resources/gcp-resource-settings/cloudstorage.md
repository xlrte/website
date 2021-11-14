---
sidebar_position: 5
---

# Cloud Storage

Cloud Storage provides block storage for files and other data to your services.

## service.yaml
Cloud Storage buckets are added to the`depends_on` section of a service like this:

```yaml
depends_on:
## omitted part of service definition
  cloudstorage:
  - name: baz # name of the bucket
    public: true # publicly accessible from the internet?
    owner: true # optional, implicitly true for 'readwrite' buckets, false for 'read'
    access: readwrite # 'read' or 'readwrite'
```
### The `owner` attribute
`owner` is implicitly `true` for `readwrite` buckets and implicitly `false` for `read` access buckets.
Only owned buckets are created by _xlrte_, so if there is not a service with `readwrite` privileges to a bucket, you may want to designate a `read` privileged service as the owner, in order to ensure the bucket is created.

## resources.yaml
The following settings are available to cloud storage buckets (all defaults shown, do not need to be defined if they are good enough):

```yaml
context: some-project # project in GCP terms
region: europe-west6
resources:
  cloudstorage:
  - name: baz
    location: US # bucket location, US or EU
    storage_class: STANDARD # GCS storage class?
    versioning_enabled: false # versioning of stored files enabled?
```