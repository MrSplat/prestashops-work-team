var App = Vue.component("testata",{
  template:`
  <div>
      <img src="tony.svg" height="150px" style="margin: 50px;" >
      <input type="url" id="url-diagnosi" placeholder="www.ecommerce.it"  style="margin: 50px; height: 50px;width: 450px;">
      <br>
      <div class="container">
        <diagnostica-list></diagnostica-list>
      </div>
  </div>
  ` ,
  data() {
    return {};
  }
});
Vue.component("diagnostica-list", {
  template:`
  <div>
    <h2>SCHEDE DIAGNOSTICA</h2>

    <div>
        <diagnostica-box v-for="tab in tab" :key="tab.id" v-bind:item="tab"></diagnostica-box>
    </div>
</div>
  `,
  computed: {
    descr(){
      return
      
    }
  }
  ,

  data() {
    return {
      tab:[
        {
          id:1,
          tipo:"tecnico",
          descrizione: this.descr,
          rating: "***"
        },
        {
          id:2,
          tipo:"rendimento",
          descrizione: "descrizione breve del dato",
          rating: "**"
        },
        {
          id:3,
          tipo:"prestazioni",
          descrizione: "descrizione breve del dato",
          rating: "*****"
        },
        {
          id:4,
          tipo:"allert",
          descrizione: "descrizione breve del dato",
          rating: "*********"
        }
      ]

    }


  }
});
 Vue.component("diagnostica-box",{
   template:`
   <div class="card card-bg" style="width: 240px; float:left;margin: 16px;">
      <div class="card-body">
         <h4 class="card-title">{{ item.tipo }}</h4>
         <p class="card-text">{{ item.descrizione}}</p>
         <p class="card-text text-righ"><strong>RATIG: {{item.rating}}</strong></p>
         <a href="#" class="btn btn-primary">dettagli</a>
      </div>
   </div>
`,
   props:['item']
 })
new Vue({
  el: '#app',
 
})