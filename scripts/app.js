//Define module
var storiesApp = angular.module('storiesApp', []);

//Define controller on the storiesApp
storiesApp.controller('StoriesController', function StoriesController($scope) {
    $scope.stories = [
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
});

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