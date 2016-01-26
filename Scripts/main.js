var demoApp = angular.module("demoApp", []);
function ControllerDemo($scope) {
    $scope.lists = ['Projects', 'Task', 'Contacts', 'Folder'];
}
demoApp.controller('ControllerDemo', ControllerDemo);