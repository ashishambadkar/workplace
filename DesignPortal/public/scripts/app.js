/**
 * Created with JetBrains WebStorm.
 * User: Amol Kulkarni
 * Date: 22/08/15
 * Time: 3:29 PM
 * To change this template use File | Settings | File Templates.
 */

'use strict';

angular
    .module('portalApp', [
        'ui.router'
    ])
    .config(function($stateProvider, $urlRouterProvider) {
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/home");
        //
        // Now set up the states
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "views/home.html",
                controller: 'HomeCtrl'
            })
            .state('catalog', {
                url: "/catalog",
                templateUrl: "views/catalog.html",
                controller: 'CatalogCtrl'
            })
            .state('contact', {
                url: "/contact",
                templateUrl: "views/contact.html",
                controller: 'ContactCtrl'
            });
    });