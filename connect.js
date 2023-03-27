const { MongoClient } = require("mongodb")

async function main(){
    const uri = "mongodb+srv://assefanatenel:Nati@42@hana@cluster0.2ck7vnq.mongodb.net/?retryWrites=true&w=majority";

    const client =new MongoClient(uri);
   try{
    await client.connect();
   }catch(e){
    console.error(e);
   }finally{
     await client.close();
   }

main().catch(console.error);
}