import { Factory } from "../factory";

export class ConcreteFactory1 implements Factory {
  constructor(private readonly request: any) { }

  public async generate(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  
  public async upload(): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
