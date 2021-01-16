    let  TempUserAvatar = "http://placehold.it/30"

    let state={
        profilePage:{
            postsData:[
                {userId: 1, message:'It is my First post', likes:13, comments:12},
                {userId: 2, message:'It is my second post',likes:14, comments:8},
                {userId: 3, message:'It is my third post',likes:25, comments:17}
            ],
        },
        dialogsPage:{
            dialogsData:[
                {id: 1, name:'First User', avatar:TempUserAvatar},
                {id: 2, name:'Second User', avatar:TempUserAvatar},
                {id: 3, name:'Third User', avatar:TempUserAvatar}
            ],
            messagesData:[
                {userId: 1, message:'First Message'},
                {userId: 2, message:'Second Message'},
                {userId: 3, message:'Third Message'}
            ]
        }    
    }

export default state