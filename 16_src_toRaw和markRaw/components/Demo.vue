<template>
	<h4>当前求和为：{{sum}}</h4>
	<button @click="sum++">点我++</button>
	<hr>
	<h2>姓名：{{person.name}}</h2>
	<h2>年龄：{{person.age}}</h2>
	<h2>薪资：{{person.job.j1.salary}}K</h2>
	<h3 v-show="person.car">座驾信息：{{person.car}}</h3>
	<button @click="person.name+='~'">修改姓名</button>
	<button @click="person.age++">增长年龄</button>
	<button @click="person.job.j1.salary++">涨薪</button>
	<button @click="showRawPerson">输出最原始的person</button>
	<button @click="addCar">给人添加一台车</button>
	<button @click="person.car.name += '!'">换车名</button>
	<button @click="person.car.price++">换价格</button>
</template>

<script>
	import {ref,reactive,toRaw,markRaw} from 'vue'
	export default {
		name: 'DemoIndex',
		setup(){
			//数据
			let sum = ref(0)
			let person = reactive({
				name:'张三',
				age:18,
				job:{
					j1:{
						salary:20
					}
				}
			})


			function showRawPerson(){
				const p = toRaw(person)
				console.log(p)
			}
			function addCar() {
				let car = {
					name: '奔驰',
					price: 40
				}
				person.car = markRaw(car)
			}

			//返回一个对象（常用）
			return {
				sum,
				person,
				// ...toRefs(person),
				showRawPerson,
				addCar
			}
		}
	}
</script>

