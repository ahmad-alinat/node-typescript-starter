import 'reflect-metadata';
import {InversifyExpressServer} from "inversify-express-utils";
import * as bodyParser from 'body-parser';
import * as bluebird from "bluebird";

import container from "./config/ioc";

import './controllers/HomeController';
import './controllers/UserController';
import * as mongoose from "mongoose";

let server = new InversifyExpressServer(container);

// Connect to MongoDB
const mongoUrl = "mongodb://localhost:27017";
(<any>mongoose).Promise = bluebird;
mongoose.connect(mongoUrl, {useMongoClient: true}).then(
    () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
).catch(err => {
    console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
    // process.exit();
});

server.setConfig((app) => {
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
});

let serverInstance = server.build();
serverInstance.listen(3000);

console.log('Server started on port 3000 :)');