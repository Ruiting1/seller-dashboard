import React from 'react'
import { Form, Input, Button, Radio, Checkbox, Row, Col, Space, Tag } from 'antd'
import './ProductDetailForm.scss'

const ProductDetailForm = () => {
    return (
        <div>
            <div className="product-detail-form-container">
                <Form
                    layout="vertical"
                    size="large"
                >

                    <Form.Item label="Product Name" required>
                        <Input placeholder="Please enter the name"
                            value="ADLV Baby Face Short Sleeve T-Shirt Black Donuts" />
                    </Form.Item>
                    <Form.Item label="Category" required>
                        <Radio.Group defaultValue="tshirts" buttonStyle="solid">
                            <Space>
                                <Radio.Button value="collectibles">Collectibles</Radio.Button>
                                <Radio.Button value="accessories">Accessories</Radio.Button>
                                <Radio.Button value="tshirts">T-Shirts</Radio.Button>
                            </Space>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="Brand (up to 2)" required>
                        <Input placeholder="Add a keyword and press Enter" />
                        <Tag closable>
                            Popmart
                        </Tag>
                        <Tag closable>
                            Kaws
                        </Tag>
                    </Form.Item>
                    <Form.Item label="Description" required>
                        <Input.TextArea
                            showCount
                            maxLength={200}
                            rows={4}
                            value="Regular fit. 100% cotton" />
                    </Form.Item>
                    <Form.Item label="Condition">
                        <Radio.Group defaultValue="new" buttonStyle="solid">
                            <Space>
                                <Radio.Button value="bad">Bad</Radio.Button>
                                <Radio.Button value="fair">Fair</Radio.Button>
                                <Radio.Button value="good">Good</Radio.Button>
                                <Radio.Button value="new">New</Radio.Button>
                            </Space>
                        </Radio.Group>
                    </Form.Item>
                    <Row>
                        <Col span={11}>
                            <Form.Item label="Season">
                                <Input placeholder="SS20" />
                            </Form.Item>
                            <Form.Item label="Dimensions">
                                <Input placeholder="IN" />
                            </Form.Item>
                        </Col>
                        <Col span={2}></Col>
                        <Col span={11}>
                            <Form.Item label="Release Date">
                                <Input placeholder="SS20" />
                            </Form.Item>
                            <Form.Item label="Retail">
                                <Input placeholder="$88" />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item label="Authenticity">
                        <Input placeholder="100%" />
                    </Form.Item>
                    <Form.Item label="Declaration">
                        <Checkbox>
                            I hereby declare that the infomation given in this application is true and correct to the best of my knowledge and belief. In case any information given in this application proves to be false or incorrect, I shall be responsible for the consequences.
                        </Checkbox>
                    </Form.Item>

                    <Form.Item label="Indicates required" required>
                        
                    </Form.Item>

                    <Form.Item className="form-button">
                        <Button htmlType="button"> Cancel</Button>
                        <Button type="primary">Publish</Button>
                    </Form.Item>


                </Form>
            </div>
        </div>
    )
}

export default ProductDetailForm
