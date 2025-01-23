<script>
import { useShiftsStore } from "@/stores/shifts";

export default {
    data() {
        return {
            job: "",
            date: null,
            startTime: null,
            endTime: null,
            location: "",
            coins: 0,
			      shiftStore: useShiftsStore(),
        }
    },
    methods: {
        async handleSubmit() {
            
            try {
                await this.shiftStore.addShift(this.job, this.date, this.startTime, this.endTime,this.location, this.coins);
                alert("Shift added successfully");
            } catch (error) {
                alert(error.message);
            }
        },
		deleteShift(shiftId){
			this.shiftStore.removeShift(shiftId);
		}
    }
}
</script>

<template>
    <h1>Admin Shifts</h1>
    <form class="container" @submit.prevent="handleSubmit">
        <h2>Add Shifts:</h2>
        <input type="text" class="form-input pbottom-12" v-model="job" placeholder="Job title" required/>
        <label for="date">Date</label>
        <input type="date" class="dateInput" v-model="date" required/>
        <label for="date">Start time</label>
        <input type="time" class="dateInput" v-model="startTime" required/>
        <label for="date">End time</label>
        <input type="time" class="dateInput" v-model="endTime" required/>
        <input type="text" class="form-input pbottom-12" v-model="location" placeholder="Location" required/>
        <input type="number" class="form-input pbottom-12" v-model="coins" placeholder="Coins" required/>
        <button type="submit" class="btn-primary">Add shift</button>
    </form>
		<h2>All Shifts:</h2><br>
    <div class="artists-container">
        <div v-for="shift in shiftStore.shifts" class="artist-card">
            <p class="card-title">{{ shift.job }}</p>
            <p>{{ shift.date }}</p>
            <p>{{ shift.startTime }} - {{ shift.endTime }}</p>
            <p>{{ shift.location }}</p>
            <button class="btn-primary w-100" @click="deleteShift(shift.id)">Delete</button>
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

.artist-image{
  width: 100%;
  height: 100%;
  border-radius: 12px;
  object-fit: cover;
}
</style>