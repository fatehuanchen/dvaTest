/*
 * @Date: 
 * @LastEditors: 
 * @LastEditTime: 2019-09-04 14:55:57
 * @Author: wengui.zhang@hand-china.com
 * @Version: 0.0.1
 * @Copyright: Copyright (c) 2019, Hand
 */
import React from 'react';

import { routerRedux } from 'dva/router';

import MyComponent from './MyComponent'


export default class IndexPage2 extends React.Component {

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
         page2

         <button onClick={()=> this.goBack()}> 返回</button>
         <MyComponent history={this.props.history} />
      </div>
    )
  }

}



