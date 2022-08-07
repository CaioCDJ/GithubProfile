export default function jsonToArray(json){

    const list = [];

    for (let index = 0; index < json.length; index++) {
        
        list.push(json[index]);
    }

    return list ;
}


