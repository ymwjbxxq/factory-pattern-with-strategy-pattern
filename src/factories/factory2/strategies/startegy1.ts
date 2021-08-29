import { Strategy } from "./strategy";

export class Strategy1 implements Strategy {
  constructor(private readonly request: any) { }

  public async doSomething(): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
