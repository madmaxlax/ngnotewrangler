
// angular.module("NoteWrangler")
//     .directive("title",function($sce){
//         return {
//             //restrict: 'A',   restricted to A by default
//             // link: function(){}
//         };
//     });
//if only using link function, you can skip the fancier syntax for directives
    
angular.module("NoteWrangler")
    .directive("title",function($timeout){
        return function(scope,element,attributes){
            //to ensure data is loaded before sending to bootstrap
            $timeout(function(){
                //send to bootstrap's tooltip function
                element.tooltip({container: "body"});
            });

            //clean up after timeout
            scope.$on('$destroy', function(){
               element.tooltip('destroy'); 
            });
        };
    });