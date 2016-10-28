(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:page2Service
	 * @description
	 * # page2Service
	 * Service of the app
	 */

	angular
		.module('page2')
		.factory('Page2Service', Page2Service);

	Page2Service.$inject = ['$http'];

	function Page2Service($http) {

		var service = {
			Page2: function ($scope) {

				return $http({
					method: 'GET',
					url: 'https://api.github.com/repos/' + $scope.username + '/' + $scope.reponame + '/commits',
					qs: {
						access_token: 'ba699b1c3198ca468a5d8f5b205c1b8059936080'
					},
					headers: {
						'Accept': 'application/vnd.github.VERSION.sha'
					},
					params: {
						per_page: 100
					}
					
				});

			}

		};

		return service;

	}

})();
