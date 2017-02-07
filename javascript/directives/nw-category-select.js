/// <reference path="C:\Apps\Dropbox\Dev\typings\angularjs\angular.d.ts" />


angular.module("NoteWrangler")
    .directive("nwCategorySelect",function(){
        return{
            replace: true,
            restrict: 'E',
            templateUrl: 'templates/directives/nw-category-select.html',
            scope:{
                 activeCategory: "="
            },
            link: function(scope, element, attrs) {
                //scope.categories = Category.query();
                scope.categories = categoriesdb;
            },
            controller: function($scope){
                this.setActiveCategory = function (category){
                    $scope.activeCategory = category;
                };
                this.getActiveCategory = function (){
                    return $scope.activeCategory;
                };
            }

        };
    });