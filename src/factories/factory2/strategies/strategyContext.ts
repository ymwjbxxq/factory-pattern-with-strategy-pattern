import { Strategy } from "./strategy";

export class StrategyContext {
  constructor(private strategy: Strategy) { }

  public Context(strategy: Strategy) {
    this.strategy = strategy;
  }

  public async execute(): Promise<void> {
    await this.strategy.doSomething();
  }
}
