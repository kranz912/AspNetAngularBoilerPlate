(function () {
    angular.module('app')
        .config(configuration);
    configuration.$inject = ['$stateProvider', '$urlRouterProvider', 'pages'];

    function configuration($stateProvider, $urlRouterProvider, pages) {
        $urlRouterProvider.otherwise('');
        angular.forEach(pages.pages, function (states) {
            $stateProvider.state(states);
        });
     
    }
})();