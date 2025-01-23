import { defineStore } from 'pinia';

export const volunteerStore = defineStore('volunteers', {
    state: () => ({
        volunteers: [
            {
                name: 'Rachelle Chell',
                email: 'rachelle@gmail.com',
                workFunction: 'Production',
                coverLetter: 'Hi i would like to applay'
            }
        ],
    }),

    getters: {
        getAllvolunteers: (state) => state.volunteers,
    },

    actions: {
        addVolunteer(name, email, workFunction, coverLetter) {
            const newVolunteer = {
                name,
                email,
                workFunction,
                coverLetter
            };
            this.volunteers.push(newVolunteer);
        },

        deleteVolunteer(index) {
            this.volunteers.splice(index, 1);
        },
    },

    persist: true,
});