angular.module('storiesApp')
       .component('selectedStory', {
            templateUrl: 'scripts/selected-story/selected-story.template.html',
            controller: function SelectedStoryController(globalVars) { 
                var self = this;

                this.story = "MY TEST STORY";

                console.log("STORY: " + globalVars.selectedStoryID);
                globalVars.selectedStoryID = 30;
                console.log("STORY: " + globalVars.selectedStoryID);

            }
       });