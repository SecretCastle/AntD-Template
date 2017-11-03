import React from 'react';
import Layout from 'antd/lib/layout';
import Radio from 'antd/lib/radio';
import Input from 'antd/lib/input';
import Form from 'antd/lib/form';
import Inputs from 'antd/lib/input';
import Button from 'antd/lib/button';
import Cardz from 'fogcomp/Card';
import {connect} from 'react-redux';
import QueueAnim from 'rc-queue-anim';
//sim
import SimData from 'tools/sim.json';

const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
const FormItem = Form.Item;


class ProductList extends React.Component {
    
    state = {
        data:SimData.stream
    }

    changeType(e) {
        let data = []
        switch(e.target.value){
            case "all":
                data = SimData.stream;
                break;
            case "develop":
                data = SimData.stream.filter( ele => ele.status === 'develop');
                break;
            case "review":
                data = SimData.stream.filter( ele => ele.status === 'review');
                break;
            case "dismissed":
                data = SimData.stream.filter( ele => ele.status === 'dismissed');
                break;
            case "online":
                data = SimData.stream.filter( ele => ele.status === 'online');
                break;
            case "deleted":
                data = SimData.stream.filter( ele => ele.status === 'deleted');
                break;
            default:
                data = SimData.stream
                break;
        }
        this.setState({
            data:data
        })
    } 

    onclickfn(e){
        if(e === 'add'){

        }else{
            this.props.history.push({
                pathname:`${this.props.match.url}/pconfig`,
                state:{id:'1111111'}
            })
        }
    }


    render() {
        const {match} = this.props;
        const {data} = this.state;
        const Cardzs = data.map( (ele,index) => (
            <Cardz key={index} data={ele} onClickFn={e => this.onclickfn(e)}/>
        ))
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
                <QueueAnim className="cardwrap" type={['right', 'left']} ease={['easeOutQuart', 'easeInOutQuart']}>
                    <Cardz type="add" onClickFn={e => this.onclickfn(e)}/>
                    {Cardzs}
                </QueueAnim>
            </div>
        )
    }
}

export default ProductList;