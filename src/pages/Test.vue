<template>
  <div class="content">
    <div class="row">
      <div class="col-md-12">
        <card>
          <template slot="header">
            <h5 class="card-category">White Table Heading</h5>
            <h3 class="card-title">Created using Poppins Font Family</h3>
          </template>
          <div class="typography-line text-left mt-5">
            <h1><span>Header 1</span>The Life of White Dashboard</h1>
          </div>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { Card } from "@/components/index";

//axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

export default {
  components: {
    Card
  },
  mounted() {
    //axios.defaults.headers.common["Access-Control-Allow-Origin"] = '*';

    this.$http
      .get("http://localhost:3000")
      .then(response => {
        console.log("ça marche !");
        console.log(response);
        //this.wholeResponse = response.data.Search;
        //this.loading = false;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style></style>
