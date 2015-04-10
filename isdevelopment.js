// Write your package code here!
if(Meteor.isServer)
{
	Meteor.startup(function () {
		// code to run on server at startup
		__meteor_runtime_config__.isDevelopment = process.env.NODE_ENV == 'development';
	});
}
if(Meteor.isClient)
{
	Meteor.isDevelopment = __meteor_runtime_config__.isDevelopment;
}