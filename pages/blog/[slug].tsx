import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import { marked } from "marked";
import type { NextPage } from 'next'
import styles from '../../styles/Home.module.css'

const Post: NextPage = (params: any) => {
    // console.log('page', params);
    return (
        <>
        <div className={styles.container}>
          <Head>
            <title>{params.data.title}</title>
            <meta title="description" content={params.data.description} />
          </Head>
          <div dangerouslySetInnerHTML={{ __html: params.htmlString }} />
          </div>
        </>
    );
}

export const getStaticPaths = async () => {
    const files = fs.readdirSync('posts');
    // console.log('files', files);
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }));
    // console.log('paths: ', paths);
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context: any) => {
    const { params } = context;
    // console.log('context.params', context.params);
    const markdownWithMetadata = fs
        .readFileSync(path.join('posts', context.params.slug + '.md'))
        .toString();

    const parsedMarkdown = matter(markdownWithMetadata);

    const htmlString = marked(parsedMarkdown.content);
    return {
        props: {
            htmlString,
            slug: params.slug,
            data: parsedMarkdown.data
        }
    }
}

export default Post
