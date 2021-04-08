Vue.component('vmodel-checkboxes', {
    data(){
        return{
            frameworks: []
        }
    },
    template: `
    <div>
    <h2> vmodel con arrays</h2>
    <input type="checkbox" id="vuejs2" value="Vuejs 2" v-model="frameworks" />
    <label for="vuejs2">Vuejs 2</label>
    <input type="checkbox" id="reactsjs" value="Reactjs" v-model="frameworks" />
    <label for="reactjs">Reactjs</label>
    <input type="checkbox" id="angular" value="Angular" v-model="frameworks" />
    <label for="angular">Angular</label>
    <p>Framworks seleccionados: {{ frameworks }} </p>
    </div>`
})