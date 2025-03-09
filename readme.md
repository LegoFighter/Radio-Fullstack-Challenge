## Setup

Note: This programm was written on MacOS, so is this setup only MacOS.

Before running everything, some simple steps needs to be made.

- Install mkcert on your machine. For mac using homebrew.

  ```
  $ brew install mkcert
  ```

- Ensure mkcert master certificate has been installed

  ```
  $ mkcert -install
  ```

### Initialize Environment

- Install SSL Certificates.

  ```
  $ ./init.sh
  ```

## Start docker and apps

```
docker compose up --build
```


## Test

To run the test you can use the following command:

### For Unit Test

```
yarn test:unit
```

### For e2e Tests

```
yarn test:e2e
```