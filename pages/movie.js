import Head from 'next/head';
import { withRouter } from 'next/router';
import Axios from 'axios';

const Movie = props => (
    <div>
        <Head>
            <title>{ props.title } | Nomad Store</title>
        </Head>
        <h1>{ props.title }</h1>
        <p>{ props.description_intro }</p>
    </div>
);

Movie.getInitialProps = async context => {
    const query = context.query;
    const id = query.id;

    const { data: { data: { movie } } } = await Axios.get( `https://yts.am/api/v2/movie_details.json?movie_id=${ id }` );

    return movie;
};

export default withRouter( Movie );
