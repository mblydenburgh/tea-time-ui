import React, { Component } from 'react'
import { install } from '@material-ui/styles';
install();
import Nav from '../components/Nav'
import TeaTable from '../components/table/TeaTable'


export default class extends Component {
  state = {
    teas:[]
  };

  async componentDidMount() {
    const teaApiResponse = await fetch("http://localhost:8080/api/tea")
    const teas = await teaApiResponse.json()
    this.setState({teas:teas})
  }

  render() {
    return(
      <React.Fragment>
        <Nav />
        <TeaTable teas={this.state.teas}/>
      </React.Fragment>
      )
  }

}