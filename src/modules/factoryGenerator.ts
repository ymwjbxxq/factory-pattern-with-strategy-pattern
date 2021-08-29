import { ConcreteFactory1 } from "../factories/factory1/concreteFactory1";
import { ConcreteFactory2 } from "../factories/factory2/concreteFactory2";
import { Factory } from "../factories/factory";

export class FactoryGenerator {
  public create(request: any): Factory {
    switch (request.property1) {
      case "value1":
        return new ConcreteFactory1(request);
      case "value2":
        return new ConcreteFactory2(request);
      default:
        throw new Error(`${request.property1} not found`);
    }
  }
}
