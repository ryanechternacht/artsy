module.exports = function(app, angularPath) { 
    var events = require('./events.js');
    app.get('/data/events', events.getEventList); 

    // app.get("*", function(req, res) {
    //     res.sendfile("index.html", { root: angularPath });
    // });
}