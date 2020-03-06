<template>
	<div class="details">
		<div class="container">
			<h1>Details</h1>
			  <table class="table">
				<thead>
					<tr>
					<th scope="col">#</th>
					<th scope="col">Nom</th>
					<th scope="col">Ville</th>
					<th scope="col">Total</th>
					</tr>
				</thead>
				<tbody>
					<tr>
					<th scope="row">{{user.id}}</th>
					<td>{{user.name}}</td>
					<td>{{user.city}}</td>
					<td>{{user.total}}</td>
					</tr>
				</tbody>
			 </table>
		</div>
	</div>
</template>
<script>

	let detailsData = [];

	export default{ 
		name:'details',
		data(){
			return{
				proId:this.$route.params.Pid,
				title:"details",
				user:[...detailsData]
			}
		},
		mounted() {
			this.$http
			.get("http://localhost:3000/customers/details", {
				params: {
					id: this.proId
				}
			})
			.then(response => {
				this.user = response.data[0];
				console.log(this.user);
			})
			.catch(error => {
				console.log(error);
			});		
  		},
	}
</script>