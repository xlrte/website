---
sidebar_position: 8
---

# Add a Cloud Storage bucket
We still assume you have followed the previous pages.

To add a cloud storage bucket, you can add this to the `depends_on` block of your service yaml:

```yaml
  cloudstorage:
  - name: baz
    public: true
    access: readwrite
```

The properties are worth noting:

* `public`: whether the bucket is publicly read-accessible on the internet. Can be omitted and will default to `false` if omitted.
* `access`: `readwrite` or `readonly`. `readonly` doesn't really make sense if `public: true`.

Again, when you `apply`, the correct IAM permissions will be added to your service.
