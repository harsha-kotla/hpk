// pages/index.js

import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <Head>
        <title>Harsha Kotla</title>
        <meta name="description" content="Personal website of Harsha Kotla" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Import Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Header Section */}
      <header className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.logo}>Harsha Kotla</h1>
          <nav className={styles.nav}>
            <a href="#projects" className={styles.navLink}>
              Projects
            </a>
            <a href="#contact" className={styles.navLink}>
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className={styles.main}>
        {/* Embedded Document Section */}
        <section id="document" className={styles.section}>
          <div className={styles.container}>
            <h2>About Me</h2>
            <div className={styles.iframeContainer}>
              <iframe
                src="https://docs.google.com/document/d/1Jx6mk_LdWpwBPXUszqao1Z_wTkTK_Iy8/preview"
                width="100%"
                height="600"
                style={{ border: 'none' }}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className={styles.section}>
          <div className={styles.container}>
            <h2>Projects</h2>
            <div className={styles.projects}>
              <div className={styles.projectCard}>
                <h3>BayNest</h3>
                <p>Finding the right house for you.</p>
                <small>Coming soon</small>
              </div>
              <div className={styles.projectCard}>
                <h3>Metfyre</h3>
                <p>Share items everywhere, anywhere.</p>
                <small>Coming soon</small>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={styles.section}>
          <div className={styles.container}>
            <h2>Contact</h2>
            <p>Find me on:</p>
            <div className={styles.socialIcons}>
              <a
                href="https://github.com/harsha-kotla"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://linkedin.com/in/harsha-kotla"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={30} />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>© {new Date().getFullYear()} Harsha Kotla. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
