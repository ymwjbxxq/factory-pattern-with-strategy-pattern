
# Factory and Strategy patterns #

### What are Design Patterns? ###
From Wikipedia:
https://en.wikipedia.org/wiki/Software_design_pattern
"In software engineering, a software design pattern is a general, reusable solution to a commonly occurring problem within a given context in software design. It is not a finished design that can be transformed directly into source or machine code. Rather, it is a description or template for how to solve a problem that can be used in many different situations. Design patterns are formalized best practices that the programmer can use to solve common problems when designing an application or system."

The gang of Four: https://www.dofactory.com/net/design-patterns

### Facory ###

![picture](https://github.com/ymwjbxxq/factory-pattern-with-strategy-pattern/blob/main/factory.png)
A factory pattern is a creational pattern.

### Strategy ###

![picture](https://github.com/ymwjbxxq/factory-pattern-with-strategy-pattern/blob/main/strategy.png)
A strategy pattern is a behavioural pattern.

### So, What? ###

For someone, especially people from a scripting background (at least this is what I noticed, and of course, it is not always the case), design patterns are either not known, complicated or not beneficial to use. So most of the time, collaboration with them end up with the code that becomes just a bunch of if-else and some reflection that make the code appear less readable and less maintainable in the long run.

I usually end up explaining the code with associations to step out from the IT world.

For example:
We have multiple types of cars
* Hybrid
* Electric

They are a type of CAR. The factory will return the actual type Hybrid or Electric, and they could have different implementation for the .engine().

If we stay with the car example, we want to change their behaviour based on the country injecting a strategy, for example:
* Left-hand drive cars
* Right-hand drive cars

Back to the code, we could have this:
* Hybrid-Left
* Hybrid-Right
* Electric-Left
* Electric-Right

And most of the time, I hear, but this is simpler bla bla bla, and it could be, but you should add an option for each behaviour or type and at the end of the day, without reference to other principles, you could end with a monolith method that does multiple things.

### SUM UP ###

Design patterns are considered the foundations of software design, and it does not matter what the background we are coming from is.
For example, suppose we are building any application that is not a PoC. In that case, it is handy to be aware of their existence because they could help us write a more readable and maintainable application.
