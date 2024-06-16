export default {
    template: `
        <div class="entrenador">
            <h2>{{ entrenador.entrenador }}</h2>
            <img :src="entrenador.imagen" :alt="entrenador.entrenador" class="entrenador-foto">
            <button @click="verPokemons">Ver Pokémons</button>
            <ul v-if="mostrarPokemons">
                <li v-for="pokemon in entrenador.pokemons" :key="pokemon.nombre">
                    <img :src="pokemon.foto" :alt="pokemon.nombre" class="pokemon-foto">
                    <span>{{ pokemon.nombre }}</span>
                </li>
            </ul>
            <button @click="seleccionar" :disabled="entrenador.seleccionadoParaCombate">Seleccionar para combate</button>
        </div>
    `,
    props: {
        entrenador: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            mostrarPokemons: false
        };
    },
    methods: {
        verPokemons() {
            this.mostrarPokemons = !this.mostrarPokemons;
        },
        seleccionar() {
            this.$emit('seleccionarEntrenador', this.entrenador);
        }
    },
    name: 'Entrenador'
}
