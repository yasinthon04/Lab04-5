<template>
  <h1>Name:{{ passenger.first_name }} {{ passenger.last_name }}</h1>
  <p>
    address: {{ passenger.ip_address }} on {{ passenger.Source }} @
    {{ passenger.Destination }}
  </p>
  <p>{{ passenger.travelDate }}</p>
  <button @click="update">Update</button>
</template>
<script>
export default {
  props: ["passenger"],
  inject: ["GStore"],
  methods: {
    update() {
      this.GStore.flashMessage = "You are successfully update details ";
      setTimeout(() => {
        //After 3 seconds remove it
        this.GStore.flashMessage = "";
      }, 3000);
    },
  },
};
</script>
