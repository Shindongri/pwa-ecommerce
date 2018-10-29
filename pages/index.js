import Head from 'next/head';
import Link from 'next/link';
import withLayout from "../lib/withLayout";
import PostLink from '../components/PostLink';

const index = () => (
    <div>
        <Head>
            <title>Home | Nomad Store</title>
        </Head>
        <h1>Posts:</h1>
        <ul>
            <li>
                <PostLink title={ "something" } />
            </li>
            <li>
                <PostLink title={ "something else" } />
            </li>
        </ul>
    </div>
);

export default withLayout( index );
