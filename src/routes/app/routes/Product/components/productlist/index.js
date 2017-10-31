import React from 'react';
import Layout from 'antd/lib/layout';
import Radio from 'antd/lib/radio';
import Input from 'antd/lib/input';
import Form from 'antd/lib/form';
import Inputs from 'antd/lib/input';
import Button from 'antd/lib/button';
import Cardz from 'fogcomp/Card';
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
const FormItem = Form.Item;

class ProductList extends React.Component {
    changeType(e) {
        console.log(e);
    } 

    render() {
        return (
            <div>
                <div style={{height:35}}>
                    <RadioGroup
                        defaultValue={'all'}
                        onChange={ e => this.changeType(e)}
                    >
                        <RadioButton value="all">全部</RadioButton>
                        <RadioButton value="develop">开发中</RadioButton>
                        <RadioButton value="review">审核中</RadioButton>
                        <RadioButton value="dismissed">已驳回</RadioButton>
                        <RadioButton value="online">已上线</RadioButton>
                        <RadioButton value="deleted">已删除</RadioButton>
                    </RadioGroup>
                    <Form layout="inline" style={{float:'right'}}>
                        <FormItem>
                            <Inputs placeholder="请输入关键字" />
                        </FormItem>
                        <FormItem >
                            <Button type="primary">搜索</Button>
                        </FormItem>
                    </Form>
                    
                </div>
                <div className="cardwrap">
                    <Cardz />
                    <Cardz />
                    <Cardz />
                    <Cardz />
                    <Cardz />
                </div>
            </div>
            
        )
    }
}

export default ProductList;