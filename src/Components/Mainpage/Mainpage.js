import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from '../Facerec/Facerec';


import "./Mainpage.css"
import ImageLinkForm from '../Imagelinkform/Imagelinkform';
import Rank from '../Rank/Rank';

import axios from 'axios';


//You must add your own API key here from Clarifai.

const app = new Clarifai.App({
 apiKey: 'use your api key'
});

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class Mainpage extends Component {
  constructor() {
    
    super();
    



    
    
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
    //https://stackoverflow.com/questions/16493498/json-stringify-returns-object-object-instead-of-the-contents-of-the-object
      id: "",
      name:  ""  ,
         
      entries: 0 

      
    
       
      
    }
  }
  componentDidMount(){
    let store = sessionStorage.getItem("mydata") 
    
    if(store !== null){
      store = JSON.parse(store)
     
      const name = store.name 
      
      const url = "http://localhost:5000/users/" + name 
      axios.get(url)
      .then((res) =>{
        
        this.setState({
          id : res.data._id , 
          name : res.data.username , 
          entries : res.data.count 
        })
  
      })

    }



  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
    
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    this.setState({input : ""})

    
  
    app.models
      .predict(
        // HEADS UP! Sometimes the Clarifai Models can be down or not working as they are constantly getting updated.
        // A good way to check if the model you are using is up, is to check them on the clarifai website. For example,
        // for the Face Detect Mode: https://www.clarifai.com/models/face-detection
        // If that isn't working, then that means you will have to wait until their servers are back up. Another solution
        // is to use a different version of their model that works like: `c0c0ac362b03416da06ab3fa36fb58e3`
        // so you would change from:
        // .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
        // to:
        // .predict('c0c0ac362b03416da06ab3fa36fb58e3', this.state.input)
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
      .then(response => {
        
        if(response){
          const c = {cou : this.state.entries + 1 }
          const d = c.cou  
          this.setState({entries : d   })
          ///add/:name
          const uri = "http://localhost:5000/users//add/" + this.state.name 
          axios.post(uri , c )
          .then(()=>{
            console.log("response success ")

          })
          .catch((err) => console.log(err ))
          

        
         this.displayFaceBox(this.calculateFaceLocation(response))}
      })
      .catch(err => console.log(err));
  }

 
  render() {
    const {  imageUrl, box } = this.state;
    
    return (
      <div className="App">
         <Particles className='particles'
          params={particlesOptions}
        />
        {/* <Navigation /> */}
        
         <div>
              
              <Rank
                name={this.state.name}
                entries={this.state.entries}
              />
              <ImageLinkForm
                onInputChange={this.onInputChange}
                onButtonSubmit={this.onButtonSubmit}
                val = {this.state.input}
              />
              <FaceRecognition box={box} imageUrl={imageUrl} />
              
            </div>
       
            
        
      </div>
    );
  }
}

export default Mainpage;