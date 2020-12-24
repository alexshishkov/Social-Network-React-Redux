import profileReduser from "./profile-reduser";
import dialogsReduser from "./dialogs-reduser";

let store = {
    _state: {
        profile: {
            post: [
                {messages: 'Hi how are you?', like: '3', id:'1'},
                {messages: 'Hi', like: '2', id:'2'}
            ],
            newPostText: 'ой ой ой'
        },
        dialog: {
            Dialogs: [
                {name: 'Oly', id: '1' },
                {name: 'Mixa', id: '2' },
                {name: 'Fidel', id: '3' }
            ],
            Messages: [
                {message: 'Hi', id: '1'},
                {message: 'How are you?', id: '2'}
            ],
            newMessagesText: 'vfesczf'
        }
    },

    callSubscriber() {},

    getState () {
        return this._state
    },

    subscribe(observer) {
        this.callSubscriber = observer
    },

    dispatch (action) {
        this._state.profile = profileReduser(this._state.profile, action);
        this._state.dialog = dialogsReduser(this._state.dialog, action);
        this.callSubscriber(this._state);
    }
};

export default store;