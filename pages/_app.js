import { Layout } from 'antd';
import App, { Container } from 'next/app';
import React from 'react';
import withNProgress from 'next-nprogress';
import { Icon } from 'antd';
import { createGlobalStyle } from 'styled-components';

import withApollo from '../lib/withApollo';
import { ApolloProvider } from 'react-apollo';

const { Footer } = Layout;

const GlobalStyle = createGlobalStyle`
    body {
        max-width: 720px;
        margin: 0 auto;
        padding: 22px 16px;
        background: #f0f0f0;
    }
`;

class MyApp extends App {
    static async getInitialProps( { Component, router, ctx } ) {
        let pageProps = {};

        if ( Component.getInitialProps ) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    componentDidMount() {
        if ( "serviceWorker" in navigator ) {
            navigator.serviceWorker.register( "/sw.js" )
                .then( result => console.log( "SW Registered:", result ))
                .catch( error => console.log( "SW Error :", error ) );
        }
    }

    render() {
        const { Component, pageProps, apollo } = this.props;

        return (
            <ApolloProvider client={ apollo }>
                <Container>
                    <Component { ...pageProps }/>
                    <Footer>
                        <div style={ { textAlign: 'center' } }>
                            Copyright <Icon type="copyright" /> 2018 Dong-ri, Shin
                        </div>
                    </Footer>
                    <GlobalStyle />
                </Container>
            </ApolloProvider>
        );
    }
}

export default withNProgress()( withApollo( MyApp ) );
