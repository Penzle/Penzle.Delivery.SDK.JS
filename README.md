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
  .getEntry('<CONTENT_ID>');
  

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

We welcome contributions to this library. If you are interested in contributing, please read the [CONTRIBUTING] (./CONTRIBUTING.md)file for more information on how to get started.

## Changelog and conventional commits

We use [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) to generate changelogs. Please follow the guidelines when contributing to this repository.

Here are a few examples of conventional commits:

- feat: Add new feature X to the application
- fix: Resolve bug causing crashing on launch
- docs: Update documentation for new feature Y
- style: Improve code formatting and readability
- refactor: Refactor code for better maintainability
- perf: Improve performance of feature Z
- test: Add new test cases for feature W
- chore: Update dependencies and remove unused files"
- revert: Revert changes made in previous commit
- build: Fix build errors and improve the build process"

Conventional commits follow the format <type>: <subject>. The type specifies what kind of change was made in the commit, while the subject describes the change itself. Additionally, the commit message should include a body explaining the change, as well as a footer containing any relevant information.
As an example, here is a conventional commit with the following format: **type**: **subject**:

**feat: Add new login feature to the application** 

The type of the commit is "feat", which stands for "feature", and the subject is "Add a user login feature to the application". Commit messages may also include a body with more details about the feature, such as the specific functionality implemented. In addition, it may include information such as the issue number or pull request.

Here is an example of a conventional commit with a scope in the format of **type(scope): subject**:

**fix(UserModule): Fix issue with user registration**

In this example, the type is "fix" which stands for "fix", the scope is "UserModule" which describes the part of the application that this commit is related to, and the subject is "Fix issue with user registration" which describes the change made in the commit. The commit message may also include a body that provides more details about the issue and how it was fixed, and a footer that includes any relevant information such as the issue number or pull request.

It is worth noting that scope is optional and it is not mandatory for all commits, it can be used to specify the part of the application that the commit is related to.


