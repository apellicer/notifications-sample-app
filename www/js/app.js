// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova) {
      //FCMPlugin.getToken( successCallback(token), errorCallback(err) );
      //Keep in mind the function will return null if the token has not been established yet.
      FCMPlugin.getToken(
        function(token){
          alert(token);
          console.log(token);
        },
        function(err){
          console.log('error retrieving token: ' + err);
        }
      );
      //FCMPlugin.onNotification( onNotificationCallback(data), successCallback(msg), errorCallback(err) )
      //Here you define your application behaviour based on the notification data.
      FCMPlugin.onNotification(
        function(data){
          if(data.wasTapped){
            //Notification was received on device tray and tapped by the user.
            alert( JSON.stringify(data) );
          }else{
            //Notification was received in foreground. Maybe the user needs to be notified.
            alert( JSON.stringify(data) );
          }
        },
        function(msg){
          console.log('onNotification callback successfully registered: ' + msg);
        },
        function(err){
          console.log('Error registering onNotification callback: ' + err);
        }
      );
    }
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
