import Header from './components/header.js';
import Entrenador from './components/entrenador.js';
import Servicios from './services/api.js';

var app = new Vue({
    el: '#app',
    data: {
        entrenadores: [],
        entrenadoresSeleccionados: [],
        isEntrenadores: true
    },
    components: {
        Entrenador,
        Header
    },
    computed: {
        isCombateHabilitado() {
            return this.entrenadoresSeleccionados.length === 2;
        }
    },
    methods: {
        initMenssage: function () {
            console.log("Bienvenidos a la aplicación de entrenadores Pokémon");
        },
        async fetchData() {
            const servicio = new Servicios();
            servicio.fetchData((error, response) => {
                if (error) {
                    console.error('Error al obtener entrenadores:', error);
                } else {
                    this.entrenadores = response;
                    this.isEntrenadores = (this.entrenadores.length > 0);
                }
            });
        },
        seleccionarEntrenador: function(entrenador) {
            if (!this.entrenadoresSeleccionados.includes(entrenador)) {
                this.entrenadoresSeleccionados.push(entrenador);
            }
            entrenador.seleccionadoParaCombate = true; 
        },
        
        nuevoCombate: function() {
            if (this.isCombateHabilitado) {
                alert(`Se realizará un nuevo combate entre ${this.entrenadoresSeleccionados[0].entrenador} vs ${this.entrenadoresSeleccionados[1].entrenador}`);
            }
        },
        nuevaSeleccion: function() {
            location.reload();
        }
    },
    mounted() {
        this.fetchData();       
        this.initMenssage();
    },
    template: `
        <div>
            <Header :isCombateHabilitado="isCombateHabilitado" :entrenadoresSeleccionados="entrenadoresSeleccionados" @nuevoCombate="nuevoCombate" @nuevaSeleccion="nuevaSeleccion" />
            <div v-if="isEntrenadores" class="entrenadores-list">
                <Entrenador v-for="entrenador in entrenadores" :key="entrenador.entrenador" :entrenador="entrenador" @seleccionarEntrenador="seleccionarEntrenador" />
            </div>
            <p v-else>No hay entrenadores disponibles.</p>
        </div>
    `
});
