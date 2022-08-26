console.clear();
axios.get('https://jsonplaceholder.typicode.com/posts/99')
.then((res)=>console.log(res.data)).catch((err)=>{
   console.log(err);
})
axios.post('https://jsonplaceholder.typicode.com/posts/67',{
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
})
.then((response)=>console.log(response.data)).catch((err)=>console.log(err.message));
//update
axios.put('https://jsonplaceholder.typicode.com/posts/78',{
    method: 'PUT',
    body: JSON.stringify({
      title: 'Bangladesh is the most beautiful place in Bangladesh',
    }),
})
.then((response)=>{
    console.log(response.data)
}).catch((err)=>{
    console.log(err);
})

// //delete

axios.delete('https://jsonplaceholder.typicode.com/posts/78',{
    method: 'PUT',
    body: JSON.stringify({
      title: 'Bangladesh is the most beautiful place in Bangladesh',
    }),
})
.then((response)=>{
    console.log(response.data)
}).catch((err)=>{
    console.log(err);
})

//using async and await

const makeRequest=async (config)=>{
    return  await axios(config)
}
const createData=()=>{
    makeRequest({
        url:'https://jsonplaceholder.typicode.com/posts/78',
        methods:'POST',

        data:JSON.stringify({
            title:'foo',
            body:'bar',
            userId:1,
        }),

    })
    .then((response)=>{
        console.log(response.data)
    }).catch((err)=>{
       console.log(err.message);
    })
}
createData();

const UpdateData=()=>{
    makeRequest({
        url:'https://jsonplaceholder.typicode.com/posts/78',
        method:'PUT',
        data:JSON.stringify({
            title:'Software Enginner',
            body:'Abu Al Shahriar Rifat',
            userName:'2',
        })
    })
    .then((response)=>{
        console.log(response.data)
    }).catch((err)=>{
       console.log(err);
    })
}
UpdateData();

//Patch
const createDataPatching=()=>{
   makeRequest({
     url:'https://jsonplaceholder.typicode.com/posts/78',
     method:'PATCH',
     data:JSON.stringify({
       body:"Abu Al Musrad"
     })
   }).then((response)=>{
      console.log(response.data)
   }).catch((err)=>{
     console.log(err);
   })
}
createDataPatching();

// delete
const DeleteData=()=>{
    makeRequest({
        url:'',
        method:'Delete',
    })
    .then((response)=>{
        console.log(response.data)
    }).catch((err)=>{
     console.log(err);
    })
}
DeleteData();



