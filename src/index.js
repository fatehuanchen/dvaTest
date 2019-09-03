/*
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: 
 * @LastEditTime: 2019-09-03 10:31:06
 * @Author: wengui.zhang@hand-china.com
 * @Version: 0.0.1
 * @Copyright: Copyright (c) 2019, Hand
 */
import dva from 'dva';
import './index.css';
import createHistory from 'history/createBrowserHistory';
import createLoading from 'dva-loading';

// 1. Initialize
const app = dva({
    history: createHistory(), // 指定给路由用的 history，默认是 hashHistory,现在使用的browserHistory,  还有createMemoryHistory主要用于服务器渲染。它创建一个内存中的history对象，不与浏览器URL互动
});

// 2. Plugins
app.use(createLoading());

// 3. Model
app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');

/*
    请求前： 
    laoding: {
        effects: {},
        global: false,
        models: {},
    }
    请求中：
    loading: {
        effects: {example/fetch: true},  // key为dispatch的type值
        global: true,
        models: {login: true},
    }
    请求完成：
    loading: {
        effects: {example/fetch: false}, 
        global: false,
        models: {login: false},
    }
    

    判断局部loading ==》 !!props.loading.effects['example/fetch']

*/

  /*

    import dynamic from 'dva/dynamic';

    const initPage = dynamic({
        app,  // dva实例
        models: ()=> [
            import('./models/example'),
        ],  // 返回 Promise数组函数，Promise 返回 dva model
        components: ()=> import('./router'),   // 返回 Promise函数，Promise 返回 React Component
    })

    */

    /*

    const [result1, result2]  = yield all([
        call(service1, param1),
        call(service2, param2)
    ])

    */






