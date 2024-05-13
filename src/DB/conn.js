import { CosmosClient } from "@azure/cosmos"
import { query } from "express"

const client= new CosmosClient({
    endpoint:"https://cosmosrgeastus64966d23-24a4-4d79-9004db.documents.azure.com:443/",
    key:"***"
})
export const {database} = await client.databases.createIfNotExists({id:'mydb'})
export const {container}= await database.containers.createIfNotExists({id:"user"})
// async function createDatabaseAndContainer() {
//     const { database } = await client.databases.createIfNotExists({ id: "mydb" });
//     const { container } = await database.containers.createIfNotExists({ id: "user" });
//     console.log("Database and container created successfully");
// }

// createDatabaseAndContainer().catch(err => {
//     console.error("Error creating database and container:", err);
// });

// const item = {
//     name:"Bablu Choudhury",
//     age:25,
//     city:"Bhubaneswar"
// }

// const response = await container.items.create(item)
// const query2 ={query:"select * from user WHERE user.id = @id",
//                 parameters:[
//                     {
//                         name:'@id',
//                         value:'9aa09fe2-211e-4149-a4c9-10237426ec6a'
//                     }
//                 ]
// }
// const res= await container.items.query(query2).fetchAll()

// console.log(res.resources);
// const resource = await container.item("a6d3bd25-4114-49e3-aa3e-63de1ff42330").read()
// resource.resource.age=25
// resource.resource.name="Bhawani Sankar Choudhury"
// const resource2 = await container.item("a6d3bd25-4114-49e3-aa3e-63de1ff42330").replace(resource.resource)

// console.log(resource2.resource);

