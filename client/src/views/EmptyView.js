define(function(require, exports, module) {
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');

    function EmptyView(size) {

        View.apply(this, arguments);   

        this.options.size = size;

        this.rootModifier = new StateModifier({
            size: this.options.size,
            origin: [0.5, 0.5],
            align: [0.5, 0.5]
        });

        this.mainNode = this.add(this.rootModifier);       

        _createBackground.call(this);
        _createListeners.call(this);  
  
    }

    EmptyView.prototype = Object.create(View.prototype);
    EmptyView.prototype.constructor = EmptyView;


    EmptyView.prototype.myCustomMethod = function(){

        // add your own method for this class here

    };


    // continue to add other methods here 


    EmptyView.DEFAULT_OPTIONS = {
        placeholder: null
    };

    //----------------------Helper Functions--------------------


    function _createBackground (){

        this.surface = new Surface({
            size: this.options.size,
            content: 'My Surface',
            properties: {
                backgroundColor: 'red',
                color: 'white',
                textAlign: 'center',
                lineHeight: (this.options.size[1])+'px',
                fontSize: (0.04*this.options.size[1])+'px'
            }
        });

        this.surfaceModifier = new StateModifier({
            origin: [0.5, 0.5],
            align: [0.5, 0.5]
        });

        this.mainNode.add(this.surfaceModifier).add(this.surface);

    }

    function _createListeners (){

        this.surface.on('click', function(){

            console.log('Heard surface click!');

        }.bind(this));

    }



    module.exports = EmptyView;

});





