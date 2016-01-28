var VideoList = (props) => {
    console.log("props from VideoList", props);
    return (
      <div className="video-list media">
        {props.vidlis.map((item, i) => <VideoListEntry key={i} item={item}/>)}

      </div>
    );
};

window.VideoList = VideoList;
