import { Client } from '@notionhq/client';
const notionSecret = process.env.NOTION_SECRET;
const notionDatabaseID = process.env.NOTION_DATABASE;

const notion = new Client({
auth:notionSecret,
})

export async function GET(){
  if(!notionSecret || !notionDatabaseID) throw new Error('Missing notion secret or database');
  const query = await notion.databases.query({
  database_id:notionDatabaseID,
}) 

 return Response.json({query});
}
