---
slug: announcing-xlrte-0-1
title: Announcing xlrte v0.1
authors: [wfaler]
tags: [xlrte, introduction]
---

We are happy to announce the first release of `xlrte` (_"accelerate"_), a tool designed to take the heavy lifting out of deploying modern micro service architectures and reduce the effort required to setup dependent infrastructure.

It is born out of the realisation that we as developers do not want to spend time configuring networks, secrets management, Identity & Access Management. We simply want to be able to say _"I need a database/message topic/storage bucket/etc"_.

This is precisely the problem `xlrte` solves: you define your services, and tell the tool what dependent resources (like a database) they need, and `xlrte` figures out the rest, like setting up secrets, secure networks, identity & permission management etc.
You can naturally step in and fine-tune resources, especially scaling parameters, but out of the box, it comes with sensible defaults and enough resources for testing- and development environments.

At the outset, we support `Google Cloud Platform` and the following services:

* `Cloud Run` as a service runtime (Cloud Functions coming soon)
* `Cloud SQL` as a database
* `Pub/Sub` as messaging middleware 
* `Cloud Storage` for block storage

We will extend the coverage of both GCP services, as well as work towards supporting _AWS Serverless services_ as well as likely Kubernetes based service runtimes in the future. The core CLI has an extensible API, which means anyone can create their own resource & cloud provider implementations (API does not come with any stability promises before a `1.0` release though).

To learn more, please refer to [our documentation](http://localhost:3000/docs/intro)!
For further help, please feel free to ask questions on [Discord](https://discord.com/invite/PakzubspHR) or [GitHub](https://github.com/xlrte/core).
