angular.module('storiesApp')
       .component('selectedStory', {
            templateUrl: 'scripts/selected-story/selected-story.template.html',
            controller: function SelectedStoryController(globalVars) { 
                var self = this;
                this.selectedID = globalVars.selectedStoryID;

                console.log(globalVars.stories);
                console.log(globalVars.selectedStoryID);

                this.story = globalVars.stories[globalVars.selectedStoryID];
                console.log(this.story);
            }
       });