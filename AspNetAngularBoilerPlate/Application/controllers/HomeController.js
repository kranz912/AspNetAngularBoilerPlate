(function () {
    angular.module('app')
        .controller('HomeCtrl', HomeCtrl);
    HomeCtrl.$inject = ['HttpService']
    function HomeCtrl($HttpService) {
        $HttpService.get("api/Sample").then(function (response) {
            console.log(response);
        });
    }
})();