var app = angular.module('myApp',[]);

app.run(function($rootScope) {

    Messages = [
      "Learn to Code",
      "It's Not As Hard as You Think"
    ];

    $rootScope.mainHeader = message[0];

    function anim1() {
      $rootScope.mainHeader = message[1];
    }

    setTimeout(anim1, 3000)

});
