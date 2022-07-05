# Cargo

Small and simple container API.

## Installation

```sh
npm install https://github.com/Palladium02/cargo.git
```

## Usage

### insert

```ts
import {Container} from "cargo";

Container.set("some unique identifier", "some value");
```

### retrieve

```ts
import {Container} from "cargo";

Container.get("some unique identifier");
```
### delete

```ts
import {Container} from "cargo";

Container.remove("some unique identifier");
```
### empty

```ts
import {Container} from "cargo";

Container.clear();
```