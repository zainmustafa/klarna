
import * as firebase from "firebase";
import NPMPackage from "../../package.json";

/**
 * Configuration
 * @module config
 */

const config = {
    name: NPMPackage.name,
    title: NPMPackage.title,
    description: NPMPackage.description
};

firebase.initializeApp({
    apiKey: "AIzaSyALVgl0hJ95YZcH1MYJL9ZREPZE7gZyOBs",
    authDomain: "walturndemo.firebaseapp.com",
    databaseURL: "https://walturndemo.firebaseio.com",
    projectId: "walturndemo",
    storageBucket: "walturndemo.appspot.com",
    messagingSenderId: "494586801404"
});

export default config;
