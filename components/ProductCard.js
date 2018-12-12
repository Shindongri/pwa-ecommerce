import React from 'react';
import Link from 'next/link';
import { Col, Icon, Card } from 'antd';

const Text = ( { text } ) => <span style={ { color: 'black' } }>{ text }</span>;

export default ( { id, name, description, photoUrl } ) => (
    <Col span={ 4 } style={ { marginBottom: '25px', width: '200px' } }>
        <Link href={`/product?id=${ id }`}
              as={`/product/${ id }`}>
            <Card
                hoverable
                style={ { width: '100%' } }
                actions={ [
                    <a>
                        <Icon type="eye" theme="outlined"/>
                    </a>
                ] }
                cover={ <img alt="example" src={ photoUrl } />
                }
            >
                <Card.Meta title={ <Text text={ name } /> } description={ <Text text={ description } /> } />
            </Card>
        </Link>
    </Col>
)
