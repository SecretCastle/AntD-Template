# 我的思路

> 主界面

我的思路
通过路由控制，来显示对应的组件

> 侧边栏

每一个大类下的侧边栏item名称不同，抽象出来，给予渲染这点毋庸置疑。
**我的思路：**
抽象出来，传入参数props，从而渲染Menu的结构

配置举例
```js
//前提是栏目固定死，已确定栏目项
const config = [
    {
        itemName:'产品详细',
        path:`${match.url}/product/pdetail`,
        children:[
            {
                itemName:'产品详细下自分类1',
                path:`${match.url}/product/pdetail/sub1`
            }        
        ]
    },
    {
        itemName:'产品功能',
        path:`${match.url}/product/pFunc`,
    }
]
<LeftSide  
    config={config}
    ...
/>
```
*当然如果栏目还要增加，那么就要走redux动态管理栏目状态了*

> 导航

导航我的思路

结构包括

- logo
- 左侧主导航栏
- 右侧信息&用户&整体主题配置相关

主要右侧思路

#### 主题

思路：
 目前按照antd官方的例子，我只是在编译前设置好了主题的颜色，然后编译后显示对应的主题颜色
这里要么编译前固定主题颜色，要么要动态设置（这个貌似改的要很多，最笨的方法就是，改变css，redux动态渲染）

#### 国际化

思路：
置于头部header中，通过redux管理，但是有一点有点懵圈，貌似antd只给出了他组件自带的文本，其他的要自己配置，这个需要看看。

> 优化

- `bundle`大小是个问题，影响加载快慢
- ........

> 其他
 
公共组件
如，可能出现自定义的Toast或ActionSheet。这里需要走redux控制`show` & `hide`

