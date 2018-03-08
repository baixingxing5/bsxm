<template>
<div class="comapp">
	<button @click="getJson()">点击获取数据</button>
</div>
</template>

<style scoped>
button{
	border:none;
	padding:5px 10px;
}
</style>


<script>
import TFetch from 'tfetch'
const http = new TFetch({
	baseUrl: './api/',
	conf: {
		credentials: 'inclued'
	}
})
export default {
name:'comapp',
data () {
	return {
		
	}
},
methods: {
	getJson(){
		http.post('/api/user/search',{},{timeout:1000})
		.then((res) => {
			console.log(res)
		}).catch(e => {
			console.log(e,'error')
		})
	}
}
}
</script>
