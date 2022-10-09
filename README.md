# react-series-list-search

This template should help get you started developing and setup the React application

## Project Setup

### Install Modules
```sh
npm install
```

### Compile and Build/Minify for Production

```sh
npm run webpack
```

### Compile and Hot-Reload for Development

```sh
npm run start
```


### Todo's:
- Pagination or progressive loading on the list.
    - Had run out of time exploring and researching on how to coordinate/sync pagination in the API and set pagination size to limit the number of records per page, to lazy-load data and optimize the performance. Currently, the API is returning 240 records per page.
- Create a favorite shows list.

### For improvement:
- Add more details or content, as well as, necessary hyperlinks to the texts.
- Sanitize texts that has html tags - parse to DOM.
- Improve look and feel.
- Change alerts to use modals for notifications and make a separate component for handling messages such as errors, success messages, etc..
- Change react hook store context to use redux-saga instead for handling state management or persistence for a more complex, future features.
