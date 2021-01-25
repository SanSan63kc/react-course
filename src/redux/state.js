let store={
    _state:{
        profilePage:{
            postsData:[
                {userId: 1, message:'It is my First post', likes:13, comments:12},
                {userId: 2, message:'It is my second post',likes:14, comments:8},
                {userId: 3, message:'It is my third post',likes:25, comments:17}
            ],
            newPostText:'Какой-то текст'
        },
        dialogsPage:{
            dialogsData:[
                {id: 1, name:'First User', avatar:"http://placehold.it/30"},
                {id: 2, name:'Second User', avatar:"http://placehold.it/30"},
                {id: 3, name:'Third User', avatar:"http://placehold.it/30"}
            ],
            messagesData:[
                {userId: 1, message:'First Message'},
                {userId: 2, message:'Second Message'},
                {userId: 3, message:'Third Message'}
            ]
        }    
    },
    _callSubscriber(){
        console.log('State was changed')
    },

    getState(){
        return this._state
    },
    subscribe(observer){
        this._callSubscriber=observer
    },
    
    dispatch(action){
        if (action.type==='ADD-POST'){
            let newPost={
                userId:4,
                message:this._state.profilePage.newPostText,
                likes:13, 
                comments:12
            }
            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostText=''
            this._callSubscriber(this._state)
        } else if (action.type==='UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    }
}

export default store

window.store=store