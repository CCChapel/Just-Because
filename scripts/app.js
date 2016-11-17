//Define module
var storiesApp = angular.module('storiesApp', []);

//Define compenent for Story
storiesApp.controller('StoriesController', function StoriesControler($scope, $http) {
    $scope.showModal = false;
    $scope.showModalStory = false;
    $scope.showModalForm = false;

    $scope.stories = new Array();
    
    var url = 'scripts/stories.json';
    //var url = 'https://www.formstack.com/api/v2/form/2530077/submission.json?data=true&oauth_token=16559620d4a936952cde88ee1070a6cc';

    //Field IDs
    var nameField = 47415896;
    var locationField = 47415900;
    var storyField = 47415901;
    var publishedField = 47423525;

    //Get Submissions
    var submissions = new Array();

    $http.get(url, { jsonCallbackParam: 'callback' }).then(
        function successCallback(response) {
            // console.log("SUCCESS");
            // console.log(response);

            //Parse items
            response.data.submissions.forEach(function(item, index) {
                var story = {
                    id: index,
                    name: item.data[nameField].value,
                    location: item.data[locationField].value,
                    story: item.data[storyField].value,
                    published: item.data[publishedField].value || 'False'
                };

                // console.log(story);

                $scope.stories.push(story);
            });
        },
        function errorCallback(response) {
            console.log("ERROR");
            console.log(response);
        });

    // $scope.showStory = function showStory(id) {
    //     $scope.openModal();
    // }

    //////////////////////////////////////////////////////////
    // MODAL FUNCTIONS
    //////////////////////////////////////////////////////////
    $scope.showStory = function showStory(id) {
        $scope.selectedStoryID = id;
        $scope.showModalStory = true;
        $scope.openModal();
    }

    $scope.showForm = function showForm() {
        $scope.showModalForm = true;
        $scope.openModal();
    }

    $scope.openModal = function openModal() {
        $scope.showModal = true;
        $scope.screenLock = true;
    }

    $scope.closeModal = function closeModal() {
        $scope.showModal = false;
        $scope.showModalStory = false;
        $scope.showModalForm = false;

        $scope.screenLock = false;        
    }
});