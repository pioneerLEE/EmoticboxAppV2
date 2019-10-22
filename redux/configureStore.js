/*
앱을 키면 빈 화면이 아니고, 또한 매번 api를 가져오는 것도 아니다. 
폰의 local disk에 저장된 리덕스 스토어에 값이 있고, 새로고침을 하면 api 를 통해 값이 대체되는 것 
*/

import { applyMiddleware, createStore } from "redux";
import { persistStore, persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import user from "./modules/user";

const middlewares = [thunk];

const persistConfig = {
    key: "root",
    storage
};
// backlist:["user"]  을 하면 특정 모듈을 블랙리스트 처리 (제외) 하여 스토어에 저장되지 않는다.
//키가 root인 state를 설정한다.

const reducer = persistCombineReducers(persistConfig, {
    user
  });//모바일폰의 디스크에 리듀서들을 저장함. configuration인 persistConfig 과 함께

  const configureStore = () => {
    let store = createStore(reducer, applyMiddleware(...middlewares));
    //createStore은 앱의 상태 트리 전체를 보관하는 Redux 스토어를 만듭니다. 앱 내에는 단 하나의 스토어만 있어야 합니다.
    //인수에 대해    createStore(액션에서 다음 상태트리를 반환하는 리듀싱 함수,)
    let persistor = persistStore(store); 
    /*
    persistStore(store)에서 store은 리덕스 스토어 이다. 이 함수는 persistor 오브젝트를 반환한다.
    정확하지는 않지만 store을 persistor 오브젝트로 무언가 추가해서 가공하는 느낌(?)
    */
    return { store, persistor };
  };
  
  export default configureStore;