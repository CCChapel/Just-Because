//Define compenent for Story
angular.module('storiesApp')
       .component('storiesList', {
           template:
                '<ul>' +
                    '<li ng-repeat="story in $ctrl.stories">' +
                        '<div>{{story.name}}</div>' +
                        '<div>{{story.location}}</div>' +
                        '<div>{{story.story}}</div>' +
                    '</li>' +
                '</ul>',
            controller: function StoriesController() {
                this.stories = [
                    {
                        name: "name 1",
                        location: "location 1",
                        story: "Story 1"
                    }, {
                        name: "name 2",
                        location: "location 2",
                        story: "Story 2"
                    }, {
                        name: "name 3",
                        location: "location 3",
                        story: "Story 3"
                    }
                ];
            }
       });

// //Define compenent for Story
// angular.module('storiesApp')
//        .component('storiesList', {
//            template:
//                 '<ul>' +
//                     '<li ng-repeat="story in $ctrl.stories">' +
//                         '<div>{{story.name}}</div>' +
//                         '<div>{{story.location}}</div>' +
//                         '<div>{{story.story}}</div>' +
//                     '</li>' +
//                 '</ul>',
//             controller: function StoriesController($http) {
//                     var self = this;
//                     var url = '/scripts/stories-list/stories.json'; //'https://www.formstack.com/api/v2/form/2530077/submission.json?oauth_token=16559620d4a936952cde88ee1070a6cc';

//                     $http.get(url).then(function(response) {
//                         console.log(response.data);
//                         self.stories = response.data;
//                     });
//                 }
//        });