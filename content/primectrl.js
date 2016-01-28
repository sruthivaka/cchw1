(function ()
{
    'use strict';
    var myApp = angular.module('app');
    myApp.controller('PrimeController', PrimeController);
    PrimeController.$inject = ['$scope'];
    function PrimeController($scope)
    {
        $scope.show = false;

        $scope.clear = function ()
        {
            $scope.show = false;
            $scope.num = "";
        }

        $scope.checkPrime = function ()
        {
            var num = $scope.num;
            $scope.result = "";
            $scope.show = true;

            if (isTxtBoxValNum())
            {
                if($scope.num <= 1)
                    $scope.result = "Number should be greater than 1";
                else
                {
                    if (isPrime(num))
                        $scope.result = "Prime Number!";
                    else
                        $scope.result = "Not a Prime!";
                }
            }
            else
                $scope.result = "Please enter a number!";
        };

        $scope.generateNext = function ()
        {
            var num = $scope.num;
            $scope.result = "";
            $scope.show = true;
           
            if (isTxtBoxValNum())
            {
                for (var i = +num + 1; true; i++)
                {
                    if (isPrime(i))
                    {
                        $scope.result = i + " is the next Prime!";
                        return;
                    }
                }
            }
            else
                $scope.result = "Please enter a number!";            
        };

        $scope.generatePrevious = function ()
        {
            var num = $scope.num;
            $scope.result = "";
            $scope.show = true;

            if (isTxtBoxValNum())
            {
                for (var i = num - 1; i > 1; i--)
                    if (isPrime(i))
                    {
                        $scope.result = i + " was the previous Prime!";
                        return;
                    }
                if (num <= 2)
                $scope.result = "Prime Number starts from 2!";
            }
            else
                $scope.result = "Please enter a number!";            
        };

        function isPrime(num)
        {
            if (num % 2 == 0 && num != 2)
                return false;
            for (var i = 3; i * i <= num; i += 2)
                if (num % i == 0)
                    return false;
            if (num <= 1)
                return false;
            return true;
        }

        function isTxtBoxValNum()
        {
            var num = $scope.num;
            return (!isNaN(num) && angular.isNumber(+num) && num != "");
        }
    }
})();