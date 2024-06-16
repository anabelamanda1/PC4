export default {
    props: ['entrenador', 'isCombateHabilitado'],
    data() {
        return {
            mostrarPokemones: false,
            seleccionadoParaCombate: false 
        };
    },
    methods: {
        verPokemones() {
            this.mostrarPokemones = !this.mostrarPokemones;
        },
        seleccionarParaCombate() {
            this.$emit('seleccionarEntrenador', this.entrenador);
            this.seleccionadoParaCombate = true; 
        }
    },
    template: `
        <div class="entrenador">
            <img :src="entrenador.imagen" alt="Entrenador" class="entrenador-foto">
            <h2>{{ entrenador.entrenador }}</h2>
            <div class="botones">
                <button @click="verPokemones">Ver Pokemones</button>
                <button 
                    :disabled="seleccionadoParaCombate || isCombateHabilitado" 
                    @click="seleccionarParaCombate"
                >
                    Seleccionar para combate
                </button>
            </div>
            <ul v-if="mostrarPokemones">
                <li v-for="pokemon in entrenador.pokemons" :key="pokemon.nombre">
                    <img :src="pokemon.foto" alt="Pokemon" class="pokemon-foto">
                    <span class="pokemon-nombre">{{ pokemon.nombre }}</span>
                </li>
            </ul>
        </div>
    `
};
