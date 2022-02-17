

const posts =[
    {name:`post1`, text:"akşam olur..."},
    {name:`post2`, text:"akşam olur..."},
    {name:`post3`, text:"sabah olur nihayet..."},
    {name:`post4`, text:"akşam olur sabah..."}
];

function listposts(){
    posts.map(li=>{
        console.log(li);

    })

}

function newPost(p) {
    
    return new Promise((resolve, reject) => {
        posts.push(p);
        resolve(posts);
    });
}

async function showPosts() {
    await newPost({name:`post7`, text:"belki sabah belki akşam" })
    listposts();
}

showPosts();