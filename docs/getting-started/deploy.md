---
sidebar_position: 5
---

# Deploy your service

Now you can simply run: 
```
xlrte apply -e [env name]
```
This assumes you setup a `version.yaml` for your environment. 
Or:
```
xlrte apply -e [env name] -v [version of service]
```
..if you did not setup a `version.yaml`.

That's it! xlrte will now deploy your service!

### Is that.. Terraform?
The eagle-eyed might notice the output looks a lot like [Terraform](https://www.terraform.io), that is because it is.

We are not big on re-inventing wheels. Terraform is brilliant. `xlrte` has no designs on solving the same problem as Terraform, rather, we build on the shoulders of giants. The intent of xlrte is to abstract the low-level detail of IAM, network and dependency configuration between services and the resources they use.

Using Terraform also gives you an advantage: if you ever want to leave xlrte, or xlrte is not going in the direction you want, you can bail and just use the Terraform xlrte generates to continue in your own direction.
