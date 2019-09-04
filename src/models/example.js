/*
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: 
 * @LastEditTime: 2019-09-04 14:41:30
 * @Author: wengui.zhang@hand-china.com
 * @Version: 0.0.1
 * @Copyright: Copyright (c) 2019, Hand
 */
import { deleteBtn } from '../services/example'
import { routerRedux } from 'dva/router';

export default {

  namespace: 'example',

  state: {
    btnList: [],
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *addBtn(_, { put }) {  // eslint-disable-line     
      yield put({ type: 'editBtn' });
    },
    *deleteBtn({ payload }, { call, put, select}){
      const { btnList } = yield select(state => state.example);
      const params = {
        btnList,
        index: payload
      }
      const res = yield call(deleteBtn, params)
      yield put({ type: 'save', payload: {
        btnList: res
      }})
    },
    *goNext(_, { put }){
       yield put(
        // routerRedux.push('/page2')
        routerRedux.push({
          pathname: '/page2'
        })
      );
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    editBtn(state){
      const btnList = ['按钮1', '按钮2', '按钮3'];
      return {...state, btnList};
    }
  },

};
