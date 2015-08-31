Template.splash.helpers({
	fwdIfLoggedIn: function() {
		if (Meteor.userId() != null) {
			Router.go('home');
		}
	}
})