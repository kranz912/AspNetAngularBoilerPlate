(function () {
    angular.module('app')
        .controller('SampleCtrl', SampleCtrl);
    SampleCtrl.$inject = ['HttpService'];
    function SampleCtrl(HttpService) {
        HttpService.get("api/Sample").then(function (response) {
            console.log('get');
            console.log(response);
        });
        HttpService.post('api/Sample', "hello world").then(function (response) {
            console.log('post');
            console.log(response);
        });
        HttpService.put('api/Sample', "hello world", 1).then(function (response) {
            console.log('put');
            console.log(response);

        });
    }
})();