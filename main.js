var App = Vue.component('App', {
    template: `
     <div class="container">   
        <h1> {{titolo}} </h1>
        <p> {{ 5 + 3 }} </p>
        <p>{{ user.firstname}} {{ user.secondname}}</p>
        <p>{{ user.getFullName() }}</p>
    </div>
    `,
    data() {
        return {
            titolo: "salve a tutti",
            user: {
                firstname: "Mario",
                secondname: "rossi",
                getFullName: function() {return this.firstname + " " + this.secondname; }  
}
        };
    }
});

new Vue ({
    el: "#app"
});

