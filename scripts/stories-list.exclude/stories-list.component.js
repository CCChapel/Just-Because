//Define compenent for Story
angular.module('storiesApp')
       .component('storiesList', {
            templateUrl: 'scripts/stories-list/stories-list.template.html',
            controller: function StoriesListController($http, globalVars) {
                var self = this;
		        self.stories = new Array();
                
		        var url = 'scripts/stories-list/stories.json';
                //var url = 'https://www.formstack.com/api/v2/form/2530077/submission.json?data=true&oauth_token=4761552ea4b8d1f0a5859d428bf7ccbe';

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

                            self.stories.push(story);
                            // console.log(self.stories);
                        });

                        globalVars.stories = self.stories;
                    },
                    function errorCallback(response) {
                        console.log("ERROR");
                        console.log(response);
                    });

                self.setShowStoryID = function setShowStoryID(id) {
                    self.selectedStoryID = id;
                    globalVars.selectedStoryID = id;
                    console.log(globalVars.selectedStoryID);
                }
            }
       });