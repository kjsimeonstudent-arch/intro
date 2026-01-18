import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

//*description below section "ClassNName"*//
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Hello I am Ken-zhin Simeon]</p>

        <p><b>1.When you think about a "perfect" website,
          are you more drawn to how it (UI/UX, animations, layouts) or how it
          (databases, user authentication, logic)? Explain why.</b></p>

        <p>Im more drawn in UI/UX because it's the first thing a user sees and interacts with,
          making it crucial for the user experience and how the user interacts with the site.
          UI/UX is the first impression of the user and experience which also become the landmark
          of the website</p>

        <p><b>2.Are there specific technologies or frameworks you are eager to learn
          (e.g., React, Tailwind CSS, Node.js, Next.js)?</b></p>

        <p>I eager to learn the React and Next.js because they are modern tool to build
          a website than the traditional way. They provide a more efficient and effective way to build
          applications with better performance and scalability.
        </p>

        <p><b>3.What is one specific feature you’ve seen on a modern website that
          you’ve always wondered how to build?</b></p>

          <p>The Feature that I seen is the availability of the components than creating a 
          website from scratch. I always wondered how to build a component library
          has impact of developing a website faster and efficient because you can reuse the components
          and small changes to apply by the developer preference.
          </p>

        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}