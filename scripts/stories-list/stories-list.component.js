// //Define compenent for Story
// angular.module('storiesApp')
//        .component('storiesList', {
//             templateUrl: 'scripts/stories-list/stories-list.template.html',
//             controller: function StoriesController() {
//                 var self = this;

//                 this.stories = [
//                     {
//                         name: "name 1",
//                         location: "location 1",
//                         story: "Story 1"
//                     }, {
//                         name: "name 2",
//                         location: "location 2",
//                         story: "Story 2"
//                     }, {
//                         name: "name 3",
//                         location: "location 3",
//                         story: "Story 3"
//                     }
//                 ];

//                 console.log(self);
//             }
//        });

//Define compenent for Story
angular.module('storiesApp')
       .component('storiesList', {
            templateUrl: 'scripts/stories-list/stories-list.template.html',
            controller: function StoriesListController($http) {
                var self = this;
		        self.stories = new Array();
                
		        var url = 'scripts/stories-list/stories.json';
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
                        console.log("SUCCESS");
                        console.log(response);

                        //Parse items
                        response.data.submissions.forEach(function(item, index) {
                            var story = {
                                name: item.data[nameField].value,
                                location: item.data[locationField].value,
                                story: item.data[storyField].value,
                                published: item.data[publishedField].value
                            };
<<<<<<< HEAD
=======
=======
                $http.get(url, { jsonCallbackParam: 'callback' }).then(
                        function successCallback(response) {
                            console.log("SUCCESS");
                            console.log(response);

			    //Parse items
			    response.data.submissions.forEach(function(item, index) {
				var story = {
					name: item.data[nameField].value,
					location: item.data[locationField].value,
					story: item.data[storyField].value,
					published: item.data[publishedField].value || 'False'
				};
>>>>>>> 508ac4703dad597e17d9e1c74d6551decbb29012
>>>>>>> 46379b2bfd76f0c3ebd8954d0373945feea61b7b

                            console.log(story);

                            self.stories.push(story);
                            console.log(self.stories);
                        });
                    },
                    function errorCallback(response) {
                        console.log("ERROR");
                        console.log(response);
                    });
            }
       });