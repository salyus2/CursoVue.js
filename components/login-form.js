Vue.component('login-form', {
    data() {
        return{
            logged: false,
            user: {
                email: '',
                password: ''
            }
        }
    },

    methods: {
        login () {
            this.logged = this.user.email === 'test@m.com' && this.user.password === "1234";
        }
    },

    template: 
`
    <div>
        <h2>Formulario de Login</h2>
        <p v-show="logged" style="background: green; color:#fff;">
            Has iniciado sesion con los datos: {{ user }}
        </p>

        <form @submit.prevent="login">
            <input autocomplete="off" type="email" v-model="user.email" name="email"/>
            <input autocomplete="off" type="password" v-model="user.password" name="password"/>
            <input type="submit" value="Iniciar Sesión"/>


        </form>
    </div>
`


})