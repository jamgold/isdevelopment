UI.registerHelper('Meteor', function(){
	return {
		isDevelopment: function() {
			return Meteor.isDevelopment;
		}
	}
});