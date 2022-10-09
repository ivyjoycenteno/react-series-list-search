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


App Overview:


- Home Page
<img width="1440" alt="home-page" src="https://user-images.githubusercontent.com/32505859/194772017-ec323206-4d17-4794-87ec-702c511f7ce0.png">


- Search List
<img width="1440" alt="Screen Shot 2022-10-10 at 1 57 12 AM" src="https://user-images.githubusercontent.com/32505859/194772129-01101f40-6102-4360-ad20-11a7b6fecd0f.png">


- Details View
<img width="1440" alt="details-view" src="https://user-images.githubusercontent.com/32505859/194772212-2d232912-638a-4472-a6ec-a03719297779.png">


- Throttle to low-end tier
<img width="1440" alt="low-end-tier" src="https://user-images.githubusercontent.com/32505859/194772259-12d3ec12-8feb-4be9-a39b-7219b89ca55d.png">

- Responsive Views
<img width="1440" alt="mobile-view" src="https://user-images.githubusercontent.com/32505859/194772344-d625e8e2-de70-42e3-af52-62ed489ff722.png">
<img width="1440" alt="tablet-view" src="https://user-images.githubusercontent.com/32505859/194772347-533c16b9-8379-4a1c-890c-42ac853086e4.png">
- Search via Url
<img width="1440" alt="search-via-url" src="https://user-images.githubusercontent.com/32505859/194772350-38ced069-88f4-479e-9751-d35c41d739bf.png">

