var App = () => (
  <div>
    <Nav />
    <div className="col-md-7">
      <VideoPlayer vid={exampleVideoData[0]}/>
    </div>
    <div className="col-md-5">
      <VideoList vidlis={exampleVideoData}/>
    </div>
  </div>
);

ReactDOM.render(<App/>, document.getElementById('app'));

/*
API key for my laptop assosciated with my gmail: AIzaSyDJTOorM_USaBhkr4_S_909zlMYplZ8qFo

*/