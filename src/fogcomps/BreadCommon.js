import React from 'react';
import Breadcrumb from 'antd/lib/breadcrumb';
import Config from '../MenuConfig.json';
import { withRouter, Link } from 'react-router-dom';
const {Item} = Breadcrumb

/**
 * 
 * 这里屏蔽deviceid
 * 路由过滤掉deviceid
 * 
 */

class BreadCommon extends React.Component{
    state = {
        breadcrumb:[]
    }
    componentDidMount(){
        const { history, location } = this.props;
        this.createBreadCrumbs(location);
        history.listen( location => {
            this.createBreadCrumbs(location)
        });
    }  

    createBreadCrumbs(location){
        //这里屏蔽deviceid
        const pathArr = location.pathname.split('/').filter( i =>{
            return i && i.length < 15
        });
        let newUrl = '';
        pathArr.map(ele => {
            newUrl += `/${ele}`
        })
        if(pathArr.length === 1){
            //首页
            this.setState({
                breadcrumb:[(
                    <Item key={1}><Link to="/app">首页</Link></Item>
                )]
            })
        }else if( pathArr.length === 2){
            //只有一级  
            for(let items in Config[pathArr[1].toLowerCase()]){
                if(items === 'path'){
                    if(Config[pathArr[1].toLowerCase()][items] === newUrl){
                        this.setState({
                            breadcrumb:[(
                                <Item key={1}>
                                    <Link 
                                        to={Config[pathArr[1]]['path']}
                                    >
                                        {Config[pathArr[1].toLowerCase()]['menuitem']}
                                    </Link>
                                </Item>
                            )]
                        })
                    }
                }
            }
            
        }else{
            let i = 0;
            let newBreadCrumds = [];
            let ForItem = Config[pathArr[1]].children;
            while (i < pathArr.length) {
                if( i < (pathArr.length - 1) && i !== 0){
                    if(i === 1){
                        newBreadCrumds.push(
                            (
                                <Item key={0}>
                                    <Link to={Config[pathArr[1]].path}>
                                        {Config[pathArr[1]].menuitem}
                                    </Link>
                                </Item>
                            )
                        )
                    }else{
                        newBreadCrumds.push(
                            (
                                <Item key={0}>
                                    <Link to={ForItem[i].path}>
                                        {ForItem[i].pathname}
                                    </Link>
                                </Item>
                            )
                        )
                    }
                }
                if(pathArr[i] === ForItem['key']){
                    ForItem = ForItem.children
                }
                i++;
            }
            ForItem.map( (ele ,index) => {
                if(ele.path === newUrl){
                    newBreadCrumds.push(
                        (
                            <Item key={index + 1}>
                                {ele.menuitem}
                            </Item>
                        )
                    )
                }   
            });
            this.setState({
                breadcrumb: newBreadCrumds
            })
        }
    }

    render(){
        return (
            <div className="breadarea">
                <Breadcrumb>
                    {this.state.breadcrumb}
                </Breadcrumb>
            </div>
        )
    }
}

export default withRouter(BreadCommon);