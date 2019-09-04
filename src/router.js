/*
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: 
 * @LastEditTime: 2019-09-04 16:42:56
 * @Author: wengui.zhang@hand-china.com
 * @Version: 0.0.1
 * @Copyright: Copyright (c) 2019, Hand
 */
import React from 'react';
import { Router, Route, Switch, routerRedux } from 'dva/router';
import IndexPage from './routes/IndexPage';
import IndexPage2 from './routes/IndexPage2'
import dynamic from 'dva/dynamic'
import { Layout } from 'antd';


const { ConnectedRouter } = routerRedux

// Route 暴露出来的接口
// path：路径 exact：是否完全匹配路径才渲染 component: path 对应的组件类
// render： 自定义渲染 children：不管路径是否匹配都要渲染 strict：路由匹配的严格模式 sensitive：是否对path的大小写敏感

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/page2" exact component={IndexPage2} />
      </Switch>
    </Router>
  );
}

// function RouterConfig ({ history }) {
//   const routes = [
//     {
//       path: '/',
//       name: 'IndexPage',
//       component: IndexPage
//     },
//     {
//       path: '/page2',
//       name: 'page2',
//       component: IndexPage2
//     }
//   ];
//   return (
//     <Router history= {history} >
//       <Switch>
//         {
//           routes.map(({path, name, component}) => {
//             return (
//               <Route path={path} key={name} exact component={component} />
//             )
//           })
//         }
//       </Switch>
//     </Router>
//   )
// }


// function RouterConfig (props) {
//   console.log(props)
//   const { history, app} = props;
//   const routes = [
//     {
//       path: '/',
//       name: 'IndexPage',
//       // LoadingComponent: Loading,  // 该路由组件没有加载完成前会显示该loading组件
//       model: () => [import('./models/example')],
//       component: () => import('./routes/IndexPage')
//     },
//     {
//       path: '/page2',
//       name: 'page2',
//       model: () => [import('./models/example')],
//       component: () => import('./routes/IndexPage2')
//     }
//   ];
//   return (
//     <ConnectedRouter history= {history} >
//       <Switch>
//         {
//           routes.map(({path, name, ...dynamics}) => {
//             return (
//               <Route path={path} key={name} exact component={dynamic({app, ...dynamics})} />
//             )
//           })
//         }
//       </Switch>
//     </ConnectedRouter>
//   )
// }


// 当component无法满足需求时，比如说要为某些页面设置固定的layout样式
// function RouterConfig (props) {
//   console.log(props)
//   const { history, app} = props;
//   const routes = [
//     {
//       path: '/',
//       name: 'IndexPage',
//       layout: Layout,  // 当某一类页面需要注入固定的layout时 
//       // LoadingComponent: Loading,  // 该路由组件没有加载完成前会显示该loading组件
//       model: () => [import('./models/example')],
//       component: () => import('./routes/IndexPage')
//     },
//     {
//       path: '/page2',
//       name: 'page2',
//       model: () => [import('./models/example')],
//       component: () => import('./routes/IndexPage2')
//     }
//   ];
//   return (
//     <ConnectedRouter history= {history} >
//       <Switch>
//         {
//           routes.map(({path, name, layout, ...dynamics}) => {
//             const Component = dynamic({app, ...dynamics})
//             return (
//               <Route path={path} key={name} exact render={(props) => {
//                // render会接受一个传人组件的props，在这也可以对props进行处理再传入组件
//                 if(layout){
//                   return (
//                     <Layout>
//                       <Component {...props} />
//                     </Layout>
//                   )               
//                 }
//                 return (<Component {...props} />)
//               }
//               } />
//             )
//           })
//         }
//       </Switch>
//     </ConnectedRouter>
//   )
// }

  


export default RouterConfig;
