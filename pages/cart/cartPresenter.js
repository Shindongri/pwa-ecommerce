import React from 'react';
import Head from 'next/head';
import { Button as AntButton } from 'antd';
import numeral from 'numeral';

import Header from '../../components/Header';
import Button from '../../components/Button';
import ProductCard from '../../components/ProductCard';

const reduceFn = ( price, product ) => price + product.price;

const cartPresenter = ( { data, onPay } ) => (
    <>
        <Head>
            <title>Cart | Store</title>
        </Head>
        <Header
            centerColumn={<h4>Cart</h4>}
            rightColumn={<Button href="/" text="Home" />}
            leftColumn={<Button href="/search" text="Search" />}
        />
        <div style={ {
            marginBottom: "50px",
            display: "grid",
            gridGap: "10px",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            width: "100%",
            padding: "0 50px"
        } }>
            {
                data && data.cart && data.cart.map( product => (
                    <ProductCard
                        key={ product.id }
                        id={ product.id }
                        name={ product.name }
                        subtitle={ product.subtitle }
                        description={ product.description }
                        price={ product.price }
                        photoUrl={ product.photo.url }
                    />
                ) )
            }
        </div>
        <div style={ { padding: "0px 50px" } }>
            <h3>Total Price: ￦{ data && data.cart && numeral( data.cart.reduce( reduceFn, 0 ) ).format( '0,0' ) } </h3>
            <AntButton type="primary" onClick={ onPay }>Check Out</AntButton>
        </div>
    </>
);

export default cartPresenter;
