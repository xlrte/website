---
sidebar_position: 4
---

# Pub/Sub

..reference coming soon.

## service.yaml
Pub/Sub topics are added to the`depends_on` section of a service like this:

```yaml
depends_on:
## omitted part of service definition
  pubsub:
    consume: # topics that are consumed
    - name: the_topic # multiple possible
      owner: true # optional, see below
    produce: # topics that are produced to
    - name: the_topic # multiple possible
```
### The `owner` attribute
The owner attribute is `false` by default for consumed topics and `true` for produce topics.
By default, we assume a producer always owns a topic. The cases we might want to set a consumer to own a topic is when the producer is external to `xlrte` managed resources (such as a third-party).
In this case, in order to still have `xlrte` create the topic correctly, the consumer would have to define this attribute as true, or the topic will not be created.

## resources.yaml
The following settings are available to pub-sub topics (all defaults shown, do not need to be defined if they are good enough):

```yaml
context: some-project # project in GCP terms
region: europe-west6
resources:
  pubsub:
  - name: the_topic
    ack_deadline_seconds: 20 # time to ack message
    message_retention_duration: 604800s # time messages are retained unacked
    enable_message_ordering: false # order guarantee for messages?
    retain_acked_messages: false # retain processed messages?
```