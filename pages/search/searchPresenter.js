import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Button from '../../components/Button';
import ProductCard from '../../components/ProductCard';
import {Layout, Input, Row} from 'antd';

const {Content} = Layout;

export default ({data, updateSearchTerm, searchTerm}) => {

    return (
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
                <Input placeholder="Search by name" onChange={updateSearchTerm} value={searchTerm}/>
                <Row gutter={16} style={{margin: '50px 0px'}}>
                    {
                        data &&
                        data.products &&
                        data.products.map(product => (
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                subtitle={product.subtitle}
                                price={product.price}
                                photoUrl={product.photo.url}
                            />
                        ))
                    }
                </Row>
            </Content>
        </>
    )
};
