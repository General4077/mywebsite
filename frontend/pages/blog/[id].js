import Layout from '../../components/layout';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import { getPostData, getPostIds } from '../../lib/posts';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { set } from 'date-fns';
import getConfig from 'next/config';


export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}





export async function getStaticPaths() {
    // const data = await getPostIds();
    // const paths = data.map((post) => {
    //     return {
    //     params: {
    //         id: post.id.toString(),
    //     },
    //     };
        
    // });
    const paths = []
    return { paths, fallback: "blocking" }
}


export default function Post({postData}) {
    // const [postData, setPostData] = useState({});
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const posts = await getPostData();
    //         setPostData(posts);
    //     }
    //     fetchData();
    //     return () => {
    //     };
    // }, {});
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.created_at} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.content }} />
            </article>
        </Layout>
  )
}
