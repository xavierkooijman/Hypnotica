import { defineStore } from 'pinia';

export const contactStore = defineStore('contacts', {
    state: () => ({
        contacts: [
            {
                id: "1",
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

            let newId;
            do {
              newId = Math.floor(Math.random() * 1000) + 1;
            } while (this.contacts.some(contact => contact.id == newId));

            const newContact = {
                id: newId,
                name,
                email,
                message,
            };
            this.contacts.push(newContact);
        },

        deleteContact(index) {
            this.contacts.splice(index, 1);
        },
    },
    persist: true,
});