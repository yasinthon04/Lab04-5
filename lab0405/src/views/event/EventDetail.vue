<template>
  <h1>Name:{{ passenger.first_name }} {{ passenger.last_name }}</h1>
  <p>
    address: {{ passenger.ip_address }} on {{ passenger.Source }} @
    {{ passenger.Destination }}
  </p>
  <p>{{ passenger.travelDate }}</p>
</template>
<script>
export default {
  props: ["passenger"],
};
</script>
