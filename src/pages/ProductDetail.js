import React from 'react'
import MyHeader from '../components/MyHeader'
import { Row, Col, Divider } from 'antd';
import 'antd/dist/antd.css';
import './ProductDetail.scss'
import ProductDetailForm from '../components/ProductDetailForm';
import ProductImageGallery from '../components/ProductImageGallery';

const ProductDetail = () => {
    return (
        <div>
            <div className="add-product-detail-page">
                <MyHeader />
                <Row>
                    <Col span={1}>
                    </Col>
                    <Col span={10}>
                        <ProductImageGallery />
                    </Col>
                    <Col span={2}>
                        <Divider type="vertical" style={{ height: "100%", borderLeft: "1px solid #a6a6a6" }} />
                    </Col>
                    <Col span={10}>
                        <ProductDetailForm />
                    </Col>
                    <Col span={1}>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default ProductDetail