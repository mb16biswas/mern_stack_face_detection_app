import  {Component} from "react"
import {Redirect} from "react-router-dom"
import axios from 'axios';
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import "./Sign.css"



class  Sign extends Component{
    constructor(){
        super()
        let a = "sign"
        let data = sessionStorage.getItem("mydata")
        data = JSON.parse(data)
       
        
        if(data !== null){
            a = "admin"
        }
        
        this.state = {
            name : "" , 
            password : "",
            test : a  , 
            email : "" 
        }
    }
    onchangename = (e) =>{
        this.setState({name : e.target.value})
        

    }

    onchangeemail = (e) =>{
        this.setState({email : e.target.value})
        

    }
    onchangeemail1 = (e) =>{
        this.setState({email : e.target.value})
        

    }
    onchangepassword = (e) =>{
        this.setState({password : e.target.value})



    }

    onchangepassword1 = (e) =>{
        this.setState({password : e.target.value})


    }
    t1 = () =>{
       this.setState({test : "admin"})
    }

     
    submit = (e) =>{
        e.preventDefault()
        let a       
        if(this.state.name !== "" && this.state.password !== ""){
            
          
            
            
          
            const user = {
                username : this.state.name , 
                password : this.state.password , 
                email : this.state.email 
            }
           
            axios.post("https://face-deploy.herokuapp.com/users/add" , user)
            .then((res) => {
                a = res.data 
                // console.log("sign in ..... value of a  " , a)
                if(a === "false"){
                    this.setState({test : "sign"})
                    alert("this email already exits  ..")
                   

                }
                else{
                    let obj = {name : this.state.name ,  email: this.state.email, auth: "true" };
                    sessionStorage.setItem("mydata", JSON.stringify(obj));
                    this.setState({ test: "admin" });

                }
                
            })
            .catch((err) => {
                console.log(err)
                
})
            
        
}
} 
    to_signin = () =>{
        this.setState({test : "sign",
                        name : "" , 
                        password : "" , 
                        email : ""                })
    }
  
    login = () => {
        this.setState({test : "login" , 
                       name : "" , 
                       password : "" , 
                       email : ""  })
        
    }


    log_in = (e) =>{
        e.preventDefault()
        // let data = sessionStorage.getItem("mydata")
        // data = JSON.parse(data)

       
        // if(data !== null){
        //     sessionStorage.removeItem("mydata")
            
        // }
        let pass 
       

        const url = "https://face-deploy.herokuapp.com/users/login/" + this.state.email + "/" + this.state.password 
      
        
        axios.get(url)
       
        .then((res) =>{
            
            pass = res.data 
            console.log("log in .... route output " , pass )
          
            if(pass === "true"){
                let obj = {name : this.state.name , email: this.state.email ,  auth : "true"}
                sessionStorage.setItem("mydata" , JSON.stringify(obj))
                this.setState({test : "admin"})



            }
            else{
                alert("invalid")
            }


        })
        .catch((err) => console.log(err))
        


    }


    render(){
        
        const paperStyle={ 
            padding: 20,
            height: "80vh",
            margin: "auto",
            }
        const avatarStyle={backgroundColor:'#1bbd7e'}
        const btnstyle={margin:'8px 0'}
         
        if(this.state.test ===  "admin"){
            return(
                <Redirect to = "/admin"/>

            )
        }
        if(this.state.test ===  "sign"){
            return(
                
                
            <div className = "sig" > 
                
                    <Grid>
                        <Paper elevation={15} style={paperStyle}>
                            <Grid align='center'>
                                <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                                <h2>Sign In</h2>
                            </Grid>
                            <form onSubmit = {this.submit} >
                                <TextField label='Username' placeholder='username' 
                                            onChange={this.onchangename}
                                            type = "text"
                                            required
                                            value = {this.state.name} 
                                            fullWidth required  style = {{padding : 13}}/>

                                <TextField label='Emaili' placeholder='email'
                                        onChange={this.onchangeemail}
                                        value = {this.state.email}
                                        type='email' 
                                        required
                                        fullWidth required style = {{padding : 13}}/>
                                <TextField label='Password' placeholder='password'
                                        onChange={this.onchangepassword}
                                        value = {this.state.password} 
                                        type='password'
                                        required
                                        fullWidth required style = {{padding : 13}}/>
                                <FormControlLabel
                                    control={
                                    <Checkbox
                                        name="checkedB"
                                        color="primary"
                                    />
                                    }
                                    label="Remember me"
                                />
                                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>

                                <Typography > Do you have an account ?
                                        <Link  onClick={this.login} style = {{cursor: "pointer"}} >
                                            login  
                                    </Link>
                                </Typography>

                            </form>
                           
                        </Paper>
                    </Grid>

            </div>   
                  
            )

        }
        if(this.state.test ===  "login"){
            return(
                
                
            <div className = "sig">  
                 
                    <Grid>
                        <Paper elevation={15} style={paperStyle}>
                            <Grid align='center'>
                                <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                                <h2>Log in </h2>
                            </Grid>
                            <form onSubmit = {this.log_in} >
                                <TextField label='Emaili' placeholder='email'
                                        type = "email"
                                        onChange={this.onchangeemail1}
                                        value = {this.state.email}
                                        fullWidth required  style = {{padding : 13}}/>
                                
                                <TextField label='Password' placeholder='password' type='password'
                                            onChange={this.onchangepassword1}
                                            value = {this.state.password}
                                            fullWidth required style = {{padding : 13}}/>
                                <FormControlLabel
                                    control={
                                    <Checkbox
                                        name="checkedB"
                                        color="primary"
                                    />
                                    }
                                    label="Remember me"
                                />
                                <Button type='submit' color='primary' variant="contained" onClick={this.log_in} style={btnstyle} fullWidth>log in</Button>

                                <Typography > want to go the sing in page ?
                                        <Link  onClick={this.to_signin} style = {{cursor: "pointer"}} >
                                            sing in   
                                    </Link>
                                </Typography>

                            </form>
                            
                        </Paper>
                    </Grid>

            </div>   
                  
            )

        }
       
    }
}
export default Sign

