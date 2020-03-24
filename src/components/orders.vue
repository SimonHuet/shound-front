<template>
  <div class="orders">
    <div class="container">
      <h1>Orders</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product name</th>
            <th scope="col">Description</th>
            <th scope="col">Date</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>

          </tr>
        </thead>
        <tbody>
          <tr v-for="(data,index) in orders" :key="index">
            <th scope="row">{{data.id}}</th>
            <td>{{data.name}}</td>
            <td>{{data.description}}</td>
            <td>{{data.date}}</td>
            <td>{{data.quantity}}</td>
            <td>{{data.price}}</td>
          </tr>
        </tbody>
      </table>
      <!--  tu peux utiliser les router-link -->
      <button @click="goToHome()">
        Retour
      </button>
    </div>
  </div>
</template>
<script>

// tu n'es pas censé avoir de variable/constantes en dehors de ton objet vue en fait.
// Ici il n'y a que des imports
import definitions from '../definitions/global'
export default {
  name: 'orders',
  data () {
    return {
      proId: this.$route.params.Pid,
      title: "orders",
      // pourquoi ne pas directement l'alimenter avec ton contenu de tableData
      orders: [
        {
          id: null,
          name: null,
          description: null,
          date: null,
          quantity: null,
          price: null
        }

      ]
    }
  },
  mounted () {

    Promise.all([
      this.$http.get(definitions.url + `/user-products/${this.proId}/product`),
      this.$http.get(definitions.url + `/user-products/${this.proId}`)
    ]).then(responseArray => {
      let order = { ...responseArray[0], ...responseArray[1] };
      this.orders.push(order)

    }).catch(error => {
      console.log(error);
    });
  },
  methods: {
    goToHome () {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
