import { Factory } from "../factory";
import { Strategy1 } from "./strategies/startegy1";
import { Strategy2 } from "./strategies/strategy2";
import { StrategyContext } from "./strategies/strategyContext";


export class ConcreteFactory2 implements Factory {
  constructor(private readonly request: any) { }

  public async generate(): Promise<void> {
    throw new Error("Method not implemented.");
  }

  public async upload(): Promise<void> {
    const strategy = this.request.propert1 === "something"
      ? new Strategy1(this.request)
      : new Strategy2(this.request);
    const context = new StrategyContext(strategy);
    await context.execute();
  }
}