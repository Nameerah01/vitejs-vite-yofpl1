import React,{Component} from 'react'
class Message extends Component{
  constructor(props){
    super(props)
    this.state={
      message:'Please subscribe my channel'
    }
  }
  changeMessage(){
    this.setState({
      message:'Thank you for subscribing my channel'
    })
  }
  render(){
    return(
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={()=>this.changeMessage()}>Subscribe</button>
      </div>
    )
  }
}
export default Message