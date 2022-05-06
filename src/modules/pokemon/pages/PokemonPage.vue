<template>
    <h1>Pokemon || #{{ id }}</h1>
    <div v-if="pokemon">
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            // id: null,
            pokemon: null,
        };
    },
    created() {
        this.getPokemon();
    },

    methods: {
        async getPokemon() {
            try {
                const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`).then(
                    (response) => response.json()
                );
                this.pokemon = pokemon;
                console.log(this.pokemon);
            } catch (error) {
                this.$router.push('/');
                console.log('This Pokemon doesnt exists');
            }
        },
    },
    watch: {
        id() {
            this.getPokemon();
        },
    },
};
</script>
