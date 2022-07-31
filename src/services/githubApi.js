

export default function githubApi(url){

    return new Promise((resolve,reject)=>{

        fetch(url)
        .then(res=>{
            res.json().then(json=>{
                resolve(json)
            })
        }).catch(err=>{
            reject(err);
        });


    })
}