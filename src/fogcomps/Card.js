import React from 'react';
import Card from 'antd/lib/card';
import Tag from 'antd/lib/tag';
import Button from 'antd/lib/button';
import Dropdown from 'antd/lib/dropdown';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
const Item = Menu.Item;

class Cardz extends React.Component {

    clickfn = () => {
        const {onClickFn, type} = this.props;
        if(type === 'add'){
            console.log('add');
        }else{
            onClickFn('111');
        }
    }
    
    render() {
        const { type, data } = this.props;
        const Menus = (
            <Menu>
                <Item>复制</Item>
                <Item>提交</Item>
                <Item>转移</Item>
                <Item>删除</Item>                
            </Menu>
        )

        let status;
        if(type !== 'add'){
            switch (data.status) {
                case "all":
                    status="";
                    break;
                case "develop":
                    status="开发中";
                    break;
                case "review":
                    status="审核中";
                    break;
                case "dismissed":
                    status="已驳回";
                    break;
                case "online":
                    status="已上线";
                    break;
                case "deleted":
                    status="已删除";
                    break;
            }
        }
        
        return (
            <Card className="card">
                {
                    type === 'add' ? 
                    <div className="addCard" onClick={this.clickfn}>
                        <Icon type="plus" />
                    </div> 
                    :
                    <div>
                        <div className="infoarea flex" onClick={this.clickfn}>
                            <div className="pic"><img src="" /></div>
                            <div className="info">
                                <span>智能家电</span>
                                <span>BX0001</span>
                                <span>白电／冰箱</span>
                            </div>
                        </div>
                        <div className="tagarea flex">
                            <div className="tag">
                                <Tag className="tag-theme1">{data.type === 'public' ? '公版':'定制'}</Tag>
                                <Tag className="tag-theme2">{status}</Tag>
                                
                            </div>
                            <div className="edit">
                                <Button shape="circle" icon="edit" style={{border:'none'}}/>
                                <Dropdown overlay={Menus} placement="bottomLeft">
                                    <Button className="threepoint">···</Button>
                                </Dropdown>
                            </div> 
                        </div>
                    </div>
                }
            </Card>
        )
    }
}

export default Cardz;