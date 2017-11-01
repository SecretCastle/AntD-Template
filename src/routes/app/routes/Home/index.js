import React from 'react';
import Layout from 'antd/lib/layout';
import Tabs from 'antd/lib/tabs';
import Button from 'antd/lib/button';
import ClassNames from 'classnames';
const TabPane = Tabs.TabPane;
const { Content } = Layout;

//child components
import MyTab from './components/tab'

class Home extends React.Component {
    state = {
        isShowMenu:false
    }
    

    showHideMenu = () => {
        this.setState({
            isShowMenu: !this.state.isShowMenu
        })
    }

    render(){
        return (
            <Layout>
                <Content 
                    className={
                        ClassNames(
                            {'app-inner-out-container':!this.state.isShowMenu},
                            {'app-inner-container':this.state.isShowMenu}
                        )
                    }>
                </Content>
            </Layout>
        )
    }
}

export default Home;