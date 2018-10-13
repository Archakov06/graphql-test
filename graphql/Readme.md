### Simple example with node + graphql.

**How to use**

```
yarn install 
yarn start
```

Server is available at [http://localhost:3000/graphql]http://localhost:3000/graphql

**How to test**

Open the interactive explorer [http://localhost:3000/graphiql](http://localhost:3000/graphiql)

Execute some tests like that:

*Especific user*

```graphql

{
  user(id: 2) {
    id
    name
    knowledge {
      language
      frameworks
    }
  }
}

```

*All users*

```graphql

{
  allUsers
  totalUsers
}

```