<template>
  <div>
    <input type="text" v-model="name" placeholder="Your name to yell"></input>
    <button @click.prevent="doYell">Yell my name</button>
  </div>
</template>

<style scoped>
a {
  color: #aa9080;
  background-color: #2020aa;
}
</style>

<script>
export default {
  data() {
    return {
      name: ""
    };
  },
  methods: {
    doYell() {
      var name = this.name.toUpperCase();
      alert(name);
    }
  }
};
</script>
