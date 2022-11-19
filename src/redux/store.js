import postReducer from './posts/postReducer'
import { legacy_createStore as createStore  } from 'redux' ;

const store = createStore(postReducer);
export default store ;