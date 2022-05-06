<template>
    <Navbar />
    <router-view />
</template>

<script>
import Navbar from '@/modules/shared/components/Navbar.vue';

// Para poder cargar el componente en modo lazy load fuera del router
import { defineAsyncComponent } from 'vue';

export default {
    name: 'App',
    components: {
        Navbar: defineAsyncComponent(() => import('@/modules/shared/components/Navbar.vue')),
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
