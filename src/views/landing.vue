<script setup>
import Nav from "../components/Nav.vue";
import Mission from "../components/Mission.vue";
</script>

<template>
  <Nav />
  <div class="wrapper">
    <Mission />
  </div>
</template>

<script>
export default {
  components: {
    Nav,
    Mission,
  },
};
</script>