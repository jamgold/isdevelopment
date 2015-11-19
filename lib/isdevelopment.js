// Write your package code here!
Meteor.isDevelopment = true;

if(Meteor.isServer)
{
	Meteor.startup(function () {
		// code to run on server at startup
		__meteor_runtime_config__.isDevelopment = process.env.NODE_ENV == 'development';
		Meteor.isDevelopment = __meteor_runtime_config__.isDevelopment;
	});
}
if(Meteor.isClient)
{
	Meteor.isDevelopment = __meteor_runtime_config__.isDevelopment;
}
