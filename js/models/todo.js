var TodoModel = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  },

  // Toggle the `completed` state of this todo item.
  toggle: function () {
    console.log('invoked toggle function');
    console.log("completed value before toggle: " + this.get('completed'));
    this.set({completed: !this.get('completed')});
    console.log("completed value after toggle: " + this.get('completed'));
    // if (this.get('completed') === true) {
    //   this.style.setProperty("text-decoration", "line-through");
    }
});
