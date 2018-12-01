import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Button from '../../components/Button';
import CartButton from '../../components/CartButton';

import ProductCard from '../../components/ProductCard';
import {Layout, Row} from 'antd';

const {Content} = Layout;

export default ({data}) => (
    <>
        <Head>
            <title>Home | Nomad Store</title>
        </Head>
        <Header
            centerColumn={<h4>Nomad Store</h4>}
            rightColumn={ <CartButton /> }
            leftColumn={<Button href="/search" text="Search" btnIcon={"search"}/>}
        />
        <Content style={{padding: "0 50px"}}>
            <div
                style={{
                    display: "grid",
                    gridGap: "10px",
                    gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
                    width: "100%"
                }}
            >
                {data && data.categories && data.categories.map(category => (
                    <Button
                        key={category.id}
                        href={`/category?name=${category.name.toLowerCase()}`}
                        hrefAs={`/category/${category.name.toLowerCase()}`}
                        text={category.name}
                    />
                ))}
            </div>
            <Row gutter={8} style={{paddingTop: "50px"}}>
                {data && data.onSale && data.onSale.length !== 0 && <h2>On Sale</h2>}
                {data && data.onSale && data.onSale.length !== 0 && data.onSale.map(
                    product => <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        description={product.description}
                        photoUrl={product.photo.url}
                    />
                )}
            </Row>
            <Row gutter={8} style={{paddingTop: "50px"}}>
                {data && data.allProducts && data.allProducts.length !== 0 && <h2>All Products</h2>}
                {data && data.allProducts && data.allProducts.length !== 0 && data.allProducts.map(
                    product => <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        description={product.description}
                        photoUrl={product.photo.url}
                    />
                )}
            </Row>
        </Content>
    </>
);
