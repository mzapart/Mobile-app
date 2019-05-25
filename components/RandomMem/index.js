import React, { Component } from "react";
import { StyleSheet, Text, View, Button} from 'react-native';
const API = "https://some-random-api.ml/meme";

class RandomMem extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          mem: {},
          isLoading: false,
          error: null
        };
      }
    componentDidMount() {
        this.getRandomMem();
    }
    getRandomMem = () => {
        this.setState({ isLoading: true });
    
        fetch(API)
          .then(response => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error("Something went wrong ...");
            }
          })
          .then(data => this.setState({ mem: data, isLoading: false }))
          .catch(error => this.setState({ error, isLoading: false }));
      };
    render() {
       const { mem, isLoading, error } = this.state;
    
       if (error) {
         return console.error("błąd");
         ;
       }
    
       if (isLoading) {
         return <text>Loading ...</text>;
       }
    }  
}
export default RandomMem;
