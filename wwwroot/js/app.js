angular.module('app', [])
    .controller('appCtrl', ['$scope', function($scope) {
        var vm = this;

        io().on('data', function(data){
            angular.extend(vm.store, data);
            $scope.$digest();
        });

        angular.extend(vm, {
            dispatch: function(fn, args){
                io().emit(fn, args);
            },
            store: {}
        });
    }]);