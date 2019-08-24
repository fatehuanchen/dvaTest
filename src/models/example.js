import { deleteBtn } from '../services/example'
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
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    editBtn(state){
      state.btnList = ['按钮1', '按钮2', '按钮3'];
      return {...state};
    }
  },

};
