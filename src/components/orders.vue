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
			 <button @click="goToHome()">
				 Retour
			 </button>
		</div>
	</div>
</template>
<script>

	let tableData = [
		{
			id: null,
			name: null,
			description: null,
			date: null,
			quantity: null,
			price: null
		}

	];

	export default{ 
		name:'orders',
		data(){
			return{
				proId:this.$route.params.Pid,
				title:"orders",
				orders: [...tableData]
			}
		},
		mounted() {
			this.$http
			.get(`http://feature-ci-shound-api.caprover.eddycheval.codes:8080/user-products/${this.proId}/product`)
			.then(response => {
				let order = response.data;
				this.orders[0].id = order.id;
				this.orders[0].description = order.description;
				this.orders[0].price = order.price;
				
			}),
			this.$http
			.get(`http://feature-ci-shound-api.caprover.eddycheval.codes:8080/user-products/${this.proId}`)
			.then(response => {
				let userproduct = response.data;
				this.orders[0].quantity = userproduct.quantity;
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