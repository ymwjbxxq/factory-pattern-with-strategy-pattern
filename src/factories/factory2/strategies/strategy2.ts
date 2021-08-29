import { Strategy } from "./strategy";

export class Strategy2 implements Strategy {
  constructor(private readonly request: any) { }

  public async doSomething(): Promise<void> {
    throw new Error("Method not implemented.");
  }
}