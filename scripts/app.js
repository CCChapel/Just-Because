﻿//Define module
var storiesApp = angular.module('storiesApp', ['ngAnimate']);

//Define compenent for Story
storiesApp.controller('StoriesController', function StoriesControler($scope, $http) {
    $scope.showModal = false;
    $scope.showModalStory = false;
    $scope.showModalForm = false;
    $scope.showModalVideo = false;
    $scope.sort = "name";
    $scope.sortName = true;    

    $scope.stories = new Array();
    
    //var url = 'scripts/stories.json';
    var url = 'https://www.formstack.com/api/v2/form/2530077/submission.jsonp?per_page=100&search_field_0=47423525&search_value_0=True&data=true&expand_data=true&oauth_token=239bb0d93cd50b1406c47e91eb65c1a7&callback=JSON_CALLBACK';

    //Field IDs
    var nameField = 47415896;
    var locationField = 47415900;
    var storyField = 47415901;
    var edittedStoryField = 47423544;
    var publishedField = 47423525;

    var defaultStory = {};
    defaultStory[nameField] = '';
    defaultStory[locationField] = '';
    defaultStory[storyField] = '';
    defaultStory[edittedStoryField] = '';
    defaultStory[publishedField] = { value : 'False' };

    //Get Submissions
    $http.jsonp(url, { jsonCallbackParam: 'callback' }).then(
        function successCallback(response) {
            //Shuffle Them Up
            shuffleArray(response.data.submissions);

            //Parse items
            response.data.submissions.forEach(function(item, index) {
                //Combine data with defaults
                var combinedData = jQuery.extend({}, defaultStory, item.data);

                //Extract story from data
                var story = {
                    id: index,
                    name: combinedData[nameField].value,
                    location: combinedData[locationField].value,
                    story: formatStory(combinedData[storyField].value),
                    published: combinedData[publishedField].value,
                    submissionId: item.id
                };

                $scope.stories.push(story);
            });
        },
        function errorCallback(response) {
            console.log("ERROR");
            console.log(response);
        });

    //////////////////////////////////////////////////////////
    // MODAL FUNCTIONS
    //////////////////////////////////////////////////////////
    $scope.showVideo = function showVideo() {
        $scope.template = "video";
        $scope.openModal();
    }
    
    $scope.showStory = function showStory(id, colorIndex) {
        $scope.selectedStoryID = id;
        $scope.selectedColorIndex = colorIndex;
        $scope.template = "story";
        $scope.openModal();
    }

    $scope.showForm = function showForm() {
        $scope.showModalForm = true;
        //$scope.template = "form";
        $scope.openModal();
    }

    $scope.openModal = function openModal() {
        $scope.showModal = true;
        $scope.screenLock = true;
    }

    $scope.closeModal = function closeModal() {
        $scope.showModal = false;
        $scope.showModalForm = false;

        $scope.template = "empty";        

        $scope.screenLock = false;        
    }

    /////////////////////////////////////////////////////////
    // MOBILE IMAGE SELECTION
    /////////////////////////////////////////////////////////
    $scope.randomMobileImage = function randomMobileImage() {
        var baseUrl = "images/groups/video/";
        
        //Get a random number between 1 and 4
        var randomNumber = Math.floor((Math.random() * 4) + 1);

        //Return URL to image
        return baseUrl + "mobile" + randomNumber + ".jpg";
    }
});

storiesApp.filter('html', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
});

storiesApp.filter('removeHtml', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(removeHtml(val));
    }
});

// -> Fisher–Yates shuffle algorithm
var shuffleArray = function(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

var formatStory = function(story) {
    if (Array.isArray(story)) {
        var html = "";

        story.forEach(function(item, index) {
            html += "<p>" + item + "</p>";
        });

        return html;
    }
    else {
        return story;
    }
}

var removeHtml = function(html) {
    return html.replace(/(<([^>]+)>)/ig,"");
}