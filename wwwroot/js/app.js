angular.module('app', [])
    .controller('appCtrl', ['$scope', function($scope) {
        var vm = this;

        io().on('toBeMerged', function(src){
            angular.merge(vm.store, src);
            $scope.$digest();
        });

        angular.extend(vm, {
            run: function(fn){
                return {
                    with: function(args){
                        io().emit(fn, args);
                    }
                }
            },
            store: {}
        });
    }]);