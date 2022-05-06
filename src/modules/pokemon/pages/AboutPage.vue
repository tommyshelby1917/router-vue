<template>
    <h1>About Page Pokemon</h1>
    <hr />
    <h2 v-show="modified">Modificado!</h2>
    <h2>{{ name }}</h2>
    <button @click="onChangeName">Cambiar nombre</button>
</template>

<script>
export default {
    data() {
        return {
            name: 'Fernando',
            modified: false,
        };
    },
    methods: {
        onChangeName() {
            this.name = 'Melissa';
        },
    },
    beforeCreate() {
        console.log('beforecreate');
    },

    created() {
        console.log('created');
    },
    beforeMount() {
        console.log('beforeMount');
    },
    mounted() {
        console.log('mounted');
    },
    beforeUpdate() {
        console.log('before updated!');

        this.modified = true;
    },
    updated() {
        console.log('updated!');
    },
    beforeUnmount() {
        console.log('beforeUnmount');
    },
    unmounted() {
        console.log('unmounted');
    },
    errorCaptured() {
        console.log('errorCaptured');
    },
};
</script>
