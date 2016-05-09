/*
 * GlobalComponent
 *
 * 组件
 */
;(function(root){
    'use strict';

    var RootClass = function(){

    }

    RootClass.prototype.init = function() {

    }

    root.GlobalComponent = {
        init: function(option) {
            return new RootClass(option)
        }
    }
}(this));
