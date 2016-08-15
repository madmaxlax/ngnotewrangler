/// <reference path="C:\Apps\Dropbox\Dev\typings\angularjs\angular.d.ts" />
/// <reference path="C:\Apps\Dropbox\Dev\typings\angularjs\angular-route.d.ts" />

angular.module('NoteWrangler').controller('NotesShowController',function ($http, $routeParams) {
    var controller = this;
    // $http({method: 'GET', url: '/notes/'+ $routeParams.id}).success(function(data){
    //     controller.note = data;
    // });
    //console.log('here');
    controller.note = {
        id:1,
        title: 'TitleNote1',
        icon: 'icon1',
        description:'descriponslkdn`1',
        note:'actualnote',
        user:'Max'
    };
});