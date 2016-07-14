angular.module('app', [])
    .controller('appCtrl', ['$scope', function($scope) {
        var vm = this,
            socket = io();

        angular.extend(vm, {
            data :{},
            init: function(){
                socket.on('data', function(data){
                    angular.extend(vm.data, data);
                    $scope.$digest();
                });
            },
            socket: function(fn, args){
                socket.emit(fn, args);
            }
        });
    }])
;