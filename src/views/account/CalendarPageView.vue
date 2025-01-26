<script>
import { useEventStore } from "@/stores/events";
import { useUsersStore } from "@/stores/user";
import { useVenuesStore } from "@/stores/venues";
import Sidebar from '@/components/Sidebar.vue';
    export default {
        components: {
            Sidebar,
        },
        data() {
            return {
                userStore: useUsersStore(),
                eventStore: useEventStore(),
								venueStore: useVenuesStore(),
								hours: ["20:00", "21:00", "22:00", "23:00", "00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00"]
            }
        },
				methods: {
					calculateGridColumn(date) {
      			const eventDate = new Date(date);
      			const day = eventDate.getDate();

      			switch (day) {
        			case 24:
          			return 1;
        			case 25:
          			return 2;
							case 26:
								return 3;
						}	
    			},
					calculateTopPosition(timeStart) {
						const [hours, minutes] = timeStart.split(':').map(Number);
						const totalMinutes = (hours * 60) + minutes;
						const startTime = 20 * 60;
						console.log(totalMinutes - startTime); 

						let position;
						if (totalMinutes >= startTime) {
							position = totalMinutes - startTime;
						}
						else {
							position = (24 * 60 - startTime) + totalMinutes;
						}

						const percentagePosition = (position / (10 * 60)) * 100;

						return percentagePosition;
    			},
				}
    }
</script>

<template>
  <div class="sidebar-calendar-container">
    <Sidebar/>
		<div class="days-hours-container">
			<div class="hours-container">
				<div v-for="hour in hours" class="hour">{{ hour }}</div>
			</div>
			<div class="days-blocks-container">
				<div class="days-container">
					<p class="day first-day">Friday, 24th January</p>
      		<p class="day">Saturday, 25th January</p>
      		<p class="day">Sunday, 26th January</p>
				</div>
				<div class="blocks-container">
					<div class="calendar-block" v-for="n in 30"></div>
					<div v-for="event in eventStore.events" :style="{gridColumn: calculateGridColumn(event.date)}">
						<div class="event-card" v-if="userStore.authenticatedUser.calendar.includes(event.id)" :style="{height: event.duration * 10 + '%', top: calculateTopPosition(event.timeStart) + '%'}">
							<p>{{ event.name }}</p>
							<p>{{ event.timeStart }} - {{ event.timeEnd }}</p>
							<p>{{ event.venueId }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
  </div>
</template>

<style scoped>

.sidebar-calendar-container{
    display: flex;
    flex-direction: row;
    gap: 64px;
		padding-right: 48px;
		margin-bottom: 128px;
}

.event-card{
	position: absolute;
	display: flex;
	flex-direction: column;
	gap: 8px;
	background-color: var(--mainBlack);
	border: 1px solid var(--gray100);
	padding: 12px;
	border-radius: 16px;
	width: clamp(100px, calc(22vw - 32px), 450px);
	max-width: 450px;
	
}

.days-blocks-container{
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
}

.calendar-block{
		border: 1px solid var(--gray500);
		height: 64px;
		height: 100%;
}

.hour{
	font-family: Aspekta300;
	font-size: 1rem;
	color: var(--gray100);
}

.hours-container{
	display: flex;
	flex-direction: column;
	gap: 64px;
	margin-top: 52px;
}

.days-hours-container{
	display: flex;
	flex-direction: row;
	width: 100%;
	gap: 24px;
}

.days-container{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
}

.blocks-container{
	position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(10, 1fr);
  width: 100%;
	height: 100%;
}

.day{
    font-family: Aspekta300;
    font-size: 1rem;
		border-bottom: 1px solid var(--gray500);
		border-right: 1px solid var(--gray500);
		padding: 16px;
		text-align: center;
}

.first-day{
		border-left: 1px solid var(--gray500);
}

</style>