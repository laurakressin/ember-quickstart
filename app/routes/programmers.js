import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
    }
});
