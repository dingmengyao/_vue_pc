<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data () {
    return {
      msg: "Welcome to Your Vue.js App",
      opts: {
        start: 0,
        dir: 'v',
        duration: 500,
        beforeChange: function (prev, next) {
        },
        afterChange: function (prev, next) {
        }
      }
    }
  },
  mounted () {
    this.getInfo();
  },
  methods: {
    getInfo () {
      var data = {
        industryDomain: "通信与信息系统"
      };
      this.$http.post(this.URLS.searchMainPsnl, data).then(res => {
        // console.log(res);
      });
    }
  }
};
</script>

<style scoped>
</style>
