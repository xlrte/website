---
sidebar_position: 7
---

# Add a Pub/Sub topic

We assume you already added the `depends_on` block to your service yaml in the previous page (if not, go back at least to see where it fits).

To add Pub/Sub topics, you could add this to the `depends_on` block of your service yaml:
```
  pubsub:
    consume:
    - name: some_topic
      owner: true
    produce:
    - name: other_topic
```
On the next apply, this would do the following:
* Create `some_topic`, a subscription to said topic and bind an IAM permission to your service that allows it to receive push messages from the subscription (Cloud Run only supports Pub/Sub push for now in GCP). Messages are `POST`ed to `/` of your service.
* Create `other_topic`, and bind an IAM permission that allows your service to publish to the topic.

### what does `owner` do?
The owner property is specific to topics we consume from and optional. We assume that a publisher to a topic always "owns" the topic. This is the semantics we want in most cases, so if you define two services that depend on the same topic, one that produces and one that consumes, you need not worry about this property. Everything will "just work".

 But there may be a small number of cases where either the real owner is external to xlrte, or we want a consumer to own the topic. In this case we define it explicitly in xlrte.

The reason for making topics optionally owned by consumers is so that we can control creation and destruction of topics. If a consumer does not own a topic, we only create a subscription, not the topic itself.
