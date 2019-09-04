/*
 * @Date: 
 * @LastEditors: 
 * @LastEditTime: 2019-09-04 20:10:01
 * @Author: wengui.zhang@hand-china.com
 * @Version: 0.0.1
 * @Copyright: Copyright (c) 2019, Hand
 */
import React from 'react';
// import { connect } from 'dva';

import { routerRedux } from 'dva/router';


// @connect(({ example, loading }) => ({
//   example,
//   loading: !!loading.effects['example/deleteBtn']
// }))
export default class MyComponet extends React.Component {

  componentDidMount() {
    console.log(this.props);
  }

  goBack(){
    // const { dispatch } = this.props;
    // dispatch(
    //   routerRedux.goBack()
    // )

    const { history } = this.props;
    history.goBack()
  }


  render() {

    return (
      <div>
         我的组件
         <button onClick={()=> this.goBack()}> 返回</button>
      </div>
    )
  }

}



