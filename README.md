# Contact List GraphQL Server

This project is aimed to provide an overview on how to connect your application with your own GraphQL server to resolve queries on your collections. 

Realm Sync alredy offers a GraphQL API to interact with your data without creating your own custom GraphQL Server, but in this project we are going to build one just to the sake of learning. 

This could also be good if you don't use Realm at all but you use MongoDB Atlas, because we are going to connect through MongoDB.

# Schema

This project is meant to be an application that allows to perform basic **CRUD** operations in a collection called `Contacts`

The Schema for the documents of that collection, is the following: 
```
{
  "title": "Contact",
  "bsonType": "object",
  "required": [
    "_id",
    "_partition",
    "firstName",
    "lastName"
  ],
  "properties": {
    "_id": {
      "bsonType": "objectId"
    },
    "_partition": {
      "bsonType": "string"
    },
    "firstName": {
      "bsonType": "string"
    },
    "lastName": {
      "bsonType": "string"
    }
  }
}
```

# Pre-requisits 

## For running the project

In order to be able to work with this project you will need to have `docker` installed on your system. In this project exists a 
1. `docker-compose.yml`file that provides instrucctions on *how to build this container*
2. `Dockerfile`with the instrucctions needed to run our own `nodejs`that is required to run this application
3. Sustitute you values in the `.env.master`file and rename it to `.env`

## For interact with the data

You will also need an **Atlas Cluster** keep in mind that you can work with the **Free tier option**. Follow this link for instruccions on *How to deploy your free cluster* [Docs](vhttps://docs.atlas.mongodb.com/tutorial/deploy-free-tier-cluster) 

Once deployed the cluster you will need to create a `database`, you can name whenever you want. You will also need to create a `Collection` called `Contacts` with the schema proposed on the [Schema](#schema) section. Keep in mind that you can extend this basic project to match your needs (but it will require to modify the files within)

# How to run.

Once you've completed the [prerequisite](#pre-requisits) part, if you execute 
```
docker-compose up -d --build
```
In the path where you've downloaded this project if will construct and run the project for you. The command for actually running this project is located in the `Dockerfile`file and is this one:
`nodemon index.js --exec babel-node -e js`

You will need to have available **port 5001** to run this project. If not please change it in the `docker-compose.yml`as well as in the `Dockerfile` 

## Without docker

You could also run this project without **docker**. You need to have `nodejs` and a package manager like `npn`. Just run this commands in the root folder of this project.

1. `npm install`
2. `nodemon index.js --exec babel-node -e js`

If everything runs ok, then when heading to:
```
http://localhost:5001/graphql
```
You will have access to `GraphiQL`, a powerfull yet simple GraphQL Client to run your queries.
