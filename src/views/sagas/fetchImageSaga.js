import { call, takeLatest, delay, race, put } from 'redux-saga/effects';
import { fetchImage } from '../helpers/fetchAPI';
import { timeoutCall } from '../helpers/sagaAPI';

function* fetchImageSaga(url){
    const blob = yield call(fetchImage, url, {method: 'POST'});
    return blob;
}

function* timeout(){
    yield delay(5000);
}

function* fetchImageSagaTest(action){
    const blob = yield* timeoutCall(call(fetchImageSaga, action.url), 500);
    if (blob != null) {
        yield put({type: 'add_image', img: blob});
    } else {
        console.log("request timed out");
    }

}

export function* watchFetchImageSaga(){
    yield takeLatest('fetch_image', fetchImageSagaTest);
}

export default fetchImageSaga;
