import { queryTest } from '@/services/api';
export default {
    namespace: 'test',
    state: {
        data : [],
    },
    effects: {
    //payload 请求的参数
        *fetch({ payload }, { call, put }) {
            const response = yield call(queryTest, payload);
            console.log(response,"response.response.js")

            yield put({
            //回调的方法 save
                type: 'save',
                payload: response,
            });
        },
    },
    reducers: {
    //这块应该是回调
    save (state, action) {
            console.log(action,"text.jstext.js")
            return {
                ...state,
                data: action.payload,
            };
        },
    },
};