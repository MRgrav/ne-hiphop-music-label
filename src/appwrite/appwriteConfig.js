import { Client, Account, Databases, Storage } from "appwrite";

const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject(import.meta.env.VITE_PROJECT)

export const account = new Account(client);

export const databases = new Databases(client);

export const bucket = new Storage(client);