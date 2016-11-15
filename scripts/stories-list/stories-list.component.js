//Define compenent for Story
angular.module('storiesApp')
       .component('storiesList', {
            templateUrl: 'scripts/stories-list/stories-list.template.html',
            controller: function StoriesListController($http) {
                var self = this;
                //var url = 'scripts/stories-list/stories.json';
                var url = "https://www.formstack.com/api/v2/form/2530077/submission.json?oauth_token=16559620d4a936952cde88ee1070a6cc";

                $http.get(url).then(function(response) {
                    self.stories = response.data;
                });
            }
       });