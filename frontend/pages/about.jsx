import Image from 'next/image'
import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';


function ProfilePicture() {
    return (
        <div>
            <Image
                src="/images/profile.jpg"
                alt="Picture of the author"
                width={144}
                height={144}
            />
        </div>
    );
}

export default function AboutPage() {
    return (
        <Layout title="About">
            <Head>
                <title>About</title>
            </Head>
            <div>
                <ProfilePicture />
                <p>My name is John Doe</p>
            </div>
            <section className={utilStyles.headingMd}>
                <p>[Your Self Introduction]</p>
                <p>
                (This is a sample website - you’ll be building a site like this on{' '}
                <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                </p>
            </section>
        </Layout>
    );
}