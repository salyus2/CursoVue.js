Vue.component('vmodel', {
    data(){
        return{
            framework: 'VueJs 2'
        }
    },

    template:`

    <div>
        <h2>Trabajando con Vmodel</h2>
        <input v-model="framework" />
        <p>El framework escogido es {{ framework }} </p>
    </div>
`
});