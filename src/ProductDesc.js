import React from 'react';
import {
    Container, Row, Col
} from 'reactstrap';
import caret from './images/caret.png';

export const ProductDesc = ({ category, name, description, rating, features, shade }) =>
    <section className='section_description'>
        <h4 className='heading_category'>{category}</h4>
        <h2 className='heading_name'>{name}</h2>
        <p className='p_description'>{description}</p>
        <figure className='figure_rating'>
            <img className='img_current-rating' src={rating} alt='Product Rating' />
            <img className='icon_view-all-ratings' src={caret} alt='View All Ratings' />
        </figure>
        <section className='section_features'>
            <Container fluid={true}>
                <Row>
                    <Col className='p-0' md={6} sm={12}>
                        <h4 className='heading_feature'>Benefits</h4>
                        <p className='p_feature'>{features.benefits}</p>
                    </Col>
                    <Col className='p-0' md={6} sm={12}>
                        <h4 className='heading_feature'>Finish</h4>
                        <p className='p_feature'>{features.finish}</p>
                    </Col>
                    <Col className='p-0' md={6} sm={12}>
                        <h4 className='heading_feature'>Coverage</h4>
                        <p className='p_feature'>{features.coverage}</p>
                    </Col>
                    <Col className='p-0' md={6} sm={12}>
                        <h4 className='heading_feature'>Key Ingredients</h4>
                        <p className='p_feature'>{features.keyIngredients}
                            <a className='link_feature-more-ingredients ml-2' href='http://www.clinique.com' title='See More Key Ingredients'>More</a></p>
                    </Col>
                </Row>
            </Container>
        </section>
        <section className='section_shade d-flex justify-content-between align-items-center mt-4'>
            <span className='span_shade-name'>{shade.name}</span>
            <div className='icon_shade-color' style={{ background: shade.color }}></div>
        </section>
    </section>
