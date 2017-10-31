import React from 'react';
import { 
    Form, 
    Input, 
    Button, 
    Upload, 
    Icon, 
    Select,
    Table
} from 'antd';

class PConfig extends React.Component {
    render(){
        const formItemLayout = {
            labelCol: {
              xs: { span: 5 },
              sm: { span: 6 },
            },
            wrapperCol: {
              xs: { span: 5 },
              sm: { span: 5 },
            },
        };

        const buttomItemLayout = {
            labelCol:{
                xs: {span: 10,offset:3},
                sm: {span:10, offset:10}
            },
            wrapperCol:{
                xs: {span: 10,offset:2},
                sm: {span:10, offset:10}
            }
        }
        const column = [{
            title: '属性名',
            dataIndex: 'prop_name',
            key: 'prop_name',
        },{
            title: '属性值',
            dataIndex: 'prop_value',
            key: 'prop_value',
        },{
            title: '操作',
            key: 'action',
            render: (text, record) => (
              <span>
                <a href="javascript:void(0)">删除</a>
                <span className="ant-divider" />
                <a href="javascript:void(0)">添加</a>
                
              </span>
            ),
        }]

        const datasource = [{
            key:'1',
            prop_name:'flag',
            prop_value:'1'
        },
        {
            key:'2',
            prop_name:'flag',
            prop_value:'1'
        }]
        return(
            <div className="form-container">
                <Form>
                    <h2>基本信息</h2>
                    <Form.Item {...formItemLayout} label="产品ID" required={true}>
                        <Input disabled/>
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="产品名称" required={true}>
                        <Input placeholder="请输入"/>
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="产品型号" required={true}>
                        <Input placeholder="请输入"/>
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="产品类型" required={true}>
                        <div>大家电 > 冰箱 [标准] [DIY]</div>
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="产品图片" required={true}>
                        <Upload 
                            listType="picture-card"
                        >
                            <Icon type="plus" className="upload-icon"/>
                            <div className="upload-text">上传</div>
                        </Upload>
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="唯一标识" required={true}>
                        <Select placeholder="请选择">
                            <Select.Option value="mac">MAC</Select.Option>
                            <Select.Option value="secretkey">SecretKey</Select.Option>
                            <Select.Option value="other">other</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="联网方式" required={true}>
                        <Select placeholder="请选择">
                            <Select.Option value="wifi">WIFI</Select.Option>
                            <Select.Option value="blueteeth">蓝牙</Select.Option>
                            <Select.Option value="other">其他</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="产品状态">
                        <Input defaultValue="开发中" disabled/>
                    </Form.Item>
                    <h2>扩展属性</h2>
                    <div className="form-table">
                        <Table columns={column} dataSource={datasource} pagination={false} bordered={true}/>
                    </div>
                    <Form.Item {...buttomItemLayout} className="form-button">
                        <Button type="primary" style={{width:150}}>保存更改</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default PConfig;