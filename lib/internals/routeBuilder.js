'use strict';

const Logger       = require('toki-logger')();
const RouteHandler = require('./routeHandler');

class RouteBuilder {

    /*
     * Sets routes on server instance based on configuration
     * @param {Object} input
     *       routes - configuration routes
     *       router - router server to populate
     * */
    static build(input, options = {}) {

        const router = input.router;

        Logger.debug('Route setup started');

        input.routes.forEach((route) => {

            //instantiate router obj
            Logger.debug('Setup route ' + route.httpAction + ' ' + route.path);

            router.route({
                method: route.httpAction,
                path: route.path,
                handler: new RouteHandler(route, options)
            });
        });

        Logger.debug('Route setup finished');
    }
}

module.exports = RouteBuilder;
