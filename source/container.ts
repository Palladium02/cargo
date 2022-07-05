class CargoContainer {
  constructor(private cargo: Map<any, any> = new Map()) {}

  public set(serial: any, cargo: any) {
    this.cargo.set(serial, cargo);
  }

  public get(serial: any) {
    return this.cargo.get(serial);
  }

  public remove(serial: any) {
    this.cargo.delete(serial);
  }

  public empty() {
    this.cargo.clear();
  }
}

const Container = new CargoContainer();
export default Container;
