var itn = new Vue({
  el : '#intro',
    data : {
      isLoading : false
    },
    methods : {
      toggleClass(){
        if (this.isLoading) {
          this.isLoading = false;  
        } else {
          this.isLoading = true;
        }

      }
    }
});
