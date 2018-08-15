// The DOM element for a todo item...
TodoView = Backbone.View.extend({
  //... is a list tag.
  tagName:  'li',

  // Cache the template function for a single item.
  template: Handlebars.compile($('#item-template').html()),

  events: {
    'click .toggle': 'toggleCompleted',
    'click .destroy': 'clear',
  },

  initialize: function () {
  	this.listenTo(this.model, 'destroy', this.remove);
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.toggleClass('completed', this.model.get('completed'));

    return this;
  },

  toggleCompleted: function () {
    this.model.toggle();
    var title = this.model.get('title');
    console.log(title);
    title = title.strike();
    console.log(title);
    this.model.set('title', title);
    console.log(this.model.get('title'));
  },

  clear: function () {
    this.model.destroy();
  }

});
