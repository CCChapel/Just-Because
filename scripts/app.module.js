angular.module('storiesApp', [
    'storiesList',
    'selectedStory'
]).value('globalVars', {
    selectedStoryID: -1
});

// .factory('SelectedStory', function() {
//     var selectedStory = {
//         id: ''
//     }

//     selectedStory.setID = function(id) {
//         selectedStory.id = id;
//     }

//     selectedStory.getID = function() {
//         return selectedStory.id;
//     }

//     return selectedStory;
// });