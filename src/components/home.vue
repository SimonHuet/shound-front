<template>
  <div class="home">
    <h1> Liste des utilisateurs</h1>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">Nom</th>
          <th scope="col">Prénom</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        <!-- Si tu utilise plusieurs fois un index (1,2,3) en key avec plusieurs v-for dans la même page,
    tu va avoir des conflit de clé. Essaye de concatété ton index avec une string ('customers' + index par ex )
     -->
        <tr v-for="(data,index) in customers" :key="'customers' + index" @click="goTodetail(data.id)">
          <td>{{data.firstName}}</td>
          <td>{{data.lastName}}</td>
          <td>{{data.email}}</td>
        </tr>

      </tbody>
    </table>

  </div>
</template>

<script>

import definitions from '../definitions/global'

export default {
  name: 'home',
  data () {
    return {
      // pourquoi pas en dur dans le HTML ?
      // intérêt d'alimenter un tableau vide avec un tableau vide ?
      customers: []
    }
  },
  mounted () {
    this.$http
      // Var d'env, ou alors constantes global que tu mets dans un fichier que tu importe
      .get(definitions.url + "/users")
      .then(response => {
        this.customers = response.data;
        console.log(response.data)
      })
      .catch(error => {
        console.log(error);
      });

  },
  methods: {
    goTodetail (id) {
      this.$router.push({ name: 'orders', params: { Pid: id } })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row img {
  max-height: 15em;
  width: 100%;
}
.row h3 {
  cursor: pointer;
}

.table {
  cursor: pointer;
}
</style>
