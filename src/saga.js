import { default as map } from 'file-upload/saga';

export default function* rootSaga() {
    yield [map()];
}

