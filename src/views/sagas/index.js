import { fork } from 'redux-saga/effects';

import { watchFetchImageSaga } from './fetchImageSaga';

function* rootSaga(){
    yield fork(watchFetchImageSaga);
}

export default rootSaga;
