import { defineStore } from 'pinia';

export const volunteerStore = defineStore('volunteers', {
    state: () => ({
        volunteers: [],
    }),

    getters: {
        getAllvolunteers: (state) => state.volunteers,
    },

    actions: {
        addVolunteer(name, email, workFunction, coverLetter) {
            const volunteerExists = this.volunteers.some(volunteer => volunteer.name === name);

            if (volunteerExists) {
                throw new Error('Volunteer application already exists');
            }

            let newId;
            do {
              newId = Math.floor(Math.random() * 1000) + 1;
            } while (this.volunteers.some(v => v.id == newId.toString()));

            const newVolunteer = {
                id: newId,
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