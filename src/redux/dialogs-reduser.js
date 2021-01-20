const SEND_MESSAGES = 'SEND-MESSAGES';
const UPDATE_NEW_MESSAGES_TEXT = 'UPDATE-NEW-MESSAGES-TEXT';

let initialState = {
    Dialogs: [
        {name: 'Oly', id: '1' },
        {name: 'Mixa', id: '2' },
        {name: 'Fidel', id: '3' }
    ],
    Messages: [
        {message: 'Hi', id: '1'},
        {message: 'How are you?', id: '2'}
    ],
    newMessagesText: ''
};

const dialogsReduser = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGES:
            return {
                ...state,
                newMessagesText: '',
                Messages: [...state.Messages, {id:'3', message: state.newMessagesText}],
            };
        case UPDATE_NEW_MESSAGES_TEXT:
            return {
                ...state,
                newMessagesText: action.newBody
            };
        default:
            return state;
    }
};

export const sendMessagesActionCreater = () => {
    return {
        type: SEND_MESSAGES
    }
};

export const updateNewMessagesTextActionCreater = (body) => {
    return {
        type: UPDATE_NEW_MESSAGES_TEXT,
        newBody: body
    }
};

export default dialogsReduser;