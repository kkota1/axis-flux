angular.module('app', [])
    .controller('appCtrl', ['$scope', function($scope) {
        var store = {};

        io().on('data', function(data){
            angular.extend(store, data);
            $scope.$digest();
        });

        angular.extend(this, {
            dispatch: function(fn, args){
                io().emit(fn, args);
            },
            store: function(key){
                return store[key];
            }
        });
    }]);