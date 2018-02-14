(function () {
    var rootTemp = '/Application/templates/'; 
    angular.module('app')
        .constant('urls', {
            rootTemplates: rootTemp
        })
        .constant('navigationLinks', {
            navigation: [
                { title: 'Home', href: 'Home', icon: '' },
                { title: 'Sample', href: 'Sample', icon: '' }]
        })
        .constant('pages', {
            pages: [
                { name: 'Home', url: '', templateUrl: rootTemp + "pages//Home.html", controller: 'HomeCtrl' },
                { name: 'Sample', url: '/sample', templateUrl: rootTemp + "pages//Sample.html", controller: 'SampleCtrl' }
            ]
        });


})();