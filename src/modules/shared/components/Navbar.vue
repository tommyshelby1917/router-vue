<template>
  <div class="navbar">
    <!-- Cuando trabajamos con Vue Router en los link tenemos que usar el siguiente componente: router-link -->
    <!-- <router-link :to="{ name: 'home' }">Pokemon list</router-link> -->
    <!-- <router-link :to="{ name: 'pokemon-id', params: { id: 1 } }">Pokemon ID</router-link> -->

    <CustomLink
      v-for="link in links"
      :key="link.to"
      :link="link"
    />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  data() {
    return {
      links: [
        { to: "pokemon-home", name: "Pokemons" },
        { to: "pokemon-id", name: "Por ID", id: 151 },
        { to: "pokemon-about", name: "About" },

        { to: "dbz-characters", name: "Personajes" },
        { to: "dbz-about", name: "DBZ-About" },

        { to: "https://google.com", name: "Gooogle" },
      ],
    };
  },
  components: {
    CustomLink: defineAsyncComponent(() => import("./CustomLink.vue")),
  },
};
</script>

<style scoped>
.navbar {
  margin: 50px;
}

a {
  padding: 10px;
  color: green;
  text-decoration: none;
  font-weight: bold;
}

/* .router-link-exact-active {
  color: red;
  border-bottom: 1px solid blue;
} */
</style>
