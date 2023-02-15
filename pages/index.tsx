import type { NextPage } from 'next';
import fs from "fs";
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Nav from '@components/Nav';
import Layout from '@components/layout';
// import useSwr from 'swr';

// const fetcher = (url: string) => fetch(url).then((res) => res.json())

const Home: NextPage = (params: any) => {
  // const { data, error, isLoading } = useSwr<User[]>('/api/users', fetcher);

  // if (error) return <div>Failed to load users</div>;
  // if (isLoading) return <div>Loading...</div>;
  // if (!data) return null;

  return (
    <Layout>
      
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <Nav />
        
        {/* <ul>
          {data.map((user) => (
            <li key={user.id}>
              <Link href="/user/[id]" as={`/user/${user.id}`}>
                {user.name ?? `User ${user.id}`}
              </Link>
            </li>
          ))}
        </ul> */}
        
        {params?.slugs?.map((slug: any) => {
          return (
            <div key={slug} className={styles.grid}>
              <Link href={"/blog/" + slug} className={styles.card}>
                <a>{"/blog/" + slug}</a>
              </Link>
            </div>
          );
        })}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync('posts');
  return {
    props: {
      slugs: files.map(filename => filename.replace('.md', ''))
    }
  };
};

export default Home
