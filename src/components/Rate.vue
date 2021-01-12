<template>
  <v-rating
    v-model="rating"
    background-color="purple lighten-3"
    color="orange"
    size="64"
  ></v-rating>
</template>

<script>
export default {
  data: () => ({
    rating: 2,
  }),
};
</script>
