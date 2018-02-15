(function () {
    angular.module('app')
        .service('HttpService', HttpService);

    HttpService.$inject = ['$http','$q'];
    function HttpService($http,$q) { 
        return {
            get: Get,
            post: Post,
            put: Put,
            delete: Delete
        };
        function Get(url) {
            var defer = $q.defer();
            $http.get(url)
                .then(function (response) {
                    defer.resolve(response);
                });
            return defer.promise;
        }
        function Post(url, data) {
            var defer = $q.defer();
            $http.post(url, data)
                .then(function (response) {
                    defer.resolve(response);
                });
            return defer.promise;
        }
        function Put(url, data, id) {
            var defer = $q.defer();
            return $http.put(url + "\\" + id, data)
                .then(function (response) {
                    defer.resolve(response);
                });
        }
        function Delete(url, id) {
            var defer = $q.defer();
            $http.delete(url + "\\" + id)
                .then(function (response) {
                    defer.resolve(response);
                });
            return defer.promise;
        }

    }

})();