import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

@connect(({ example, loading }) => ({
  example,
}))
export default class IndexPage extends React.Component {

  componentDidMount() {
    console.log(this.props);
  }

  // 
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
    console.log('render', btnList)
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


  render() {
    const { btnList } = this.props.example;
    console.log(btnList);
    return (
      <div className={styles.normal}>
        <h1 className={styles.title}>Yay! Welcome to dva!</h1>
        <div className={styles.welcome} />
        <button onClick={() => this.add()}>add</button>
        <ul className={styles.list}>
          {
            this.renderBtn(btnList)
          }
        </ul>
      </div>
    )
  }

}

//将刚刚定义的model与该组件关联起来
//                           namespace                     组件导出名称  
// export default connect(({ example }) => ({ example }))(IndexPage);
