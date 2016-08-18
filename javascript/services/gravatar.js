/// <reference path="C:\Apps\Dropbox\Dev\typings\angularjs\angular.d.ts" />


var app = angular.module("NoteWrangler")
    .provider("Gravatar", function GravatarProvider() {
        var avatarSize = 80;
        var avatarUrl = "http://www.gravatar.com/avatar/";
        this.setSize = function(size){
            avatarSize = size;
        };
        this.$get = function() {
            //CryptoJS.MD5(email);
            //Gravatar.generate("maxstruever@gmail.com");
            //generate: function(email){
            return function(email){
                return avatarUrl + MD5(email) + "?size="+avatarSize.toString();
            };
        };
        
    });