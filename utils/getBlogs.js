import { Client } from "@notionhq/client";

 const notion = new Client({ auth: process.env.NOTION_SECRET});
export const fetchFromNotion = async () => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE,
  // filter: {
   //   or: [
   //     {
    //      property: 'In stock',
     //     checkbox: {
      //      equals: true,
       //   },
        //},
       // {
        //  property: 'Cost of next trip',
         // number: {
          //  greater_than_or_equal_to: 2,
        //  },
      //  },
    //  ],
  //  },
    sorts: [
      {
        property: 'created_at',
        direction: 'descending',
      },
    ],
  });


  return {
    props: {
      blogs: response.results,
    },
    revalidate: 1,
  };
}

export const fetchPage= async(pageId) =>{
 const res = await notion.pages.retrieve({
   page_id:pageId,
  }) 
  return {
   props:{
      pages:res 
    },
    revalidate:1,
  }
}
