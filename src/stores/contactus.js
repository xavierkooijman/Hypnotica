import { defineStore } from 'pinia';

export const contactStore = defineStore('contacts', {
    state: () => ({
        contacts: [
            {
                name: "Rachelle Chell",
                email: "rachelle@gmail.com",
                message: "Hi, Im Rachel Chell, and Im interested in volunteering for the event. Could you please share more details about the tasks involved and how I can sign up? Thank you!",
            }
        ],
    }),

    getters: {
        getAllContacts: (state) => state.contacts,
    },

    actions: {
        addContact(name, email, message) {
            const newContact = {
                name,
                email,
                message,
            };
            this.contacts.push(newContact);
        },
    },

    persist: true,
});