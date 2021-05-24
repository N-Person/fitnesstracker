// view routes for the html page to generate
const path = require("path");

// index route loads view.html
module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(_dirname, "../public/index.html"));
    });

    // route to the exercise page
    app.get("/exercise", function(req,res){
        res.sendFile(path.join(_dirname, "../public/exercise.html"));
    });

    // stats route to stats.html
app.get("/stats", function(req, res){
res.sendFile(path.join(_dirname, "../public/stats.html"));
});


// workout route to workout.html
app.get("/workout", function(req,res){
    res.sendFiles(path.join(-dirname, "../public/workout.html"));
});

};