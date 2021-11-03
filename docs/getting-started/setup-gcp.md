---
sidebar_position: 1
---

# Setup GCP

## Pre-requities

We expect you to have the following:
* A [Google Cloud Provider](https://cloud.google.com) account (**AWS support coming soon**).
* The `gcloud` CLI Tools installed (install [instructions here](https://cloud.google.com/sdk/docs/install)).
* Admin access to create and configure GCP projects or a GCP project pre-configured for you.

### GCP preparation
Ensure you are logged into the appropriate gcloud account by running 
```
gcloud auth application-default login
```

#### Option 1: Let xlrte configure new GCP projects for you (recommended)
You can find the [Billing Account ID under Billing Accounts](https://console.cloud.google.com/billing) in GCP.


```bash title="add to your .zshrc, .bashrc or .profile as appropriate:"
export GCP_BILLING_ACCOUNT_ID=[your billing account id]
```

#### Option 2: Use a pre-existing GCP project
If you do not have sufficient privileges, or you want to use an existing project, you will need the following services enabled in the GCP project:

```
* servicenetworking.googleapis.com
* vpcaccess.googleapis.com
* containerregistry.googleapis.com
* dns.googleapis.com
* pubsub.googleapis.com
* run.googleapis.com
* secretmanager.googleapis.com
* sql-component.googleapis.com
* storage.googleapis.com
```
