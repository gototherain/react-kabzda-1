const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageText,
                own: 'my'
            };
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            return state;
        default:
            return state;



    }

}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text });


export default dialogsReducer;