var simplecs = {};

simplecs.entity = function entity() {
    entity.count = (entity.count | 0) + 1;

    return {
        id: (+new Date()).toString(16) + (entity.count).toString(36),
        components: {},
        add: function (component) {
            this.components[component.name] = component;
        },
        remove: function (component) {
            var name;
            if (Object.prototype.toString.call(component) === '[object Object]') {
                name = component.name;
            } else {
                name = component;
            }
            delete this.components[name];
        },
        print: function () {
            console.log(JSON.stringify(this, null, 4));
        }
    };
};

simplecs.components = {
    shared: {},
    dedicated: {}
};

simplecs.systems = {};

module.exports = simplecs;
