new Vue({
	el:'#app-container',
	data:{
		newTask:'',
		tasks:[]
	},
	methods:{
		addTask:function(e){			
			e.preventDefault();
			this.tasks.push({
				body:this.newTask,
				completed:false
			});
			this.newTask='';
		},
		deleteTask:function(task){
			this.tasks.$remove(task);
		}
	}
});