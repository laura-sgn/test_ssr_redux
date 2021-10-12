## Purpose of app
This is a dummy app to experiment with implementing SSR and Redux with Next.js.

Next.js provides the function (`getServerSideProps`)[https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering], which is used for fetching data. `getServerSideProps` is implemented on a page; each time a request is made to the page, `getServerSideProps` is executed and the page is pre-rendered.

In addition to `getServerSideProps`, Next.js also provides `getStaticProps` for data fetching. However, `getStaticProps` is only executed and the page re-rendered at **build** time.

The problem with using `getServerSideProps` (or `getStaticProps`) with Redux is that that data obtained from `getServerSideProps` is added into the Redux store on the server-side, but when the page loads in the browser a `__NEXT_REDUX_WRAPPER_HYDRATE` action is dispatched and this resets the Redux store to an empty state. Essentially, there is a server and client redux store.

The (`next-redux-wrapper`)[https://github.com/kirill-konshin/next-redux-wrapper#getserversideprops] docs offer several suggestions on how to handle the issue, and the implementation would depend on the application.

In this app, a simple reducer has been implemented that just returns the existing server-side Redux state, meaning the client-side state is set to the server-side state.

To test the implementation dummy data was obtained from the fake API (JSON Placeholder)[https://jsonplaceholder.typicode.com/posts?_limit=6] and pre-rendered on the server. 

## Run the app
```
npm install
npm run dev
```

Application can be viewed at `localhost:3001`.
