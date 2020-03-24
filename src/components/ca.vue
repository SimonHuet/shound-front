<template>
  <div class="ca">
    <h1>{{title}}</h1>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h3>oui</h3>
          </div>
          <div class="card-body">
            <!-- {{ ca }} -->
            14 000 000€
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'ca',
  data () {
    return {
      title: "Chiffre d'affaire",
      ca: 0
    }
  },
  mounted () {
    this.$http
      .get("http://localhost:3000/ca")
      .then(response => {
        // La propriété dans le data n'existe pas
        this.ca = response.data;
        console.log(response.data)
      })
      .catch(error => {
        console.log(error);
      });

  }
}
</script>

<style scoped>
</style>
