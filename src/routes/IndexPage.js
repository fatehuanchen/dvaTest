/*
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: 
 * @LastEditTime: 2019-09-04 15:06:51
 * @Author: wengui.zhang@hand-china.com
 * @Version: 0.0.1
 * @Copyright: Copyright (c) 2019, Hand
 */
import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';  
import styles from './IndexPage.css';
import { Spin } from 'antd'


// 为组件带来了example，loading， dispatch,  dva/router为组件带来了history,match, location， 子组件无
@connect(({ example, loading }) => ({
  example,
  loading: !!loading.effects['example/deleteBtn']
}))
export default class IndexPage extends React.Component {

  componentDidMount() {
    console.log(this.props);
  }

  
  add = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'example/addBtn',
    })
  };

  deleteBtn = (index) => {
    setTimeout(() => {
      const { dispatch } = this.props;
      dispatch({
        type: 'example/deleteBtn',
        payload: index
      })
    }, 1000)

  }

  renderBtn(btnList) {
    return (
      btnList.map((item, index) => (
        <React.Fragment>
            <li>{item}</li>
            <button onClick={() => this.deleteBtn(index)} >删除</button>
        </React.Fragment>
      )
      )
    )
  }

  goNext() {
    // const { dispatch } = this.props;
    // dispatch(
    //   routerRedux.push({
    //     pathname: '/page2',
    //   })
    // )

    // const { history } = this.props;
    // history.push({
    //   pathname: '/page2',
    // })

    const { dispatch } = this.props;
    dispatch({
      type: 'example/goNext'
    })
    
  }


  render() {
    const { btnList } = this.props.example || { btnList: []};
    const { loading } = this.props || { loading: true};
    return (
      <div className={styles.normal}>
        <h1 className={styles.title}>Yay! Welcome to dva!</h1>
        <div className={styles.welcome} />
        <button onClick={() => this.add()}>add</button>
        <button onClick={() => this.goNext()} style={{'marginLeft': 20}}>下一页</button>
        <Spin spinning={loading}>
          <ul className={styles.list}>
            {
              this.renderBtn(btnList)
            }
          </ul>
        </Spin>
      </div>
    )
  }

}

//将刚刚定义的model与该组件关联起来
//                           namespace                     组件导出名称  
// export default connect(({ example }) => ({ example }))(IndexPage);


