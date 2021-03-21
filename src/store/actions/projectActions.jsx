import {all, call, put, takeEvery} from 'redux-saga/effects'

export function* createProjectSaga1(action){
    try{
        console.log("I AM HIT")
        const newData = {title: "asdas", content:"SAdsa"}
        const payload = action && action.payload;
        yield put({type:"CREATE_PROJECT",payload:[payload,newData]});
    } catch(e){
        yield put({type:"COULDNT_CREATE_PROJECT", message: "FAILED TO ADD"});
    }
}

function* createProjectSaga() {
    yield takeEvery('CREATE_PROJECT_DATA',createProjectSaga1);
}

export default function* rootSaga(){
    yield all([
        createProjectSaga(),
    ]);
};