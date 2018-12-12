import React from 'react';
import Document, {Head, Main, NextScript} from 'next/document';

// PWA ? Manefest 를 얻을 수 있는 브라우져
// Manefest ? 브라우져에게 어플리케이션의 정보를 알려줌


// <meta name="viewport" content="width=device-width, initial-scale=1" /> 웹 사이트가 어디에 보여지고 있는
// <meta name="description" content="PWA Store" /> 검색창 타이틀 밑에 노출되는 description

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <html lang="en">
            <Head>
                <meta name="author" content="Dong-ri, Shin" />
                <link rel="manifest" href="/static/manifest.json" />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.8.1/antd.min.css" rel="stylesheet" />
                <style>{` body { background-color: #EFF2F5!important }`}</style>
                <meta name="theme-color" content="black" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="E-Commerce with PWA" />
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
            </html>
        )
    }
}
