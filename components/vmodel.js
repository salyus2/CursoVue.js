Vue.component('vmodel', {
    data(){
        return{
            framework: 'VueJs 2'
        }
    },

    template:`

    <div>
        <h2>Trabajando con Vmodel</h2>
        <input v-model="framework" v-focus />
        <p>El framework escogido es {{ framework }} </p>
    </div>
`
});