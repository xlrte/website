import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Focus on Architecture, Not Infrastructure',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Tell xlrte the services you run &amp; 
        the dependencies they need (databases, message topics etc), 
        xlrte figures out the underlying infrastructure, networking &amp; IAM needed for you.
      </>
    ),
  },
  {
    title: 'Build Your Own PaaS',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        xlrte comes with batteries included, but is a use-case, service or resource-type you need not supported? No problem! 
        We provide an extensible API that makes it easy to write your own providers. Contributions are welcome!
      </>
    ),
  },
  {
    title: 'Google Cloud Enabled (AWS coming soon)',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        GCP-based infrastructure with a focus on Serverless building blocks is well-supported (CloudRun, Cloud Storage, Pub/Sub, CloudSQL, Secret Manager).<br/>
        AWS Serverless support is coming soon.
      </>
    ),
  },

];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
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
