class  App extends React.Component  {
  constructor(props) {
    super(props);

    this.state = {
      currentVid: 0,
      vidList: exampleVideoData
    };
  }

  onTitleClick(value) {
    console.log("I got clicked", value);
    this.setState({
      currentVid: value
    });
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

/*
API key for my laptop assosciated with my gmail: AIzaSyDJTOorM_USaBhkr4_S_909zlMYplZ8qFo

*/