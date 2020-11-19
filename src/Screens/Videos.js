import React from 'react'
import Video from '../Components/Video'

function Videos() {
    const videos = [
        {
            'username': "Madrid Guy",
            'time': "1 days ago",
            'caption': 'Real Madrid 3 - 1 Barcelona Highlights',
            'url': 'https://firebasestorage.googleapis.com/v0/b/vidbite-e79be.appspot.com/o/videos%2FHighlights%20FC%20Barcelona%20vs%20Real%20Madrid%20(1-3).mp4?alt=media&token=9a36ed91-a0c1-4d40-b001-3a649c87166f',
            'likes': 11,
            'comments': 3
        },
        {
            'username': "John Doe",
            'time': "7 days ago",
            'caption': 'For Sale: ___😊',
            'url': 'https://firebasestorage.googleapis.com/v0/b/vidbite-e79be.appspot.com/o/videos%2Fpexels-max-fischer-5890227.mp4?alt=media&token=758c1410-98e5-486a-a48a-6e6baa095321',
            'likes': 12,
            'comments': 9
        },
        {
            'username': "Kareem Isah",
            'time': "2 days ago",
            'caption': 'Some captions ',
            'url': 'https://firebasestorage.googleapis.com/v0/b/vidbite-e79be.appspot.com/o/videos%2Fpexels-cottonbro-5659608.mp4?alt=media&token=5f72ce76-5975-45cf-949c-da472a0008dd',
            'likes': 3,
            'comments': 2
        },
        {
            'username': "Micheal J",
            'time': "1 days ago",
            'caption': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            'url': 'https://firebasestorage.googleapis.com/v0/b/vidbite-e79be.appspot.com/o/videos%2Fpexels-olya-kobruseva-5453398.mp4?alt=media&token=02225ae6-b75c-4648-a12a-1a1bac8a1243',
            'likes': 1,
            'comments': 0
        },
    ]
    return (
        <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        backgroundColor: "rgb(205, 234, 243)",
        flexDirection: "column",
      }}
    >
      <div className="headerStory">
        <h1>Videos</h1>
      </div>
      <div
        style={{
          height: "92vh",
          padding: "30px",
          width: "100%",
          overflowY: "scroll",
        }}
      >
          {videos.map(vid=>{
            return  <Video data={vid} />

          })}
        {/* {story.map((str) => {
          return <h1>hwy</h1>
        })} */}
      </div>
    </div>
    )
}

export default Videos
