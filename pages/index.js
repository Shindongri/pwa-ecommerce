import React from 'react';
import Head from 'next/head';
import PostLink from '../components/PostLink';

export default class extends React.Component {
    render() {
       return (
           <div>
               <Head>
                   <title>Home | Nomad Store</title>
               </Head>
               <h1>Movie</h1>
               <ul>
                   <li>
                       <PostLink title={ "something" } id={ 0 } />
                   </li>
                   <li>
                       <PostLink title={ "something else" } id={ 1 } />
                   </li>
               </ul>
           </div>
       )
    }
}
