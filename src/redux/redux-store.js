import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import usersReducer from "./frends-reducer";

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    frendsPage:usersReducer
})

let store = createStore(reducers)

window.store=store

export default store