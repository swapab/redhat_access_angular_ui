'use strict';

export default () => {
    return {
        template: require('../views/navSideBar.jade'),
        restrict: 'A',
        link: function postLink(scope, element, attrs) {
        }
    };
}
