const express  = require('express');
const { ApolloServer} = require('@apollo/server');
const bodyParser = require('body-parser');
const cors = require('cors');

async function startServer(){
    const app = express();
    const server = new ApolloServer({});
    app.use(bodyParser.json());
}