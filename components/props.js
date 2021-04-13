Vue.component('props', {
    props: ['name', 'surname', 'age'],

    /*name: {
        type: String,
        required: true
    },
        surname: {
            type: String,
            required: true
        }
        age: {
            type: Number,
            required, true
        }
    */
    template: `
    <div>
        <h2>Props con Vuejs 2</h2>
        <p>{{ name }} {{ surname }}, Edad: {{ age }}</p>
    </div>
`
});