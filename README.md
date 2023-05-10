[![npm version](https://badge.fury.io/js/@penzle%2Fdelivery-sdk.svg)](https://badge.fury.io/js/@penzle%2Fdelivery-sdk)
[![Build](https://github.com/Penzle/Penzle.Delivery.SDK.JS/actions/workflows/test-and-release.yaml/badge.svg)](https://github.com/Penzle/Penzle.Delivery.SDK.JS/actions/workflows/test-and-release.yaml)
[![Known Vulnerabilities](https://snyk.io/test/github/Penzle/Penzle.Delivery.SDK.JS/badge.svg)](https://snyk.io/test/github/Penzle/Penzle.Delivery.SDK.JS)
[![GitHub license](https://img.shields.io/github/license/Penzle/Penzle.Delivery.SDK.JS.svg)](https://github.com/Penzle/Penzle.Delivery.SDK.JS)
![Gzip browser bundle](https://img.badgesize.io/https://cdn.jsdelivr.net/npm/@penzle/delivery-sdk@latest/dist/bundles/penzle-delivery.min.js?compression=gzip)
![W3C](https://img.shields.io/badge/w3c-validated-brightgreen)
[![Discord](https://img.shields.io/discord/991274367197663242?label=Discord&logo=Discord&logoColor=white)](https://discord.gg/2aK8pF6WK2)

# Penzle Delivery JavaScript SDK  

The Penzle JavaScript Delivery SDK is a versatile client library designed to simplify the process of retrieving data from the Penzle Content Delivery API. It is compatible with both browser and Node.js environments.

## Installation

To install the JavaScript Delivery SDK, you can either use `npm` or take advantage of global CDNs like `jsdelivr`.

### npm 

To install the SDK via `npm`, run this command:

```
npm i @penzle/delivery-sdk --save
```

### UMD Bundles

For UMD bundles, include the library using a `script` tag on your `HTML` page. The library will be accessible through the `penzleDelivery` global variable.

UMD bundles can be found in the `dist/bundles` folder.

-   `dist/bundles/penzle-delivery.js`
-   `dist/bundles/penzle-delivery.min.js`

#### CDN Options

Choose between two available CDN options for the Penzle JavaScript Delivery SDK: the standard UMD bundle and the minified UMD bundle.

##### Standard UMD Bundle (penzle-delivery.js)

![Gzip UMD bundle](https://img.badgesize.io/https://cdn.jsdelivr.net/npm/@penzle/delivery-sdk@latest/dist/bundles/penzle-delivery.js?compression=gzip)

Use the following link to include the standard UMD bundle:

```
https://cdn.jsdelivr.net/npm/@penzle/delivery-sdk@latest/dist/bundles/penzle-delivery.js
```

##### Minified UMD Bundle (penzle-delivery.min.js)

![Gzip UMD Minified bundle](https://img.badgesize.io/https://cdn.jsdelivr.net/npm/@penzle/delivery-sdk@latest/dist/bundles/penzle-delivery.min.js?compression=gzip)

Use the following link to include the minified UMD bundle:

```
https://cdn.jsdelivr.net/npm/@penzle/delivery-sdk@latest/dist/bundles/penzle-delivery.min.js
```

## Using Penzle Delivery SDK in Different Environments

The usage of the Penzle Delivery SDK in various environments and formats.

### TypeScript & ES6

This section demonstrates how to use the Penzle Delivery SDK with TypeScript and ES6. It provides an example of importing the SDK, initializing the delivery client, retrieving article entries, and accessing data from the first item.

```typescript
import { createDeliveryClient } from '@penzle/delivery-sdk';

// Initialize the delivery client
const deliveryClient = createDeliveryClient({
  accessApiToken: '<YOUR_API_ACCESS_TOKEN>'
});

// Retrieve article entries
const entries = await deliveryClient.entry.getEntries<Article>('<DATA_TEMPLATE_CODENAME>');

// Access the data of the first item
const title = entries[0].fields.title;
```

### JavaScript & CommonJS

This section showcases the use of the Penzle Delivery SDK with JavaScript and CommonJS. It demonstrates how to require the SDK, initialize the delivery client, retrieve article entries, and access data from the first item.

```javascript
const penzleDelivery = require('@penzle/delivery-sdk');

// Initialize the delivery client
const deliveryClient = penzleDelivery.createDeliveryClient({
    accessApiToken: '<YOUR_API_ACCESS_TOKEN>'
});

// Retrieve article entries
const entries = await deliveryClient.entry.getEntries('<DATA_TEMPLATE_CODENAME>');

// Access the data of the first item
const title = entries[0].fields.title;
```

## HTML & UMD & CDN

This section illustrates how to incorporate the Penzle Delivery SDK in an HTML file using UMD and CDN. The example provided demonstrates how to include the SDK using a script tag, initialize the delivery client, retrieve article entries, and display the results in the browser console.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Penzle Delivery JavaScript SDK</title>
        <script
            type="text/javascript"
            src="https://cdn.jsdelivr.net/npm/@penzle/delivery-sdk@latest/dist/bundles/penzle-delivery.min.js"
        ></script>
    </head>
    <body>
        <script type="text/javascript">
            var PenzleDelivery = window['penzleDelivery'];

            var deliveryClient = PenzleDelivery.createDeliveryClient({
                accessApiToken: '<YOUR_API_ACCESS_TOKEN>'
            });

            deliveryClient.entry.getEntries('<DATA_TEMPLATE_CODENAME>')
              .then(response => console.log(response))
              .catch(console.error);
        </script>
        <h1>Please see console</h1>
    </body>
</html>
```

## API SDK Documentation

### createDeliveryClient Function

This function creates a new instance of the `DeliveryPenzleClient` with the provided configuration settings.

| Function                 | Parameters                 | Return Type               | Description                                                                                     |
| ------------------------ | -------------------------- | ------------------------- | ----------------------------------------------------------------------------------------------- |
| createDeliveryClient     | settings: DeliveryConfig   | DeliveryPenzleClient      | Creates a new instance of the DeliveryPenzleClient with the provided configuration settings.    |

- `settings` is a required parameter for the `createDeliveryClient` function. It represents the configuration settings for the `DeliveryPenzleClient`.

### DeliveryConfig Settings

The `DeliveryConfig` represents the configuration settings required for interacting with the Penzle Delivery API.

| Property          | Type                   | Description                                                                                                   |
| ----------------- | :--------------------: | ------------------------------------------------------------------------------------------------------------- |
| accessApiToken    | string                 | The API access token required for authenticating requests to the Penzle Delivery API.                        |
| baseAddress       | string                 | (Optional) The base address for the Penzle Delivery API. Defaults to 'https://api.penzle.com'.               |
| project           | string                 | (Optional) The identifier for a specific project within the Penzle platform. Defaults to the 'main' project. |
| environment       | string                 | (Optional) The identifier for a specific environment within the project. Defaults to the 'main' environment. |
| retryStrategy     | RetryStrategySettings  | (Optional) Configuration settings for the retry strategy used to handle request failures.                     |
| httpService       | ApiService<any>        | (Optional) An instance of the ApiService for making HTTP requests, allowing customization of the HTTP service.|
| defaultLanguage   | string                 | (Optional) The default language for content entries when a specific language is not provided.                 |
| previewMode       | boolean                | (Optional) A boolean flag for enabling preview mode to fetch draft content.                                  |
| globalHeaders     | Header[]               | (Optional) A collection of global headers included in every request to the Penzle Delivery API.               |

### API Entry Client

The `EntryClient` class interacts with the Penzle Delivery API's entry endpoints, providing methods for fetching and managing content entries.

| Method              | Parameters                                     | Return Type                                         | Description                                                                                                   |
| ------------------- | ---------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| getPaginationEntries| template: string, query?: QueryEntryBuilder    | Promise<PagedList<Entry<TEntry>>>                    | Fetches a paginated list of entries based on the provided template and query.                                 |
| getEntries          | template: string, query?: QueryEntryBuilder    | Promise<Entry<TEntry>[]>                             | Fetches an array of entries based on the provided template and query.                                        |
| getEntry            | id: string, options: EntryFilter               | Promise<Entry<TEntry>>                               | Fetches an entry by its ID and applies optional filter options.                                              |
| getEntryBySlug      | slug: string, options: EntryFilter             | Promise<Entry<TEntry>>                               | Fetches an entry by its slug and applies optional filter options.                                            |

- `template` is a required parameter for `getPaginationEntries` and `getEntries` methods, used for filtering entries.
- `query` is an optional parameter for `getPaginationEntries` and `getEntries` methods, used for filtering and sorting entries.
- `id` is a required parameter for `getEntry` method, representing the ID of the entry to fetch.
- `options` is an optional parameter for `getEntry` and `getEntryBySlug` methods, used for filtering the results.
- `slug` is a required parameter for `getEntryBySlug` method, representing the slug of the entry to fetch.

### API Asset Client

The `AssetClient` class interacts with the Penzle Delivery API's asset endpoints, providing methods for fetching and managing assets.

| Method           | Parameters                                     | Return Type                                         | Description                                                                                                   |
| ---------------- | ---------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| getAsset         | id: string, options: AssetFilter               | Promise<Response<Asset>>                             | Fetches an asset by its ID and applies optional filter options.                                               |
| getAssets        | query?: QueryAssetBuilder                      | Promise<Response<PagedList<Asset>>>                  | Fetches a list of assets based on the provided QueryAssetBuilder instance.                                    |

- `id` is a required parameter for `getAsset` method, representing the ID of the asset to fetch.
- `options` is an optional parameter for `getAsset` method, used for filtering the results.
- `query` is an optional parameter for `getAssets` method, used for filtering and sorting assets.

## Querying & Search Methods

### Select Fields

The `SelectFields` method is a powerful tool in optimizing the performance and efficiency of requests made to your API. By allowing the specification of only those fields that are needed for a particular operation, it can dramatically reduce the size of the API response. This, in turn, translates to quicker response times and lower resource usage, both of which are critical factors in ensuring smooth and responsive application performance.

```typescript
// Instantiate a new QueryEntryBuilder object
const query = new QueryEntryBuilder();

// Add a array of the desired field names
// Rather than retrieving the entire data structure, the API will only return the fields specified in this array.
query.selectFields(['title', 'description']);

// Execute the query on the 'article' data template using the EntryClient's getEntries method
const articles = await this.client.entry.getEntries<Article>('article', query);
```

The API will only return data for the 'title' and 'description' fields, rather than the complete data set.

This becomes particularly beneficial when working with large data structures, where a full data retrieval could be significantly slower due to the larger amount of data being transferred. With `SelectFields`, you can maintain efficient operations by requesting only the necessary data.

### Search Content

The following code snippet demonstrates how to fetch all content items of type **Article** where the **title** field matches the string **Penzle**. Filters are used as query parameters and can be combined for more complex querying.

```typescript
// Instantiate a new QueryEntryBuilder object
const query = new QueryEntryBuilder();

// Add a filter condition to the query where the 'title' field equals 'Penzle'
query.equals('title', 'Penzle');

// Execute the query on the 'article' data template using the EntryClient's getEntries method
// The returned articles will only include those where the title is 'Penzle'
const articles = await this.client.entry.getEntries<Article>('article', query);
```

Supported filters:  `any`, `contains`, `equals`, `greaterThan`,
`greaterThanOrEqual`, `in`, `lessThan`, `lessThanOrEqual`, `empty`, `notEmpty`,
`notEquals`, `notIn`.

#### Search Methods

The following table describes the available search methods that can be used to manipulate data in queries. They can be used individually or combined to create complex queries that match your precise requirements.


| Filter                | Description                                                                                       |
| --------------------- | ------------------------------------------------------------------------------------------------- |
| any                   | The field with an array of values contains any of the specified list of values.                   |
| contains              | The field with an array of values includes the specified value.                                   |
| equals                | The field value matches the specified value.                                                      |
| greaterThan           | The field value is greater than the specified value.                                              |
| greaterThanOrEqual    | The field value is greater than or equal to the specified value.                                  |
| in                    | The field value is in the specified list of values, or the field with an array of values contains the specified list of values. |
| lessThan              | The field value is less than the specified value.                                                 |
| lessThanOrEqual       | The field value is less than or equal to the specified value.                                     |
| empty                 | The property value is empty.                                                                      |
| notEmpty              | The property value is not empty.                                                                  |
| notEquals             | The property value does not match the specified value.                                            |
| notIn                 | The property value is not in the specified list of values.                                        |

These filters provide a powerful and flexible way to query data in the Penzle Delivery API.

### Sort Data

In the process of data retrieval, it's often desirable to have the returned data sorted in a specific order. This could be based on any data field that's relevant to your application. The `QueryEntryBuilder` class provides methods to sort data in ascending or descending order, offering flexibility in how you manage and present data.


Here's a more detailed look into the sorting methods provided:

1. `orderByDescending(fieldName: string)`. This method sorts the data in descending order based on the field name provided. For instance, if you're working with a collection of articles and you wish to have them sorted by title in descending order (Z to A), you'd use this method.

```typescript
const query = new QueryEntryBuilder();

// Sort articles by 'title' in descending order
query.orderByDescending('title');

// Fetch articles
const articles = await this.client.entry.getEntries<Article>('article', query);
```

2. `orderByAscending(fieldName: string)`. This method, as you might guess, does the opposite of orderByDescending. It sorts the data in ascending order. Using the same articles example, if you wanted to sort the articles by title in ascending order (A to Z), this is the method you'd use.

```typescript
const query = new QueryEntryBuilder();

// Sort articles by 'title' in ascending order
query.orderByAscending('title');

// Fetch articles
const articles = await this.client.entry.getEntries<Article>('article', query);
```

3. `orderBy(fieldName: string, direction: string)`. The orderBy method offers the most flexibility, allowing you to specify both the field to sort by and the direction of the sort (either 'ASC' for ascending or 'DESC' for descending).

```typescript
const query = new QueryEntryBuilder();

// Sort articles by 'title' in ascending order
query.orderBy('title', 'ASC');

// Fetch articles
const articles = await this.client.entry.getEntries<Article>('article', query);
```

### Pagination

Pagination is a technique used in data retrieval processes to manage how much data is returned in a single request. Instead of returning all the data at once, which can be inefficient and resource-intensive, data is divided into smaller parts known as pages.

In the context of the `QueryEntryBuilder` class, we provide two methods, `pageSize(size: number)` and `page(page: number)`, to handle pagination.

- `pageSize(size: number)`. This method sets the size of each page or the number of items to be returned in each request. The size parameter is a number that indicates the number of items per page.
- `page(page: number)`. This method sets which page of data to return. The page parameter is a number that indicates the page number.

```typescript
const query = new QueryEntryBuilder();
// Set the number of items per page to 10 and fetch the second page of data
query.pageSize(10).page(2);
```

## Using the `includes` Parameter

The `includes` parameter is a powerful tool that lets you streamline your requests by embedding related resources directly within the response. This parameter's value corresponds to the depth of the relationships you want to include.

For instance, using `include(1)` signifies that you want to include one level of related resources. In the context of fetching articles, this means the API not only returns the articles but also the associated author information, all in one request.

```typescript
const query = new QueryEntryBuilder();

// Indicates that the query should include one level of related resources. 
// This helps in reducing the number of API calls needed to fetch all relevant data, optimizing performance by minimizing network requests.
query.include(1);
```

## Preview Mode

The Penzle Delivery SDK offers two ways to enable the preview mode: globally and per query.

### Enable Preview Mode Globally

Globally enabling the preview mode means that all the queries you execute through the client will fetch the preview (unpublished) versions of the content items. This can be particularly useful during development or testing stages where you frequently need to view the changes before publishing.

You can enable the preview mode globally when you initialize the `DeliveryClient`.

```typescript
import { createDeliveryClient } from '@penzle/delivery-sdk';

const deliveryClient = createDeliveryClient({
  accessApiToken: '<YOUR_API_ACCESS_TOKEN>',
  // This option sets the client to always use the preview mode.
  usePreviewMode: true 
});
```

### Enable Preview Mode Per Query

In some cases, you may want to enable the preview mode only for specific queries. The Penzle Delivery SDK allows you to do this through the `QueryEntryBuilder`.

```typescript
const query = new QueryEntryBuilder();
query.usePreviewMode();
```

By calling `usePreviewMode()` on a `QueryEntryBuilder` instance, the preview mode will be enabled for that specific query. This allows you to fetch the preview version of a content item without affecting other queries.

## Localization 

You can specify the language for content retrieval in two ways: globally (when initializing the `DeliveryClient`) or per query.

### Set Default Language Globally

Setting a default language globally means that all the queries you execute through the client will fetch the content items in the specified language. This is particularly useful if your application is primarily targeted towards users speaking a specific language.

You can set the default language when initializing the `DeliveryClient`:

```typescript
import { createDeliveryClient } from '@penzle/delivery-sdk';

const deliveryClient = createDeliveryClient({
  accessApiToken: '<YOUR_API_ACCESS_TOKEN>',
  defaultLanguage: 'en-GB'
});
```

### Set Language Per Query

In some scenarios, you may want to retrieve content in different languages for specific queries. The Penzle Delivery SDK allows you to do this using the `QueryEntryBuilder`.

```typescript
const query = new QueryEntryBuilder();
query.withLanguage('en-GB');
```

By calling `withLanguage('en-GB')` on a `QueryEntryBuilder` instance, the client will fetch the content for that specific query in British English.

## Custom HTTP Service Implementation

The Penzle SDK provides flexibility by allowing you to incorporate your custom HTTP service. This feature is particularly useful in scenarios where you want to modify request behaviors, mock responses for testing purposes, or implement your unique service that adheres to your business rules.

Your custom HTTP service should implement the `ApiService` interface defined in the SDK.

You can find an example of a custom HttpService implementation for testing purposes in the Penzle SDK repository at [https://github.com/Penzle/Penzle.Core.SDK.JS](https://github.com/Penzle/Penzle.Core.SDK.JS).

After you have created your custom `HttpService`, you can utilize it during the initialization of the delivery client as follows:

```typescript
const deliveryClient = createDeliveryClient({
    accessApiToken: '<YOUR_API_ACCESS_TOKEN>',
    httpService: YourHttpService
});
```

## Customizing Requests with Query Configuration

The `withQueryConfig` method allows you to customize your request on a per-query basis by passing a `QueryConfig` object. This configuration can include custom headers and a cancellation token, providing you with more control over individual requests. The method is part of the `QueryEntryBuilder` class.

```typescript
const query = new QueryEntryBuilder();

query.withQueryConfig({customHeaders: YourCustomHeaders,cancellationToken: YourCancellationToken})
```

## Generating Query URL

If you need to extract the actual URL of a request before executing it, you can use the `getEntriesUrlQuery()` function associated with your query.

```typescript
const query = 
    new QueryEntryBuilder()
        .equals('title', 'Penzle')
        .withLanguage('en-GB')
        .orderByDescending('publicationDate');
        .include(1);

const queryUrl = this.client.entry.getEntriesUrlQuery('article', query);

console.log(queryUrl);
```

## Running Tests

In order to validate your code and ensure its correct functioning, it's essential to run tests. Note that for certain tests, specifically those run through Karma, the Google Chrome browser is required.

-   `npm run test:browser` This command initiates the execution of test cases in the Google Chrome browser.

## Reach out to us

### Need Help Using This Library?

If you need any assistance regarding the use of this library, we have several resources available to support you:
-  **Questions**: Reach out to our [support](https://www.penzle.com/support)
- **Instant Messaging**: For more immediate, casual conversation, our
[![Discord Channel](https://img.shields.io/discord/991274367197663242?label=Discord&logo=Discord&logoColor=white)](https://discord.gg/2aK8pF6WK2) is a great place to connect with both the team and other users.

### Encountered an Issue or Have a Suggestion

If you've come across a bug or have an idea for a new feature, we would love to hear from you!
You can also open an issue on the GitHub repository or submit a pull request with improvements to the code: [![File an issue](https://img.shields.io/badge/-Create%20Issue-6cc644.svg?logo=github&maxAge=31557600)](https://github.com/Penzle/Penzle.Delivery.SDK.JS/issues/new)

### Need to Share Sensitive Information or Have Additional Inquiries?

If you need to share private data or have any other questions that weren't addressed, please don't hesitate to
[reach out](https://www.penzle.com/support).

## Contribution

We welcome contributions to this library. If you are interested in contributing, please read the [CONTRIBUTING](./CONTRIBUTING.md) file for more information on how to get started. Your help is appreciated, and every contribution counts in making our project better.

## Code of Conduct

Our aim is to foster a community that is respectful, inclusive, welcoming, and free from any form of harassment. We want all participants to feel safe, regardless of their gender identity, sexual orientation, disability, physical appearance, socioeconomic status, body size, ethnicity, nationality, experience level, age, religious beliefs, or any other aspect of identity.

[Read our full Code of Conduct](./CODE_OF_CONDUCT.md).

## License

This SDK is released under the [MIT License](./LICENSE).
