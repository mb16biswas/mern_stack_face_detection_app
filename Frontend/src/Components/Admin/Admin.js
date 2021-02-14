import React ,{Component} from 'react' 
import {Redirect} from "react-router-dom"
import Mainpage from "../Mainpage/Mainpage"
import Navbar from "../Navbar/Navbar"
import Board from "../Board/Board"


class Admin extends Component{
    constructor(){
        super()
        let a = ""
        let data = localStorage.getItem("mydata")
        data = JSON.parse(data)
        
        if(data !== null){
            a = "admin"
        }



        this.state = {
            test : a 

        }
    }
    logout = () =>{
        localStorage.removeItem("mydata")
        this.setState({test : "logout"})

    }
    score = () =>{
        this.setState({test : "score"})
    }
    cur_page = () =>{
        this.setState({test : "admin"})

    }


    render(){
        if(this.state.test === "admin"){
            return(
                <div>
                    <Navbar  logout = {this.logout}  score = {this.score}  cur_page =  {this.cur_page} />
                    <Mainpage/>
                    

                </div>
              
            )

        }
        else if(this.state.test === "logout"){
            return(
                <Redirect to = "/"/>
            )

        }
        else{
            return(
                <div>
                    <Navbar logout = {this.logout}  score = {this.score}  cur_page =  {this.cur_page}/>
                    <Board/>

                </div>

            )
          
        }
        
    }
} 

export default Admin 