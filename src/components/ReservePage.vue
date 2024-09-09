<template>
  <form @submit.prevent="submitAppointment">
    <div>
      <label for="date">Дата:</label>
      <input type="date" id="date" v-model="appointment.date" required/>
    </div>

    <div>
      <label for="time">Время:</label>
      <input type="time" id="time" v-model="appointment.time" required/>
    </div>

    <button type="submit">Записаться</button>
  </form>
</template>

<script>
export default {
  name: "ReservePage",
  data() {
    return {
      appointment: {
        date: "",
        time: ""
      }
    };
  },
  methods: {
    submitAppointment() {
      // Логика для обработки записи на процедуру
      console.log("Дата:", this.appointment.date);
      console.log("Время:", this.appointment.time);
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
}

input[type="date"],
input[type="time"],
select {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px 20px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}
</style>