---
sidebar_position: 1
---

# use-disclosure

## Import

```javascript
import { useDisclosure } from "@wandersonalwes/react-hooks";
```

## Usage

The useDisclosure hook is a powerful tool for managing boolean state in your React application. With this hook, you can easily create and manage controlled modals, popovers, and other similar components.

This hook provides `open`, `close` and `toggle` handlers, making it simple to manage the state of your components with just a few lines of code. Additionally, you can pass in optional `onOpen` and `onClose` callbacks to customize the behavior of your components when they are opened or closed.

Whether you're building a complex application with multiple components or just need a simple way to manage boolean state, the useDisclosure hook is a great choice. With its flexibility and ease of use, it can help you create better, more efficient components in no time.

```javascript
import { useDisclosure } from "@wandersonalwes/react-hooks";

function Demo() {
  const [opened, handlers] = useDisclosure();

  // Sets opened to true
  handlers.open();

  // Sets opened to false
  handlers.close();

  // Sets opened to true if it was false and vice versa
  handlers.toggle();
}
```

## Callbacks

```javascript
function useDisclosure(
  initialState: boolean,
  callbacks?: {
    onOpen?(): void;
    onClose?(): void;
  }
): [
  boolean,
  {
    open: () => void;
    close: () => void;
    toggle: () => void;
  }
];
```
