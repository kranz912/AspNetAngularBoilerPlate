(function () {
    angular.module('app')
        .directive('navigationTemplate', navigation);
    navigation.$inject = ['urls'];
    function navigation(urls) {
        return {
            restrict: 'E',
            templateUrl: urls.rootTemplates + 'navigation//nav_template.html',
            controller: navigationCtrl,
            controllerAs: 'vm',
            bindToController: true
        };
    }
    navigationCtrl.$inject = ['navigationLinks'];
    function navigationCtrl(navigationLinks) {
        var vm = this;
        vm.navigation = navigationLinks.navigation;
    }
})();