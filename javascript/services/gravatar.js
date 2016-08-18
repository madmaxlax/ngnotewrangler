/// <reference path="C:\Apps\Dropbox\Dev\typings\angularjs\angular.d.ts" />


var app = angular.module("NoteWrangler")
    .factory("Gravatar", function GravatarFactory() {
        var avatarSize = 80;
        var avatarUrl = "http://www.gravatar.com/avatar/";
        return {
            //CryptoJS.MD5(email);
            //Gravatar.generate("maxstruever@gmail.com");
            //generate: function(email){
            function(email){
                return avatarUrl + MD5(email) + "?size="+avatarSize.toString();
            }
        };
        
    });