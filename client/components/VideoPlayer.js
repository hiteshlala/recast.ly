var VideoPlayer = (props) => (
  <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={"https://www.youtube.com/embed/"+ props.vid.id.videoId + "?autoplay=1"} allowFullScreen></iframe>
    </div>
    <div className="video-player-details">
      <h3>{props.vid.snippet.title}</h3>
      <div>{props.vid.snippet.description}</div>
    </div>
  </div>
);

window.VideoPlayer = VideoPlayer;



/*

  var VideoPlayer = (props) => (
    <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" allowFullScreen></iframe>
      </div>
      <div className="video-player-details">
        <h3>Video Title</h3>
        <div>Video Description</div>
      </div>
    </div>
  );

  window.VideoPlayer = VideoPlayer;

 */