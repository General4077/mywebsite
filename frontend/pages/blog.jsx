import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Layout from "../components/layout";
import { getSortedPostsData } from '../lib/posts';
import utilStyles from '../styles/utils.module.css';
import getConfig from 'next/config';
import { useState, useEffect } from 'react';

// export async function getStaticProps() {
//   const allPostsData = await getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }

export default function BlogPage() { //{ allPostsData }
    const [allPostsData, setAllPostsData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            setAllPostsData(await getSortedPostsData());
        }
        fetchData();
    }, []
    )
    return (
        <Layout  title="Blog">
            <Head>
                <title>Blog</title>
            </Head>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                {
                    (allPostsData.length === 0) ?
                        <p>No posts found.</p> :
                        (
                            <ul className={utilStyles.list}>
                                {allPostsData.map(
                                    ({ id, created_at, title }) => (
                                        <li className={utilStyles.listItem} key={id}>
                                            <Link href={`/blog/${id}`}>{title}</Link>
                                            <br />
                                            <small className={utilStyles.lightText}>
                                                <Date dateString={created_at} />
                                            </small>
                                        </li >
                                    )
                                )}
                            </ul>
                        )
                }
                
            </section>
        </Layout>
    );
}