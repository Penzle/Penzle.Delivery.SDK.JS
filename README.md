# Penzle Delivery JavaScript SDK  

A JavaScript SDK for interacting with the Penzle Content Delivery API.

## Installation

### npm 

```
npm i @penzle/delivery-sdk --save
```

### UMD Bundles

When using UMD bundle and including this library in `script` tag on your `html` page, you can find it under the
`penzleDelivery` global variable.

Bundles are distributed in `dist/bundles` folder:

-   `dist/bundles/penzle-delivery.js`
-   `dist/bundles/penzle-delivery.min.js`

## Usage

To use the SDK, you will need to provide your Penzle Project ID and Access Token. You can find these in the Penzle web app, under Project > API keys.

### TypeScript & ES6

```typescript
import { createDeliveryClient } from '@penzle/delivery-sdk';

const client = createDeliveryClient({
  baseAddress: 'YOUR_BASE_ADDRESS',
  accessApiToken: 'YOUR_API_ACCESS_TOKEN',
});

client.entry.getEntries('article')
  .then(response => console.log(response.items))
  .catch(console.error);
```


### JavaScript & CommonJS

```javascript
const penzleDelivery = require('@penzle/delivery-sdk');

// initialize delivery client
const deliveryClient = penzleDelivery.createDeliveryClient({
  baseAddress: 'YOUR_BASE_ADDRESS',
  accessApiToken: 'YOUR_API_ACCESS_TOKEN',
});

// fetch items
const response = await deliveryClient.entry
  .getEntry('<ENTRY_ID>');
  

// read data of first item
const articleTitle = response.fields.title;
```
Be sure to keep your Access Token private and secure, as it allows access to your Penzle content.

## API

| Method | Description |
| ------ | ----------- |
| `createDeliveryClient(options: Object)` | Creates a new client instance with the provided options. |
| `getEntries(template:string, options: Object)` | Retrieves all entries in the current project. |
| `getEntry(entryId: String, options: Object)` | Retrieves a specific entry by ID. |
| `getAssets(options: Object)` | Retrieves all assets in the current project. |
| `getAsset(assetId: String, options: Object)` | Retrieves a specific asset by ID. |

## License

This SDK is released under the [MIT License](./LICENSE).

## Reach out to us

We welcome feedback, bug reports, and feature requests.

If you need help with this library, please contact the vendor support.

You can also open an issue on the GitHub repository or submit a pull request with improvements to the code.

If you have any questions or suggestions, please feel free to reach out to us by sending an email to support@penzle.com.

We are looking forward to hearing from you!

## Contribution

We welcome contributions to this library. If you are interested in contributing, please read the [CONTRIBUTING] (./CONTRIBUTING.md) file for more information on how to get started.
