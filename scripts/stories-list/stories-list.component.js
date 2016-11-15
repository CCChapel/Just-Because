//Define compenent for Story
angular.module('storiesApp')
       .component('storiesList', {
           templateUrl: 'scripts/stories-list/stories-list.template.html',
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