export default {
    template: `
        <header>
            <div class="logo">Enfrentamiento Pokemon</div>
            <div class="right">
                <button @click="nuevoCombate" :disabled="!isCombateHabilitado">Nuevo Combate</button>
                <button @click="nuevaSeleccion">Nueva Selección</button>
            </div>
        </header>
    `,
    props: {
        isCombateHabilitado: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        nuevoCombate() {
            this.$emit('nuevoCombate');
        },
        nuevaSeleccion() {
            this.$emit('nuevaSeleccion');
        }
    },
    computed: {
        isNuevaSeleccionDisabled() {
            return this.entrenadoresSeleccionados.length < 2;
        }
    }
}
