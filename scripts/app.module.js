angular.module('storiesApp', [
    'storiesList'
]);

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