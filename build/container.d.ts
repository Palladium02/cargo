declare class CargoContainer {
    private cargo;
    constructor(cargo?: Map<any, any>);
    set(serial: any, cargo: any): void;
    get(serial: any): any;
    remove(serial: any): void;
    empty(): void;
}
declare const Container: CargoContainer;
export default Container;
