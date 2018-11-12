import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Button from '../../components/Button';
import {Layout, Input} from 'antd';

const {Content} = Layout;

export default ({data, updateSearchTerm, searchTerm}) => (
    <>
        <Head>
            <title>Search | Nomad Store</title>
        </Head>
        <Header
            centerColumn={<h4>{searchTerm === "" ? "Search" : `Searching by ${ searchTerm }`}</h4>}
            rightColumn={<Button href="/cart" text="Cart" btnIcon={"shopping-cart"}/>}
            leftColumn={<Button href="/" text="Home" btnIcon={"home"}/>}
        />
        <Content style={{padding: "0 50px"}}>
            <Input placeholder="Search by name" onChange={ updateSearchTerm } value={ searchTerm } />
        </Content>
    </>
);
