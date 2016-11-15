//Define compenent for Story
angular.module('storiesApp')
       .component('storiesList', {
            templateUrl: 'scripts/stories-list/stories-list.template.html',
            controller: function StoriesListController($http) {
                var self = this;
                $http.get('scripts/stories-list/stories.json').then(function(response) {
                    self.stories = response.data;
                });
            }
       });