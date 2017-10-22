var routes = require('routes-http')();
routes.addRoute('/CRUD', function(req, res, opts) {
    console.log("crud");
});
// … more code …
//req.url = '/foo/bar/qux/baz';
routes(req, res);
