import React from 'react';
import Link from 'next/link';
import { Col, Icon, Card } from 'antd';

export default ( { id, name, description, photoUrl } ) => (
    <Col span={ 4 } style={ { marginBottom: '25px', width: '200px' } }>
        <Link href={`/product?id=${ id }`}
              as={`/product/${ id }`}>
            <Card
                hoverable
                style={ { width: '100%' } }
                actions={ [
                    <a>
                        <Icon type="eye"
                              theme="outlined"/>
                    </a>
                ] }
                cover={
                    <img
                        alt="example"
                        src={ photoUrl }
                        style={ { height: '200px' } }
                    />
                }
            >
                <Card.Meta title={ name } description={ description } />
            </Card>
        </Link>
    </Col>
)
