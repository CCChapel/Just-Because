// //Define compenent for Story
// angular.module('storiesApp')
//        .component('storiesList', {
//             templateUrl: 'scripts/stories-list/stories-list.template.html',
//             controller: function StoriesController() {
//                 var self = this;

//                 this.stories = [
//                     {
//                         name: "name 1",
//                         location: "location 1",
//                         story: "Story 1"
//                     }, {
//                         name: "name 2",
//                         location: "location 2",
//                         story: "Story 2"
//                     }, {
//                         name: "name 3",
//                         location: "location 3",
//                         story: "Story 3"
//                     }
//                 ];

//                 console.log(self);
//             }
//        });

//Define compenent for Story
angular.module('storiesApp')
       .component('storiesList', {
            templateUrl: 'scripts/stories-list/stories-list.template.html',
            controller: function StoriesListController($http) {
                var self = this;
                var url = 'scripts/stories-list/stories.json';
                //var url = 'https://www.formstack.com/api/v2/form/2530077/submission.json?data=true&oauth_token=16559620d4a936952cde88ee1070a6cc';

                //Field IDs
                var nameField = 47415896;
                var locationField = 47415900;
                var storyField = 47415901;

                //Get Submissions
                var submissions = new Array();
                $http.get(url)
                     .success(
                        function successCallback(response) {
                            console.log("SUCCESS");
                            console.log(response);
                            
                            for (x in response.submissions) {
                                console.log(x)
                            }
                            //self.stories = response.data;
                        })
                     .error(
                        function errorCallback(response) {
                            console.log("ERROR");
                            console.log(response);
                        });
            }
       });