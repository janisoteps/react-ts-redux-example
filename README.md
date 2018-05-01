

Zmags Interview Take Home Assignment
------------------------------------


### Overview

To help speed up some of the webpack config I decided to use create-react app as
my base. If this was a production project I would have set up all the webpack stuff
manually. To run the project enter commands below. If you use npm instead of yarn you
can just replace `yarn` with `npm`.


```sh
yarn
yarn start
```

### Technical Decisions

- I decided to use redux as is one of the leaders in React for state management. For
a project of this size it is really not needed it probably made things more complex.

- As always Typescript is a bit cumbersome when working with Redux and more functional
programming in general. Leads to a lot of boilerplate typing.

- I added in a couple of simple tests to demonstrate testing ability in the
files `mappers.test.ts` and `Story.test.tsx`. You can run tests by typing `yarn test`.
