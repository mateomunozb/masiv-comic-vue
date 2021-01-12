<template>
  <div class="description">
    <p>{{ dataComic.alt }}</p>
    <div class="refresh">
      <a href="/">
        <h1>REFRESH!</h1>
      </a>
      <a
        href="https://xkcd.com/"
        target="
            _blank"
        rel="noreferrer"
      >
        <span>Or go to xkcd</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Description',
  props: ['dataComic'],
};
</script>

<style scoped>
.description {
  display: flex;
  align-items: center;
  background-color: black;
  color: white;
}

.description p {
  padding: 0.5em;
  font-size: 1.3em;
}

.refresh {
  background-color: #daa520;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='16' viewBox='0 0 20 16'%3E%3Cg fill='%23da4120' fill-opacity='0.46'%3E%3Cpath fill-rule='evenodd' d='M0 .04C2.6.22 4.99 1.1 7 2.5A13.94 13.94 0 0 1 15 0h4c.34 0 .67.01 1 .04v2A12 12 0 0 0 7.17 12h5.12A7 7 0 0 1 20 7.07V14a5 5 0 0 0-3-4.58A5 5 0 0 0 14 14H0V7.07c.86.12 1.67.4 2.4.81.75-1.52 1.76-2.9 2.98-4.05C3.79 2.83 1.96 2.2 0 2.04v-2z'/%3E%3C/g%3E%3C/svg%3E");
  background-size: cover;
  margin: 0.5em;
  padding: 0.3em;
  text-align: center;
  width: 300px;
}

.refresh h1 {
  font-family: 'Gravitas One', cursive;
  color: #dc143c;
  text-shadow: 3px 0 0 #000, -3px 0 0 #000, 0 3px 0 #000, 0 -3px 0 #000, 2px 2px #000,
    -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000;
}

.refresh h1:hover {
  transform: scale(1.2);
}

.refresh span {
  color: #000;
  font-size: 1.5em;
}

@media (max-width: 575.98px) {
  .description {
    flex-direction: column;
  }
  .refresh {
    width: 100%;
  }
}
</style>
