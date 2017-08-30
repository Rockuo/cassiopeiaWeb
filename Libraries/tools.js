import _ from 'lodash';

export function routeGenerator (route, values) {
    _.each(values, (val, key) => {
            route = route.replace(`:${key}`, val);
    });
    return route;
}