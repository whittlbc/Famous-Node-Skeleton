define(function(require, exports, module) {
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');

    function AppView(size) {

        View.apply(this, arguments);   

        this.options.size = size;

        this.rootModifier = new StateModifier({
            size: this.options.size,
            origin: [0.5, 0.5],
            align: [0.5, 0.5]
        });

        this.mainNode = this.add(this.rootModifier);       

        _createBackground.call(this);
        // _addExampleAJAXCall.call(this);
        _createListeners.call(this);  
  
    }

    AppView.prototype = Object.create(View.prototype);
    AppView.prototype.constructor = AppView;


    AppView.prototype.myCustomMethod = function(){

        // add your own method for this class here

    };


    // continue to add other methods here 


    AppView.DEFAULT_OPTIONS = {
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



    // Example AJAX call from Famo.us to Node server to get the name of a user you have stored in your DB, given that user's id
    function _addExampleAJAXCall (){

        // obviously, this.userID would need to be previously defined...
        var sendObj = {

            userID: this.userID
        };

        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function(){

            if (xhr.readyState==4 && xhr.status == 200){

                var serverResponse = JSON.parse(xhr.responseText);

                // log the user's name
                console.log(serverResponse.name);

            }
        };  

        xhr.open('post', '/users/getUserName', true); 

        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.send(JSON.stringify(sendObj));        

    }


    // add an event handler to your surface
    function _createListeners (){

        this.surface.on('click', function(){

            console.log('Heard surface click!');

        }.bind(this));

    }



    module.exports = AppView;

});





