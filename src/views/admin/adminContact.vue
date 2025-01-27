<script>
import {contactStore} from "@/stores/contactUsForm";
export default {
    data() {
        return {
			      contactStore: contactStore(),
        }
    },
    methods: {
		deleteContact(contactId){
      this.contactStore.deleteContact(contactId);
		}
    }
}
</script>

<template>
    <h1>Admin Contacts</h1>
		<h2>All contacts:</h2><br>
    <div class="artists-container">
        <div v-for="contact in contactStore.contacts" class="artist-card">
            <p class="card-title">{{ contact.name }}</p>
            <p>{{ contact.email }}</p>
            <p>{{ contact.message }}</p>
            <button class="btn-primary w-100" @click="deleteContact(contact.id)">Delete</button>
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