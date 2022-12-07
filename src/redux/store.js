import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {

        profilePage: {
            postsData: [
                { id: 1, message: 'Buenos dias!', likesCount: 20 },
                { id: 2, message: 'Buenos Aires!', likesCount: 0 },
                { id: 3, message: 'Valar Morghulis', likesCount: 10 }
            ],
            newPostText: 'Valar Dohaeris!'
        },


        dialogsPage: {
            dialogsData: [
                { id: 1, name: 'Rick' },
                { id: 2, name: 'Dick' },
                { id: 3, name: 'Sick' },
                { id: 4, name: 'Wick' },
                { id: 5, name: 'Pick' },
                { id: 6, name: 'Nick' }
            ],
            messagesData: [
                { id: 1, own: 'other', message: 'So lock me up and sock me up, and throw away the key.' },
                { id: 2, own: 'my', message: 'Go fuck yourself, you whoreson,' },
                { id: 3, own: 'other', message: '\'Cause you\'re through fuckin\' with me.' }
            ],
            newMessageText: ''
        },

        sidebar: {
            friendsData: [
                { id: 1, name: 'Rick' },
                { id: 2, name: 'Dick' },
                { id: 3, name: 'Sick' }
            ]
        }


    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    // addPost() {
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0
    //     };

    //     this._state.profilePage.postsData.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state);
    // },
    // updateNewPostText(newText) {

    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },
    // addMessage() {
    //     let newMessage = {
    //         id: 4,
    //         message: this._state.dialogsPage.newMessageText,
    //         own: 'my'
    //     };
    //     this._state.dialogsPage.messagesData.push(newMessage);
    //     this._state.dialogsPage.newMessageText = '';
    //     this._callSubscriber(this._state);
    // },
    // updatenewMessageText(newMessage) {
    //     this._state.dialogsPage.newMessageText = newMessage;
    //     this._callSubscriber(this._state);

    // },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    }

}

export default store;
window.store = store;