# Setup

```
npm install
TOKEN=<client-token> node index.js
```

# Code structure

Different bot functions should be contained within their own module file in src/modules. See ping.js for an example. Each module must have an `initialize` function that takes a client object and registers listeners.

Modules can be enabled and disabled by adding or removing them from the list in bot_config.json.

