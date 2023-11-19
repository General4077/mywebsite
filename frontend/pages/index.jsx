import { useState } from 'react';
import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout';



export default function HomePage() {
    const names = ['John', 'Jane', 'Joe'];

    const [likes, setLikes] = useState(0);

    function handleClick() {
        setLikes(likes + 1);
    }

    return (
        <>
            <Layout title={ siteTitle} home>
            <Head>
                    <title>{siteTitle}</title>
            </Head>
            <div>
                <ul>
                    {
                        names.map(
                            name => (
                                <li key={name}>{name}</li>
                            )
                        )
                    }
                </ul>
                <button onClick={handleClick}>Like ({likes})</button>
                
                </div>
                </Layout>
            </> 
    );
}