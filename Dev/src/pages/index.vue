<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form>
      <input type="text" name="username" v-model="userName"> <br>
      <input type="text" name="age" v-model="age"> <br>
      <a href="javascript:;" @click="addUser">提交</a>
    </form>
  </div>
</template>

<script>
import TFetch from 'tfetch'
const http = new TFetch({
  baseUrl: './api/',
  conf: {
    credentials: 'inclued'
  }
})
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      userName: '',
      age: ''
    }
  },
  methods: {
    addUser() {
      http.post('/api/user/search', {},{timeout:1000})
      .then((res) => {
        console.log(res);
      }).catch(e => {
        console.log(e,'error')
      })
    }
  }
}
</script>