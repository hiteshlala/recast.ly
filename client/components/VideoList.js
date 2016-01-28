var VideoList = (props) => {
    console.log("props from VideoList", props.click);

    return (
      <div className="video-list media">
        {props.vidlis.map((item, i) => <VideoListEntry key={i} item={item} click={props.click.bind(this,i)}/>)}

      </div>
    );
};

window.VideoList = VideoList;
