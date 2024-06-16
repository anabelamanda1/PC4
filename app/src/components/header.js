export default {
    template: `
        <header>
            <div class="logo">Enfrantamiento Pokemon</div>
            <div class="right">
                <button @click="nuevoCombate" :disabled="!isCombateHabilitado">Nuevo Combate</button>
            </div>
        </header>
    `,
    props: {
        isCombateHabilitado: {
            type: Boolean,
            required: true
        },
        entrenadoresSeleccionados: {
            type: Array,
            required: true
        }
    },
    methods: {
        nuevoCombate() {
            this.$emit('nuevoCombate');
        }
    },
    name: 'Header'
}
