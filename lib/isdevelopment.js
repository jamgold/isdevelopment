// Write your package code here!
Meteor.isDevelopment = true;

if(Meteor.isServer)
{
    Meteor.checkIsDevelopment = function() {
        if(process.env.IN_PASSENGER)
        {
            return process.env.PASSENGER_APP_ENV == 'development';
        }
        else
        {
            if(Meteor.settings.env && Meteor.settings.env.NODE_ENV)
                return Meteor.settings.env.NODE_ENV == 'development';
            else
                return process.env.NODE_ENV == 'development';
        }
    }
	Meteor.startup(function () {
		// code to run on server at startup
        __meteor_runtime_config__.isDevelopment = Meteor.checkIsDevelopment();
		Meteor.isDevelopment = __meteor_runtime_config__.isDevelopment;
	});
}
if(Meteor.isClient)
{
	Meteor.isDevelopment = __meteor_runtime_config__.isDevelopment;
}
