var intr = new Vue({
  el : '#intro',
  data : {
    tasks : [
      {description : 'Eat', completed : true},
      {description : 'Sleep', completed : true},
      {description : 'Run', completed : false},
      {description : 'Repeat', completed : false},
    ]
  },

  computed : {
    incompleteTasks(){
      return this.tasks.filter(task => task.completed);
    }
  }
});
