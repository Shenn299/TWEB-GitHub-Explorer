(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name app.controller:page2Ctrl
     * @description
     * # page2Ctrl
     * Controller of the app
     */

    angular
        .module('page2')
        .controller('Page2Ctrl', Page2);

    Page2.$inject = ['$scope', 'Page2Service'];

    /*
     * recommend
     * Using function declarations
     * and bindable members up top.
     */

    function Page2($scope, Page2Service) {
        var vm = this;

        var commitsSha = [];

        $scope.update = function (user) {
            $scope.username = angular.copy(user.username);
            $scope.reponame = angular.copy(user.reponame);

            $scope.msg = $scope.username;
            $scope.msg2 = $scope.reponame;

            // GET async commits request
            Page2Service.Page2($scope)
                .then(function successCallback(response) {
                    // this callback will be called asynchronously
                    // when the response is available
                    for (var i = 0; i < response.data.length; ++i) {
                        commitsSha.push(response.data[i].sha);
                    }

                    $scope.commits = commitsSha;
                    $scope.nbCommits = response.data.length;

                }, function errorCallback(response) {
                    // called asynchronously if an error occurss
                    // or server returns response with an error status.
                    $scope.msg = "There is an error";
                });


            vm.labels = ['A', 'B'];
            vm.data = [50, 25];
        }


    };

})();
