import { FactoryGenerator } from "./modules/factoryGenerator";

const factory = new FactoryGenerator();

export const handler = async (request: any): Promise<any> => {
  const myFactory = factory.create(request);
  await myFactory.generate();
  await myFactory.upload();
};

factory-pattern-with-strategy-pattern