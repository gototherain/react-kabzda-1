let state = {

    profilePage: {
        postsData: [
            { id: 1, message: 'Buenos dias!', likesCount: 20 },
            { id: 2, message: 'Buenos Aires!', likesCount: 0 },
            { id: 3, message: 'Valar Morghulis', likesCount: 10 }
        ]
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
            { id: 2, own: 'my',message: 'Go fuck yourself, you whoreson,' },
            { id: 3, own: 'other',message: '\'Cause you\'re through fuckin\' with me.' }
        ]
    },

    sidebar: {
        friendsData: [
            { id: 1, name: 'Rick' },
            { id: 2, name: 'Dick' },
            { id: 3, name: 'Sick' }
        ]
    }


};

export default state;