var vue_intro = new Vue({
  el : "#intro",
  data : {
    addname : '',
    names : ['To','Hell','With','You']
  },

  methods : {
  add : function() {
      this.names.push(this.addname);
      this.addname='';
    }
  },
});
