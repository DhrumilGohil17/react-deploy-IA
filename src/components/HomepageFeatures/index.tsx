import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  link: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Documentation',
    Svg: require('@site/static/img/SDK-Guide-Icon.svg').default,
    link: "docs/8.1/intro",
    description: (
      <>
        Your home for everything Ignition. Learn the basics or dive deeper into our comprehensive <a href="docs/8.1/intro">Ignition User Manual</a>.
      </>
    ),
  }, 
  {
    title: 'Inductive University',
    Svg: require('@site/static/img/Logo-IU-IconOnly.svg').default,
    link: "https://inductiveuniversity.com/",
    description: (
      <>
        Take our <a href="https://inductiveuniversity.com/">Inductive University courses</a> to earn your IU Credential or expand your knowledge through Elective Studies.
      </>
    ),
  },
  {
    title: 'SDK Guide',
    Svg: require('@site/static/img/Java-API-Docs-Icon.svg').default,
    link: "https://www.sdk-docs.inductiveautomation.com/",
    description: (
      <>
        Learn how to use the <a href="https://www.sdk-docs.inductiveautomation.com/">Ignition Software Development Kit</a> to build your own modules.
      </>
    ),
  },
  {
    title: 'Ignition Forums',
    Svg: require('@site/static/img/Ignition-Module-Development-Community-Icon.svg').default,
    link: "https://forum.inductiveautomation.com/",
    description: (
      <>
        Visit our <a href="https://forum.inductiveautomation.com/">Ignition User Forums</a> to connect with members of the Ignition Community.
      </>
    ),
  },
  {
    title: 'Support',
    Svg: require('@site/static/img/Module-Development-Forum-Icon.svg').default,
    link: "https://support.inductiveautomation.com/",
    description: (
      <>
        Need product support? Our <a href="https://support.inductiveautomation.com/">Inductive Automation Help Center</a> is here for you.
      </>
    ),
  },
  {
    title: 'Public Demo',
    Svg: require('@site/static/img/Logo-Ignition-Check.svg').default,
    link: "https://onlinedemo.inductiveautomation.com/data/perspective/client/OnlineDemo",
    description: (
      <>
        Launch the <a href="https://onlinedemo.inductiveautomation.com/data/perspective/client/OnlineDemo">Ignition Public Demo</a> to see an example Ignition project in action.
      </>
    ),
  },
];

function Feature({title, Svg, link, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        
        <a href={link}>
        <Svg className={styles.featureSvg} role="img" />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
