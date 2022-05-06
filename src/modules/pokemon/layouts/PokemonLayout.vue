<template>
  <div class="pokemon-layout">
    <h1>Pokemon Layout</h1>

    <!-- // Pokemon Layout puede tener rutas hijas y se hace con este router-view y la propiedad children en el router -->
    <router-view />
  </div>
</template>


<style scoped>
.pokemon-layout {
  background-color: #b9b9b9;
}
</style>