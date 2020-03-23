<template>
  <div class="home">
    <h1>{{title}}</h1>

    <table class="table">
  <thead>
    <tr>
      <th scope="col">Nom</th>
      <th scope="col">Prénom</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(data,index) in customers" :key="index"  @click="goTodetail(data.id)">
      <td>{{data.firstName}}</td>
      <td>{{data.lastName}}</td>
      <td>{{data.email}}</td>
    </tr>
  </tbody>
</table>

  </div>
</template>

<script>

const tableData = [];

export default {
  name: 'home',
  data () {
    return {
      title: 'Liste des utilisateurs',
      customers: [...tableData]
    }
  },
  mounted() {
    this.$http
      .get("http://feature-ci-shound-api.caprover.eddycheval.codes:8080/users")
      .then(response => {
        this.customers = response.data;
        console.log(response.data)
      })
      .catch(error => {
        console.log(error);
      });
		
  },
  methods:{
  goTodetail(id) {
    this.$router.push({name:'orders',params:{Pid:id}})
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row img{
  max-height: 15em;
  width: 100%;

}
.row h3{
  cursor:pointer;
}

.table {
  cursor:pointer;
}
</style>
