import React from 'react';
import Link from 'next/link';
import {Col, Icon, Card} from 'antd';

const {Meta} = Card;

export default ({id, name, description, photoUrl}) => (
    <Col span={4} style={{marginBottom: "25px"}}>
        <Card
            hoverable
            actions={[
                <Link href={`/product?id=${ id }`}
                      as={`/product/${ id }`}>
                    <a>
                        <Icon type="eye"
                              theme="outlined"/>
                    </a>
                </Link>
            ]}
            cover={
                <img
                    alt="example"
                    src={photoUrl}
                    style={{ height: '200px'}}
                />
            }
        >
            <Meta title={name} description={description}/>
        </Card>
    </Col>
)
