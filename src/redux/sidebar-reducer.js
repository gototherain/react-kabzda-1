let initialState =  {
    friendsData: [
        { id: 1, name: 'Rick' },
        { id: 2, name: 'Dick' },
        { id: 3, name: 'Sick' }
    ]
};

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;