import React , { Component } from 'react';
import firebase from 'firebase';

import { Media } from 'reactstrap';

class FileUpload extends Component {
    constructor(){

        super();
        this.state = {

            uploadValue : 0,
            picture: null
        };
        
        this.handleUpload = this.handleUpload.bind(this);
    }

    handleUpload(event){

        const file = event.target.files[0];
        const storageRef = firebase.storage().ref(`/fotos/${file.name}`);
        const uploadTask = storageRef.put(file);
        var urlPhoto = "";

        // Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed', function(snapshot){
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
    }
  }, function(error) {
    // Handle unsuccessful uploads
  }, () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    uploadTask.snapshot.ref.getDownloadURL().then((url) => { this.setState({ picture: url,uploadValue:100 })
    });
  });     
    }
    render(){
        return (

        <div>
            <progress value = {this.state.uploadValue} max="100"></progress>
            <br/>
            <input type="file" onChange={this.handleUpload}></input>
            <br/>
            <img width="520"  src={this.state.picture}/>
        </div>
        );
    }
}


export default FileUpload;