import Head from 'next/head';
import { withRouter } from 'next/router';

const Movie = props => (
    <div>
        <Head>
            <title>{ props.router.query.movie } | Nomad Store</title>
        </Head>
        <h1>{ props.title  }</h1>
    </div>
);

Movie.getInitialProps = async () => {
  return { title: "lalalalalalalalalalalalalala" };
};

export default withRouter( Movie );
