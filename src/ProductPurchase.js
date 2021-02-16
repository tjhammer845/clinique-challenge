import React from 'react';

import caret from './images/caret.png';
import minus from './images/minus.png';
import plus from './images/plus.png';

import {
    Container, Row, Col, Button
} from 'reactstrap';

export const ProductPurchase = ({ price }) =>
    <section className='section_purchase'>
        <Container fluid={true}>
            <Row>
                <Col className='col_purchase-quantity d-flex align-items-center p-0' xs={6}>
                    Quantity
                    <img className='icon_decrease-quantity ml-2 mr-2' src={minus} alt='Decrease Quantity' />
                    <span>1</span>
                    <img className='icon_increase-quantity ml-2 mr-2' src={plus} alt='Increase Quantity' />
                </Col>
                <Col className='col_purchase-one-time p-0' xs={6}>
                    One Time Purchase
                    <img className='icon_select-frequency' src={caret} alt='Select Frequency' />
                </Col>
            </Row>
            <Row className='pt-4 pt-md-5'>
                <Col className='col_purchase-price d-flex align-items-center p-0' md={6} sm={12}>
                    <span className='span_purchase-price mb-4 mb-md-0'>
                        {price}
                    </span>
                </Col>
                <Col className='col_purchase-button p-0' md={6} sm={12}>
                    <Button className='btn btn_add-to-bag w-100 rounded-0 mb-4 mb-md-0' name='AddToBag' title='Add to Bag'>Add To Bag</Button>
                </Col>
            </Row>
        </Container>
    </section >