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
        debugger
        this.handleUpload = this.handleUpload.bind(this);
    }

    handleUpload(event){[0];

        const file = event.target.files[0];
        const storageRef = firebase.storage().ref(`/fotos/${file.name}`);
        const task = storageRef.put(file);

        task.on('state_changed',snapshot => {
            let percentage = (snapshot.byteTransferred /snapshot.totalBytes) * 100;
            this.setState({
                uploadValue: percentage

            })
        }, error =>{
            console.log(error.message)
        },()=>{
            this.setState({
              
                uploadValue: 100,
                picture: task.snapshot.downloadURL
            });
            debugger
        });
    }
    render(){
        return (

        <div>
            
            <br/>
            <input type="file" onChange={this.handleUpload}></input>
            <br/>
            <Media object width="520"  src={this.state.picture}></Media>
        </div>
        );
    }
}


export default FileUpload;