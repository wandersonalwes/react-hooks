---
sidebar_position: 1
---

# use-toggle

> The useToggle is a hook that allows you to toggle between values. It's useful for cases where you need to toggle between two or more options in a user interface.

## Import

```javascript
import { useToggle } from "@wandersonalwes/react-hooks";
```

## Usage

```tsx
import { useToggle } from "@wandersonalwes/react-hooks";

function Demo() {
  const [value, toggle] = useToggle(["light", "dark"]);

  return <button onClick={toggle}>{value}</button>;
}
```

## TypeScript

The `useToggle` is a generic function that accepts an optional type `T` to specify the type of values that can be toggled. The default type is string.

### Set Type

To specify the type of value that can be toggled, pass a generic type `T` as a parameter to the `useToggle` function. Here's an example of how to specify the type for a list of numbers:

```tsx
import { useToggle } from "@wandersonalwes/react-hooks";

function Demo() {
  const [value, toggle] = useToggle<number>([1, 2]);

  return <button onClick={toggle}>{value}</button>;
}
```

### Definition

The type definition of `useToggle` is as follows:

```tsx
function useToggle<T = string>(
  options?: readonly T[]
): readonly [T, () => void];
```

#### Where:

- `T`: is the generic type of the value that can be toggled. The default value is string.
- `options`: is a list of options that can be toggled.
- Returns a tuple containing the current value and the function to toggle the value.
