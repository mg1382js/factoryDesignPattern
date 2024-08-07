class DynamicFactory {
    constructor() {
        this.registeredTypes = {};
    }

    registerType(typeName, classDefinition) {
        if (typeof classDefinition !== 'function') {
            throw new Error('Class definition must be a constructor function');
        }
        this.registeredTypes[typeName] = classDefinition;
    }

    create(typeName, ...args) {
        const ClassDef = this.registeredTypes[typeName];
        if (!ClassDef) {
            throw new Error(`Type ${typeName} not registered`);
        }
        return new ClassDef(...args);
    }
}

module.exports = new DynamicFactory();
