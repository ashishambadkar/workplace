/**
 * Created with JetBrains WebStorm.
 * User: Amol Kulkarni
 * Date: 22/08/15
 * Time: 3:38 PM
 * To change this template use File | Settings | File Templates.
 */

'use strict';

angular.module('portalApp')
    .service('catalogService', function ($http) {
        var catalog = [];

        this.getAllDesigns = function () {
            var successCallback, errorCallback;
            var response = {
                success: function (callback) {
                    successCallback = callback;
                    return response;
                },
                error: function (callback) {
                    errorCallback = callback;
                    return response;
                }
            };

            $http.get('api/designs')
                .success(function (items) {
                    catalog = items;
                    successCallback(catalog);
                })
                .error(function (error) {
                    if (error) {
                        errorCallback(error);
                    }
                });

            return response;

        };

    });

