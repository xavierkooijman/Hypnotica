<script>
import {volunteerStore} from '@/stores/volunteerForm';
import { useUsersStore } from '@/stores/user';

export default {
    data() {
        return {
          volunteerStore: volunteerStore(),
          userStore: useUsersStore()
        }
    },
    methods: {
      rejectVolunteer(volunteerId){
        this.volunteerStore.deleteVolunteer(volunteerId);
      },
      acceptVolunteer(volunteerId){
        this.userStore.addVolunteer(volunteerId);
      },
      removeVolunteer(id){
        return this.userStore.removeVolunteer(id);
		  }
  }
}
</script>

<template>
    <h1>Admin Volunteers</h1>
		<h2>All applications:</h2><br>
    <div class="artists-container">
        <div v-for="volunteer in volunteerStore.volunteers">
            <p class="card-title">{{ volunteer.name }}</p>
            <p>{{ volunteer.email }}</p>
            <p>{{ volunteer.workFunction }}</p>
            <p>{{ volunteer.coverLetter }}</p>
            <button class="btn-primary w-100" @click="acceptVolunteer(volunteer.id)">Accept</button>
            <button class="btn-secondary w-100" @click="rejectVolunteer(volunteer.id)">Reject</button>
        </div>
    </div>
    <h2>All active volunteers:</h2><br>
    <div class="artists-container">
      <div v-for="user in userStore.users">
        <div v-if="user.IsVolunteer">
          <p class="card-title">{{ user.name }}</p>
          <p>{{ user.email }}</p>
          <button class="btn-primary w-100" @click="removeVolunteer(user.id)">Remove</button>
        </div>
      </div>
    </div>
</template>

<style scoped>
.container{
	display: flex;
	flex-direction: column;
	gap: 24px;
	padding: 24px;
	width: 600px;
}

.active{
  background-color: var(--gray700) !important;
}

.dateInput{
  padding: 12px;
}

.card-title{
  font-family: Aspekta500;
  font-size: 24px;
}

.artists-container{
	display: grid;
  grid-template-columns: repeat(auto-fill, minmax(312px, 1fr));
	gap: 32px;
}

.artist-card{
	display: flex;
	flex-direction: column;
	gap: 16px;
  padding: 24px;
  background-color: var(--mainBlack);
  border: 1px solid var(--gray200);
  border-radius: 16px;
}
</style>