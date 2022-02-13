import React from 'react'
import { Tabs, Upload } from 'antd';
import './ProductImageGallery.scss'
import TShirt1 from '../assets/images/tshirt1.jpg'
import { PlusOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;


const ProductImageGallery = () => {
    const fileList = [
        {
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: TShirt1,
        }];

    return (
        
            <div className="product-image-gallery-preview-container">
                <Tabs defaultActiveKey="2" centered>
                    <TabPane tab="Image Gallery" key="1">
                        <div className="product-image-gallery">
                            <img className="preview-image" src={TShirt1} />
                            <Upload
                                listType="picture-card"
                                fileList={fileList}
                                // onPreview={this.handlePreview}
                                // onChange={this.handleChange}
                            >
                                {fileList.length >= 5 ? null : <div>
                                    <PlusOutlined />
                                    <div style={{ marginTop: 8 }}>Upload</div>
                                </div>}
                            </Upload>
                            <div className="upload-hint-text">You may upload 4 more images. <br/>Support file type jepg, jpg, png</div>
                        </div>
                    </TabPane>
                    <TabPane tab="Preview" key="2">
                        <div className="image-preview-wrapper">
                        <div className="image-preview">
                            <img src={TShirt1}/>
                            <div className="preview-text">
                                <div className="product-name">ADLV Baby Face Short Sleeve T-Shirt Black Donuts</div>
                                <div className="product-price">$88</div>
                            </div>
                        </div>
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        
    )
}

export default ProductImageGallery