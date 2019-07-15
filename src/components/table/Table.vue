<template>
	<div >
		<table :class="classes">
			<thead>
				<tr class="table-head">
					<th v-for="item in columns" :key="item.key">{{ item.title }}</th>
				</tr>
			</thead>
			<tbody>
				<tr class="table-body" v-for="(item, i) in data" :key="i">
					<td v-for="(value, key, j) in item" :key="j">{{value}}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
const prefix = 'zov-table'
export default {
	name: prefix,
	props: {
		columns: {
			type: Array,
			default: () => []
		},
		data: {
			type: Array,
			default: () => []
		}
	},
	data() {
		return {
            
        }
	},
	computed: {
		classes() {
			return [
				prefix
			]
		}
	}
}
</script>

<style lang="scss">
	.zov-table {
		border-collapse: collapse;
		border-spacing: 0;
		margin: 20px 0;
		width: 100%;
		border: 1px solid #e9e9e9;
		thead {
			background-color: #F7F7F7;
		}
		th,
		td {
			border: 1px solid #e9e9e9;
			vertical-align: middle;
			height: 36px;
			text-align: center;
		}
	}
</style>
