define(function(require, exports, module) {
    var Engine = require('famous/core/Engine');
    var AppView = require('views/AppView');

    var mainContext = Engine.createContext();
    mainContext.setPerspective(500);

    var size = [window.innerWidth+2, window.innerHeight];

	var appView = new AppView(size);

	mainContext.add(appView);
	
});
