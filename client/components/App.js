class  App extends React.Component  {
  constructor(props) {
    super(props);

    this.state = {
      currentVid: 0,
      vidList: []
    };
  }

  onTitleClick(value) {
    console.log("I got clicked", value);
    this.setState({
      currentVid: value
    });
  }
 
  

  addVideosToVidList () {
    this.setState( {
      currentVid: 0,
      vidList: data
    });
  }


  componentDidMount() {
    this.getYouTubeVideos('cats');
  }

  getYouTubeVideos(query) {
    var options = {
      key: 'AIzaSyDhU2u_n7yn69At7CggqnfBpiP78k4yElI',
      max: 5,
      query: query
    };

    searchYouTube(options, (data) => {
      console.log("what is this", this);
      console.log("data is", data);
      this.setState ({
        currentVid: 0,
        vidList: data.items
      })
    }
    );
  }

  

  

  render () {
    
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer vid={this.state.vidList[this.state.currentVid]}/>
        </div>
        <div className="col-md-5">
          <VideoList vidlis={this.state.vidList} click={this.onTitleClick.bind(this)}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));




// var App = () => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer vid={exampleVideoData[0]}/>
//     </div>
//     <div className="col-md-5">
//       <VideoList vidlis={exampleVideoData}/>
//     </div>
//   </div>
// );

// ReactDOM.render(<App/>, document.getElementById('app'));


//exampleVideoData

