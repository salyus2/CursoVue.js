Vue.component('child-methods', {
    data(){
        return{
            cmpName: 'Child Data CMP'
        }
    },

    methods: {
        showCmpName (){
            console.log("Llamada al método showCmpName",this.cmpName)
        }
    },


    template: `
    <div>
        <h2>Acceso a métodos el cmp hijo desde el cmp padre</h2>        
    </div>
    `

    
})