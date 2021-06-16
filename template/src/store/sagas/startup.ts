import {delay, put, takeLatest} from '@redux-saga/core/effects';
import * as actions from '@store/actions/startup';

function* watchStartup() {
  try {
    yield delay(1000); //Fake waiting process
  } catch (error) {
  } finally {
    yield put(actions.startupSuccess());
  }
}

const startupSaga = [takeLatest(actions.START_UP, watchStartup)];
export default startupSaga;
