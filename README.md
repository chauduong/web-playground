This is a template web application used to create an initial shell application.
It is a Play Angular starter application with incremental Typescript compilation.


## Dependencies
- [Scala 2.12.3](http://www.scala-lang.org/)
- [Play 2.6.5](https://www.playframework.com/) Web application framework
- [ScalaTest](http://scalatest.org) Scala Unit testing framework

- [Angular 4.3.2](http://angular.io) Front-End Single Page Application framework
- [Angular Material](https://material.angular.io) Material Design components

## Running the server
Run `sbt ~run` and you'll have the standard Angular shell application [running locally](http://localhost:9000).

### Development Mode
- `sbt run` or `sbt ~run`
- `sbt testProd` run application in test production mode
- `sbt test` to run tests

## Developer Tools
- [Angular CLI](https://cli.angular.io/) The Angular CLI is a tool to initialize, develop, scaffold and maintain Angular applications
- [Angular Style Guide](https://angular.io/guide/styleguide)
- [Jasmine](http://jasmine.github.io)Javascript testing framework. [Quick start guide of Jasmine](http://jasmine.github.io/edge/introduction.html)
- [Karma](http://karma-runner.github.io) A unit test runner. Karma is a tool that enables the running of source code (i.e. JavaScript) against real browsers via the CLI.
- [Protractor](http://www.protractortest.org/). End to end testing. It requires the application to be running

## Development Notes
- [Web App UI](ui/README.md) Clientside angular project readme

## Deployment
`sbt dist` to create a distribution package

## References
- https://github.com/joost-de-vries/play-angular-typescript.g8
- https://github.com/lbialy/play-ng2-webpack2
- https://github.com/playframework/play-scala-websocket-example

