Bustle.ClinkController = Ember.Controller.extend({
  bigPicture: false,
  actions: {
    showLargePicture: function() {
      this.set('bigPicture', true);
    }
  }
});
