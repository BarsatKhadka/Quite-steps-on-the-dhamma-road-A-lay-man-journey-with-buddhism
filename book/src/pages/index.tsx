import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Read the book
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="A layman's reflections on the Dhamma path.">
      <HomepageHeader />
      <main>
        <div className="container" style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link
            className="button button--primary button--lg"
            to="/path/to/book.pdf" // Replace with the actual path to the book PDF
            download>
            Download the Book
          </Link>
          <a
            className="button button--secondary button--lg"
            href="mailto:your-animeconqueror108@gmail.com?subject=Feedback on Quiet Steps&body=I would like to share my thoughts on the book..."
            style={{ marginLeft: '1rem' }}>
            Send Your Opinion
          </a>
        </div>
      </main>
    </Layout>
  );
}