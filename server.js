var port    = process.env.PORT     || 3000,
    express = require("express"),
    app     = express();

require("newrelic");

// Start the server
app.listen(port, function() {
  console.log("Listening on port " + port + "...");
});

