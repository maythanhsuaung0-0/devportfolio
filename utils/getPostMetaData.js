import fs from 'fs';
import matter from 'gray-matter';

export default function getPostMetaData(basePath) {
    const folder = basePath + "/";
    const files = fs.readdirSync(folder); // Get all files in the folder
    const mdFiles = files.filter((fn) => fn.endsWith('.md')); // Filter only md files
    const post = mdFiles.map((fn) => {
        const fileContent = fs.readFileSync(folder+fn,'utf8');
        const matterData= matter(fileContent);
        return {
            title:matterData.data.title,
            image:matterData.data.cover,
            category:matterData.data.category,
            date:matterData.data.date,
            readingTime:matterData.data.readingTime,
            subtitle:matterData.data.subTitles,
            slug:fn.replace('.md','')

        }
    
    })
    return post;
}