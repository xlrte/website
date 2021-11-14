---
sidebar_position: 3
---

# Initialize your first environment
**You should skip this if you have an existing GCP project you want to use**

You will need to decide the following things:

* A name for your environment (for example `dev`, `staging` or `prod`)
* The name of the new GCP project the environment will run in.
* The GCP region you want to run it in (for instance `europe-west6` for `zurich`, Switzerland)


Now you can initialize your first deployment environment by simply running:

```bash
xlrte init -e [environment name] -p gcp -c [gcp project name] -r [gcp region]
```

The `-p` argument is required even though only GCP is supported. This is to select the cloud provider used, as we add support for more.

### Secrets: What are these questions I get asked?
The first time, we will also initialize the xlrte secrets sub-system for your user, creating a PGP keypair for you. You will be asked a few questions, please note your passphrase, as if you lose it, it is not recoverable.

The private key created lives outside your project in `$HOME/.xlrte` and is used to decrypt secrets in your git repository, which always PGP encrypted at rest (with RSA with 4096-bit length keys).

And no, don't worry, we did not invent our own cryptography. We used a [tried and tested library](https://github.com/ProtonMail/gopenpgp) and simple patterns of use.

### What if I want more environments?
Just repeat the instructions on this page as many times as you want environments.

You can have more than one environment in the same GCP project, resources are always namespaced, even within a project, so it's ok to have more than one environment in a GCP project. 