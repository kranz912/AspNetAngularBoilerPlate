(function () {
    angular.module('app')
        .controller("app.controller", applicationctrl);
    function applicationctrl(){
        var vm = this;
        vm.title = "AppCtrl";
    }
})();