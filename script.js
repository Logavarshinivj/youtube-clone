var videoCardContainer=document.querySelector('.video-container');
let api_key="AIzaSyBAXAieCzqV4m1vh-QLCW6QqseXH-_ACbA"
let video_http="https://www.googleapis.com/youtube/v3/videos?"
let channel_http="https://www.googleapis.com/youtube/v3/channels?"

fetch(video_http + new URLSearchParams({
    key:api_key,
    part:'snippet',
    chart:'mostPopular',
    maxResults:1,
    regionCode:'IN'
}))

.then((res)=>res.json())
.then(data=>{
     console.log(data)
    data.items.forEach(item => {
        getChannelIcon(item)
        
    })
})
.catch((err) =>{
    console.log(err)
})

const getChannelIcon=(video_data)=>{
    fetch(channel_http + new URLSearchParams({
        key:api_key,
        part:'snippet',
        id:video_data.snippet.channelId                        

    }))
    .then((res)=>res.json())
    .then(data=>{
        video_data.channelThumbnail=data.items[0].snippet.thumbnails.default.url;
        //  console.log(video_data)
        makeVideoCard(video_data)
        // channel_retrieve(video_data)
      
        // makeVideoCard(video_data)
        

// const searchInput=document.querySelector('.search-bar')
// const searchBtn=document.querySelector('.search-btn')
// let searchLink1=`https://www.youtube.com/results?part=snippet&q=${searchInput.value}&type=channel&key=AIzaSyBAXAieCzqV4m1vh-QLCW6QqseXH-_ACbA`

//search for playlist and channels
searchBtn.addEventListener('click',()=>{
    let searchLink1=`https://www.youtube.com/results?part=snippet&q=${searchInput.value}&type=channel&key=AIzaSyBAXAieCzqV4m1vh-QLCW6QqseXH-_ACbA`
    if(searchInput.value.length){
        location.href=searchLink1
    }
})

    
    })

}

const makeVideoCard=(data)=>{
    console.log(data.snippet.title)
    videoCardContainer.innerHTML+=`
    <div class="video" onclick="location.href='https://youtube.com/watch?v=${data.id}'">
       <img src="${data.snippet.thumbnails.high.url}" class="thumbnail" alt="">
       <div class="content">
         <img src="${data.channelThumbnail}" class="channel-icon" alt="">
         <div class="info">
           <p class="title">${data.snippet.title}</p>
           <p class="channel-name">${data.snippet.channelTitle}</p>
           </div>
           </div>
           </div>

    `

}

const searchInput=document.querySelector('.search-bar')
const searchBtn=document.querySelector('.search-btn')

// let searchLink="https://www.youtube.com/results?search_query=";

// searchBtn.addEventListener('click',()=>{
//     if(searchInput.value.length){
//         location.href=searchLink + searchInput.value
//     }
// })


// // let channel_retrieve = "https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.channels.list?part=brandingSettings&mine=true?"
//  let url="https://youtube.googleapis.com/youtube/v3/channels?part=brandingSettings&id=HbTON0nb4DU&key=AIzaSyBAXAieCzqV4m1vh-QLCW6QqseXH-_ACbA"

 
// fetch(url)
// .then((res)=>res.json())
// .then(data=>{
//     // console.log(data)
// })

let api="AIzaSyBAXAieCzqV4m1vh-QLCW6QqseXH-_ACbA"
let channel="UCqwUrj10mAEsqezcItqvwEw"
// let channel1=data.id
// let playlistId="UUqwUrj10mAEsqezcItqvwEw"

let getPlaylists=()=>{
    //for uploaded videos and system generated playlists
     fetch(`https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${channel}&key=${api}`)
    // fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=statistics&id=${channel}&key=${api}`)
    // fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channel}&key=${api}`)

    //fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=${playlistId}&key=${api}`)
    .then(response=>{
        return response.json()
    })
    .then(data=>{
        console.log(data)
        for(i in data.items){ 
            var a=data.items[i].id
            console.log(a)
        console.log(data.items[i].id)
        }
        //for playlistitems
        fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=${a}&key=${api}`)
    .then(response=>{
        return response.json()
    })
    .then(data=>{
        console.log(data)
    })
        
    })
    //for subscriptions count
    fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=statistics&id=${channel}&key=${api}`)
    .then(response=>{
        return response.json()
    })
    .then(data=>{
        console.log(data)
   })
    
    
}
getPlaylists()

// const searchInput=document.querySelector('.search-bar')
// const searchBtn=document.querySelector('.search-btn')
// let searchLink1=`https://www.youtube.com/results?part=snippet&q=${searchInput.value}&type=channel&key=AIzaSyBAXAieCzqV4m1vh-QLCW6QqseXH-_ACbA`

//search for playlist and channels
searchBtn.addEventListener('click',()=>{
    let searchLink1=`https://www.youtube.com/results?part=snippet&q=${searchInput.value}&type=channel&key=AIzaSyBAXAieCzqV4m1vh-QLCW6QqseXH-_ACbA`
    if(searchInput.value.length){
        location.href=searchLink1
    }
})



