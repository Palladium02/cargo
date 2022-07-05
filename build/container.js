"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CargoContainer {
    constructor(cargo = new Map()) {
        this.cargo = cargo;
    }
    set(serial, cargo) {
        this.cargo.set(serial, cargo);
    }
    get(serial) {
        return this.cargo.get(serial);
    }
    remove(serial) {
        this.cargo.delete(serial);
    }
    empty() {
        this.cargo.clear();
    }
}
const Container = new CargoContainer();
exports.default = Container;
