<template>
  <div class="orders">
    <div class="container">
      <h1>Orders</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Product name</th>
            <th scope="col">Description</th>
            <th scope="col">Date</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data,index) in orders" :key="index">
            <td>{{data.name}}</td>
            <td>{{data.description}}</td>
            <td>{{data.date}}</td>
            <td>{{data.quantity}}</td>
            <td>{{data.price}}</td>
            <td>{{data.total}}</td>
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
import global from '../definitions/global.js'
import multiplicate from '../functions/multiplicate.js'
export default {
  data () {
    return {
      proId: this.$route.params.Pid,
      title: "orders",
      orders: []
    }
  },
  mounted () {
    this.$http
      .get(url + `/users/${this.proId}/user-products`)
      .then(response => {
          this.orders = response.data;
          this.orders.forEach(
          order => this.$http
          .get(url + `/products/${order.productId}`)
          .then(response => {
            let productInfo = response.data;

            let total = multiplicate(productInfo.price, order.quantity);

            order.date = order.date.substring(0, 10);
            let product = { ...order, ...productInfo, total };
            this.orders.push(product);
            this.orders.splice(0, 1);
          })
        )
        })
      .catch(error => {
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
