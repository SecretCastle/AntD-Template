/* import react */
import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Link } from 'react-router-dom';
/* import actions */
// import { setSiderVisibility } from '../redux/actions/sider';
/* import antd UI */
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const { Item, SubMenu } = Menu;
const { MenuItemGroup } = Menu.ItemGroup;
/* import data */
import Config from '../MenuConfig.json';

class LeftSide extends React.Component {
    constructor() {
        super()
        this.state = {
            menuList: [],
            keys: [],  // 当前展开的 SubMenu 菜单项 key 数组
            show: ''
        }
    }
    /* 控制侧边栏显隐 */
    setterSiderMenu = (location) => {
        let Show,
            urlKey,    // 路由地址二级Key值，如：product等
            urlLength;
        urlLength = location.pathname.split('/').length
        urlKey = location.pathname.split('/')[2]
        if(urlLength == '3' && (urlKey == 'product' || urlKey == 'application' || urlKey == 'ability')){
            Show = false;
        }else{
            Show = true;
        }
        this.setState({
            show: Show
        })
    }
    /* 渲染侧边栏目录 */
    createSiderMenuList = (location) => {
        let MenuList = [];
        let Keys = [];
        let labels = [];       
        let firstMenu, // 一级目录
            secMenu,   // 二级目录
            urlKey;    // 路由地址二级Key值，如：product等
        for (let label in Config) {
            labels.push(label);
        }
        labels.map((label) => {
            firstMenu = Config[label].children;
            urlKey = location.pathname.split('/')[2];
            if(urlKey == undefined || ("['financial','doc']").indexOf(urlKey) > -1){ // 首页路由地址处理
                if (Config[label].path == '/app') { // 判断当前功能页面
                    if (firstMenu) { // 侧边栏存在一级目录
                        firstMenu.map((fristObj) => {
                            Keys.push(fristObj.key) //添加需要默认展开的目录key值                       
                            secMenu = fristObj.children;                        
                            MenuList.push((<SubMenu
                                title={fristObj.menuitem}
                                key={fristObj.key}                            
                            >
                                {
                                    secMenu.map((secObj) =>
                                        <Item
                                            className="menuItem"
                                            key={secObj.key}
                                        >
                                            <Link to={secObj.path}>
                                                {secObj.menuitem}
                                            </Link>
                                        </Item>
                                    )
                                }
                            </SubMenu>
                            ))
                        }
                        )
                    }
                }
            }
            else if (Config[label].path.indexOf(urlKey)> -1) { // 判断除首页当前功能页面
                if (firstMenu) { // 侧边栏存在一级目录
                    firstMenu.map((fristObj) => {
                        Keys.push(fristObj.key)                       
                        secMenu = fristObj.children;                        
                        MenuList.push((<SubMenu
                            title={fristObj.menuitem}
                            key={fristObj.key}                            
                        >
                            {
                                secMenu.map((secObj) =>
                                    <Item
                                        className="menuItem"
                                        key={secObj.key}
                                    >
                                        <Link to={secObj.path}>
                                            {secObj.menuitem}
                                        </Link>
                                    </Item>
                                )
                            }
                        </SubMenu>
                        ))
                    }
                    )
                }
            }
            this.setState({
                menuList: MenuList,
                keys: Keys
            })
        })
    }
    componentDidMount () {
        const { location, history } = this.props;
        /* 侧边栏列表循环渲染函数 */
        this.createSiderMenuList(location);
        this.setterSiderMenu(location);
        /* 监听当前地址的变换 */
        history.listen(location => {
            this.createSiderMenuList(location);
            this.setterSiderMenu(location);
        })
    }
    render() {
        return (
            <Sider
                className={this.state.show ? "sider-container" : "hide"}
            >
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    className="sider-wrap"
                    mode="inline"
                    openKeys={this.state.keys}
                >
                    {this.state.menuList}
                </Menu>
            </Sider>
        )
    }
}

// const getSiderVisible = (filter) => {
//     switch (filter) {
//         case 'SHOW':
//             return true
//         case 'HIDE':
//             return false
//         default:
//             return
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         visible: getSiderVisible(state.Sider.sideState)
//     }
// }

// export default connect(mapStateToProps)(withRouter(LeftSide));
export default withRouter(LeftSide);
