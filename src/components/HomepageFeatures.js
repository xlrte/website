import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'What xlrte is, in user story form ➡️ ',
    // Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
As a developer,

I want to be able to say <i>"I want to deploy a service that uses a database, a block storage bucket & publishes messages to a topic while listening to another"</i>,<br/>
without having to figure out IAM permissions, network setup, secrets management, initialization order of resources and the dozens of other infrastructure configuration issues that arise.<br/>
<br/>
xlrte fixes this. To find out more, <a href="/docs/intro" rel="nofollow">Read the documentation</a> or checkout our <a href="https://github.com/xlrte/example-app-gcp">example project</a>.


      </>
    ),
  },
  // {
  //   title: 'Build Your Own PaaS',
  //   Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
  //   description: (
  //     <>
  //       xlrte comes with batteries included, but is a use-case, service or resource-type you need not supported? No problem! 
  //       We provide an extensible API that makes it easy to write your own providers. Contributions are welcome!
  //     </>
  //   ),
  // },
  // {
  //   title: 'Google Cloud Enabled (AWS coming soon)',
  //   Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
  //   description: (
  //     <>
  //       GCP-based infrastructure with a focus on Serverless building blocks is well-supported (CloudRun, Cloud Storage, Pub/Sub, CloudSQL, Secret Manager).<br/>
  //       AWS Serverless support is coming soon.
  //     </>
  //   ),
  // },

];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--12')}>
      {/* <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div> */}
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
