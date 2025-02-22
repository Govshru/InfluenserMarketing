import { Client,Databases,Storage,ID } from "appwrite";

const client=new Client();

client
.setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
.setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);

const databases=new Databases(client);
const storage =new Storage(client);


export {databases,storage}


// Client: This class is the foundation. It's used to establish a connection to your Appwrite server.
// Databases: This class provides methods for interacting with Appwrite's database service, allowing you to create, query, and manage collections and documents.
// Storage: This class provides methods for interacting with Appwrite's storage service, allowing you to upload, download, and manage files.
// ID: This object provides utility functions for generating unique IDs, which are often needed when creating new database documents or storage files.