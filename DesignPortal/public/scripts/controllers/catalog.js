/**
 * Created with JetBrains WebStorm.
 * User: Amol Kulkarni
 * Date: 22/08/15
 * Time: 3:36 PM
 * To change this template use File | Settings | File Templates.
 */
'use strict';

angular.module('portalApp')
    .controller('CatalogCtrl', function ($scope, catalogService) {
        catalogService.getAllDesigns()
            .success (function (data){
            console.log(data);
            $scope.catalog = data;
        })

    });
