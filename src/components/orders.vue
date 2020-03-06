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
						<th scope="col">Total</th>

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
						<td>{{data.price*data.quantity}}</td>
					</tr>
				</tbody>
			 </table>
			 <button @click="goToHome()">
				 Retour
			 </button>
		</div>
	</div>
</template>
<script>

	let orders = [];

	export default{ 
		name:'orders',
		data(){
			return{
				proId:this.$route.params.Pid,
				title:"orders",
				orders: [...orders]
			}
		},
		mounted() {
			this.$http
			.get("http://localhost:3000/customers/orders", {
				params: {
					id: this.proId
				}
			})
			.then(response => {
				this.orders = response.data;
				console.log(this.orders);
			})
			.catch(error => {
				console.log(error);
			});		
		  },
		  methods:{
			  goToHome() {
    			this.$router.push({name:'home'})
			  }
		  }
	}
</script>