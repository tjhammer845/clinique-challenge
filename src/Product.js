import React from 'react';
import { ProductDesc } from './ProductDesc';
import { ProductImage } from './ProductImage';
import { ProductPurchase } from './ProductPurchase';

import './styles/product.scss';
import {
    Container, Row, Col
} from 'reactstrap';

export const Product = ({ productData: { imgURL, category, name, description, ratingURL, features, shade, price } }) =>
    <main>
        <Container className='container_page_clinique' fluid={false}>
            <Row>
                <Col className='d-flex align-items-baseline' md={6} sm={12}>
                    <ProductImage image={imgURL} />
                </Col>
                <Col className='p-unset' md={6} sm={12}>
                    <ProductDesc
                        category={category}
                        name={name}
                        description={description}
                        rating={ratingURL}
                        features={features}
                        shade={shade} />
                    <hr />
                    <ProductPurchase price={price} />
                </Col>
            </Row>
        </Container>
    </main>
