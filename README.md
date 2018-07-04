# node-lambda-typescript-sample

## Gulp Tasks

### Building

To compile the TypeScript code:

```sh
gulp compile
```

To stop the build when there are lint errors:

```sh
gulp compile --strict-lint
```

To automatically fix lint errors:

```sh
gulp compile --fix-lint
```

### Packaging

To build the application package:

```sh
gulp package
```

### Running Tests

To run tests:

```sh
gulp test
```

To run tests in TDD mode (watches for code changes):

```sh
gulp tdd
```

To run isolated tests:

```sh
gulp test --grep <pattern>
```

```sh
gulp tdd --grep <pattern>
```
