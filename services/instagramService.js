import axios from 'axios';

const url = "https://www.instagram.com/eunoia.mia?__a=1";

export default async function getInstagramData(){
    return (await axios.get(url, {
        headers: {
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*"
        }
    })).data.graphql.user.edge_owner_to_timeline_media.edges;
}