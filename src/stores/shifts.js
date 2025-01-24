import { defineStore } from 'pinia';


export const useShiftsStore = defineStore('shifts', {
  state: () => ({
    shifts: [
      {
        job: "Coordinating artists",
        date: "Fri, 24th of January",
        startTime: "20:00",
        endTime: "04:00",
        location: "Berliner Str. 45, 10115 Berlin",
        coins: 0
      },
      {
        job: "Providing assistance",
        date: "Sat, 24th of January",
        startTime: "19:00",
        endTime: "03:00",
        location: "Alexanderplatz 12, 10178 Berlin",
        coins: 0
      },
      {
        job: "Managing security",
        date: "Sat, 24th of January",
        startTime: "22:00",
        endTime: "06:00",
        location: "Prinzessinnenstraße 7, 10969 Berlin",
        coins: 0
      },
      {
        job: "Supporting performers",
        date: "Fri, 24th of January",
        startTime: "21:00",
        endTime: "05:00",
        location: "Mitte, Berlin, Germany",
        coins: 0
      },
      {
        job: "Helping with logistics",
        date: "Sun, 24th of January",
        startTime: "18:00",
        endTime: "02:00",
        location: "Humboldtstr. 9, 10117 Berlin",
        coins: 0
      }
      
    ],
    selectedShift: null,
  }),

  actions: {
    addShift(job, date, startTime, endTime, location) {
      const shiftExists = this.shifts.some(
        shift => shift.job === job
      );
    
      if (shiftExists) {
        throw new Error('Este trabalho já existe.');
      }
    
      const newShift = {
        job: job,
        date: date,
        startTime: startTime,
        endTime: endTime,
        location: location,
        coins: 0
      };
    
      this.shifts.push(newShift);
    },

    removeShift(job) {
      const index = this.shifts.findIndex(
        shift => shift.job === job
      );

      if (index !== -1) {
        this.shifts.splice(index, 1);
      }
    },

    updateShift(job, date, startTime, endTime) { 
      const index = this.shifts.findIndex(
        shift => shift.job === job
      );
    
      if (index !== -1) {
        this.shifts[index] = {
          ...this.shifts[index],
          date: date,
          startTime: startTime,
          endTime: endTime
        };
      }
    }
  },

  persist: {
    enabled: true,
    strategies: [
      {
        key: 'shifts',
        storage: localStorage,
      },
    ],
  },
});
