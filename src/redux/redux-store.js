import { combineReducers, createStore,applyMiddleware } from "redux";
import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import usersReducer from "./frends-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    frendsPage:usersReducer,
    auth:authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store=store

export default store