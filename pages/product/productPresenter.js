import React from 'react';
import Head from 'next/head';
import { Button as AntButton } from 'antd';
import numeral from 'numeral';

import Button from '../../components/Button';
import CartButton from '../../components/CartButton';
import Header from '../../components/Header';

export default ( { data, toggleCart } ) => (
    <div>
        <Head>
            <title>{ data.product.name } | E-Store</title>
        </Head>
        <Header
            centerColumn={ <h4>Product Detail</h4> }
            rightColumn={ <CartButton /> }
            leftColumn={ <Button href="/" text="Home"/> }
        />
        <div className={"product"}>
            <img src={ data.product.photo.url } />
            <div>
                <h2>{ data.product.name }</h2>
                <h3>{ data.product.subtitle }</h3>
                <h4>{ data.product.description }</h4>
                <AntButton type="primary" onClick={ toggleCart }>
                    {
                        data.product.onCart ?
                            "Remove from cart"
                            : `Add to cart (￦${ numeral( data.product.price ).format( '0,0' ) })`
                    }
                </AntButton>
            </div>
            <style jsx>{`
            .product {
                display: grid;
                margin: 50px 0px;
                padding: 0px 50px;
                grid-template-columns: repeat(2, 1fr);
                grid-gap: 50px;
            }
            .product img {
                max-width: 100%;
            }
            `}</style>
        </div>
    </div>
);
