(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{166:function(e,t,a){},184:function(e,t,a){},445:function(e,t,a){},446:function(e,t,a){},447:function(e,t,a){},448:function(e,t,a){},449:function(e,t,a){},451:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(14),c=a.n(i),r=(a(166),a(35)),o=a(36),l=a(39),u=a(38),d=a(54),h=a(16),j=a(23),b=a.n(j),m=a(482),p=a(486),g=a(492),O=a(490),x=a(488),f=a(154),v=a(489),y=a(100),S=a.n(y),w=a(487),C=a(491),N=(a(184),a(4)),k=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a),(e=t.call(this)).onchangename=function(t){e.setState({name:t.target.value})},e.onchangeemail=function(t){e.setState({email:t.target.value})},e.onchangeemail1=function(t){e.setState({email:t.target.value})},e.onchangepassword=function(t){e.setState({password:t.target.value})},e.onchangepassword1=function(t){e.setState({password:t.target.value})},e.t1=function(){e.setState({test:"admin"})},e.submit=function(t){if(t.preventDefault(),""!==e.state.name&&""!==e.state.password){var a={username:e.state.name,password:e.state.password,email:e.state.email};b.a.post("https://face-deploy.herokuapp.com/users/add",a).then((function(t){if("false"===t.data)e.setState({test:"sign"}),alert("this email already exits  ..");else{var a={name:e.state.name,email:e.state.email,auth:"true"};sessionStorage.setItem("mydata",JSON.stringify(a)),e.setState({test:"admin"})}})).catch((function(e){console.log(e)}))}},e.to_signin=function(){e.setState({test:"sign",name:"",password:"",email:""})},e.login=function(){e.setState({test:"login",name:"",password:"",email:""})},e.log_in=function(t){t.preventDefault();var a="https://face-deploy.herokuapp.com/users/login/"+e.state.email+"/"+e.state.password;b.a.get(a).then((function(t){if("true"===t.data){var a={name:e.state.name,email:e.state.email,auth:"true"};sessionStorage.setItem("mydata",JSON.stringify(a)),e.setState({test:"admin"})}else alert("invalid")})).catch((function(e){return console.log(e)}))};var n="sign",s=sessionStorage.getItem("mydata");return null!==(s=JSON.parse(s))&&(n="admin"),e.state={name:"",password:"",test:n,email:""},e}return Object(o.a)(a,[{key:"render",value:function(){var e,t,a,n={padding:20,height:"80vh",margin:"auto"},s={backgroundColor:"#1bbd7e"},i={margin:"8px 0"};return"admin"===this.state.test?Object(N.jsx)(h.a,{to:"/admin"}):"sign"===this.state.test?Object(N.jsx)("div",{className:"sig",children:Object(N.jsx)(m.a,{children:Object(N.jsxs)(p.a,{elevation:15,style:n,children:[Object(N.jsxs)(m.a,{align:"center",children:[Object(N.jsx)(g.a,{style:s,children:Object(N.jsx)(S.a,{})}),Object(N.jsx)("h2",{children:"Sign In"})]}),Object(N.jsxs)("form",{onSubmit:this.submit,children:[Object(N.jsx)(O.a,(e={label:"Username",placeholder:"username",onChange:this.onchangename,type:"text",required:!0,value:this.state.name,fullWidth:!0},Object(d.a)(e,"required",!0),Object(d.a)(e,"style",{padding:13}),e)),Object(N.jsx)(O.a,(t={label:"Emaili",placeholder:"email",onChange:this.onchangeemail,value:this.state.email,type:"email",required:!0,fullWidth:!0},Object(d.a)(t,"required",!0),Object(d.a)(t,"style",{padding:13}),t)),Object(N.jsx)(O.a,(a={label:"Password",placeholder:"password",onChange:this.onchangepassword,value:this.state.password,type:"password",required:!0,fullWidth:!0},Object(d.a)(a,"required",!0),Object(d.a)(a,"style",{padding:13}),a)),Object(N.jsx)(w.a,{control:Object(N.jsx)(C.a,{name:"checkedB",color:"primary"}),label:"Remember me"}),Object(N.jsx)(x.a,{type:"submit",color:"primary",variant:"contained",style:i,fullWidth:!0,children:"Sign in"}),Object(N.jsxs)(f.a,{children:[" Do you have an account ?",Object(N.jsx)(v.a,{onClick:this.login,style:{cursor:"pointer"},children:"login"})]})]})]})})}):"login"===this.state.test?Object(N.jsx)("div",{className:"sig",children:Object(N.jsx)(m.a,{children:Object(N.jsxs)(p.a,{elevation:15,style:n,children:[Object(N.jsxs)(m.a,{align:"center",children:[Object(N.jsx)(g.a,{style:s,children:Object(N.jsx)(S.a,{})}),Object(N.jsx)("h2",{children:"Log in "})]}),Object(N.jsxs)("form",{onSubmit:this.log_in,children:[Object(N.jsx)(O.a,{label:"Emaili",placeholder:"email",type:"email",onChange:this.onchangeemail1,value:this.state.email,fullWidth:!0,required:!0,style:{padding:13}}),Object(N.jsx)(O.a,{label:"Password",placeholder:"password",type:"password",onChange:this.onchangepassword1,value:this.state.password,fullWidth:!0,required:!0,style:{padding:13}}),Object(N.jsx)(w.a,{control:Object(N.jsx)(C.a,{name:"checkedB",color:"primary"}),label:"Remember me"}),Object(N.jsx)(x.a,{type:"submit",color:"primary",variant:"contained",onClick:this.log_in,style:i,fullWidth:!0,children:"log in"}),Object(N.jsxs)(f.a,{children:[" want to go the sing in page ?",Object(N.jsx)(v.a,{onClick:this.to_signin,style:{cursor:"pointer"},children:"sing in"})]})]})]})})}):void 0}}]),a}(n.Component),_=a(152),I=a.n(_),B=a(101),E=a.n(B),D=(a(445),function(e){var t=e.imageUrl,a=e.box;return Object(N.jsx)("div",{className:"center ma",children:Object(N.jsxs)("div",{className:"absolute mt2",children:[Object(N.jsx)("img",{id:"inputimage",alt:"",src:t,width:"500px",heigh:"auto"}),Object(N.jsx)("div",{className:"bounding-box",style:{top:a.topRow,right:a.rightCol,bottom:a.bottomRow,left:a.leftCol}})]})})}),F=(a(446),function(e){var t=e.onInputChange,a=e.onButtonSubmit,n=e.val;return Object(N.jsx)("div",{children:Object(N.jsx)("div",{className:"center ",children:Object(N.jsxs)("div",{className:"form center pa4 br3 shadow-3 bg-light-red",children:[Object(N.jsx)("input",{className:"f2 pa2 w-70 center",type:"tex",onChange:t,value:n}),Object(N.jsx)("button",{className:"w-30 grow f2 link ph3 pv2 dib white bg-purple",onClick:a,children:"Detect"})]})})})}),q=function(e){var t=e.name,a=e.entries;return Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{className:"white f2 pa3 br2",children:"".concat(t,", your current entry count is...")}),Object(N.jsx)("div",{className:"white f1",children:a})]})},U=new E.a.App({apiKey:"9b213b4d6cfe4b879653d78f6f54e0c6"}),J={particles:{number:{value:80,density:{enable:!0,value_area:800}}}},W=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,a=document.getElementById("inputimage"),n=Number(a.width),s=Number(a.height);return{leftCol:t.left_col*n,topRow:t.top_row*s,rightCol:n-t.right_col*n,bottomRow:s-t.bottom_row*s}},e.displayFaceBox=function(t){e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),e.setState({input:""}),U.models.predict(E.a.FACE_DETECT_MODEL,e.state.input).then((function(t){if(t){var a={cou:e.state.entries+1},n=a.cou;e.setState({entries:n});var s="https://face-deploy.herokuapp.com/users/add/"+e.state.email;b.a.post(s,a).then((function(){console.log("response success ")})).catch((function(e){return console.log(e)})),e.displayFaceBox(e.calculateFaceLocation(t))}})).catch((function(e){return console.log(e)}))},e.state={input:"",imageUrl:"",box:{},id:"",name:"",entries:0,email:""},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=sessionStorage.getItem("mydata");if(null!==t){var a=(t=JSON.parse(t)).email,n="https://face-deploy.herokuapp.com/users/"+a;b.a.get(n).then((function(t){e.setState({id:t.data._id,name:t.data.username,entries:t.data.count,email:a})}))}}},{key:"render",value:function(){var e=this.state,t=e.imageUrl,a=e.box;return Object(N.jsxs)("div",{className:"App",children:[Object(N.jsx)(I.a,{className:"particles",params:J}),Object(N.jsxs)("div",{children:[Object(N.jsx)(q,{name:this.state.name,entries:this.state.entries}),Object(N.jsx)(F,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit,val:this.state.input}),Object(N.jsx)(D,{box:a,imageUrl:t})]})]})}}]),a}(n.Component),L=(a(447),function(e){var t=e.logout,a=e.score,n=e.cur_page;return Object(N.jsx)("div",{children:Object(N.jsxs)("ul",{children:[Object(N.jsx)("li",{className:"active",onClick:t,children:"Sign out"}),Object(N.jsx)("li",{className:"active1",onClick:a,children:"Score Board"}),Object(N.jsx)("li",{className:"active2",onClick:n,children:"Main page"})]})})}),R=(a(448),function(e){var t=e.name,a=e.email,n=e.count;return Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:t}),Object(N.jsx)("td",{children:a}),Object(N.jsx)("td",{children:n})]})}),M=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={data:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e,t=this;b.a.get("https://face-deploy.herokuapp.com/users/all").then((function(a){0!==(e=a.data).length&&(e.sort((function(e,t){return t.count-e.count})),e.length,t.setState({data:e.slice(0,11)}))})).catch((function(e){console.log(e)}))}},{key:"scoreboard",value:function(){return this.state.data.map((function(e){return Object(N.jsx)(R,{name:e.username,email:e.email,count:e.count},e._id)}))}},{key:"render",value:function(){return 0!==this.state.data.length?Object(N.jsxs)("div",{className:"brd",children:[Object(N.jsx)("h1",{children:"Score board"}),Object(N.jsxs)("table",{className:"table",children:[Object(N.jsx)("thead",{className:"thead-light",children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{children:"Username"}),Object(N.jsx)("th",{children:"Email"}),Object(N.jsx)("th",{children:"Count"})]})}),Object(N.jsx)("tbody",{children:this.scoreboard()})]})]}):Object(N.jsxs)("div",{children:[Object(N.jsx)("h1",{children:"Score board"}),Object(N.jsx)("table",{className:"table",children:Object(N.jsx)("thead",{className:"thead-light",children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{children:"Username"}),Object(N.jsx)("th",{children:"Email"}),Object(N.jsx)("th",{children:"Count"})]})})})]})}}]),a}(n.Component),P=(a(449),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a),(e=t.call(this)).logout=function(){sessionStorage.removeItem("mydata"),e.setState({test:"logout"})},e.score=function(){e.setState({test:"score"})},e.cur_page=function(){e.setState({test:"admin"})};var n="",s=sessionStorage.getItem("mydata");return null!==(s=JSON.parse(s))&&(n="admin"),e.state={test:n},e}return Object(o.a)(a,[{key:"render",value:function(){return"admin"===this.state.test?Object(N.jsxs)("div",{className:"adm",children:[Object(N.jsx)(L,{logout:this.logout,score:this.score,cur_page:this.cur_page}),Object(N.jsx)(W,{})]}):"score"===this.state.test?Object(N.jsxs)("div",{className:"adm",children:[Object(N.jsx)(L,{logout:this.logout,score:this.score,cur_page:this.cur_page}),Object(N.jsx)(M,{})]}):Object(N.jsx)(h.a,{to:"/"})}}]),a}(n.Component)),T=a(80),A=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(N.jsx)(T.a,{children:Object(N.jsxs)(h.d,{children:[Object(N.jsx)(h.b,{exact:!0,path:"/",component:k}),Object(N.jsx)(h.b,{exact:!0,path:"/admin",component:P})]})})}}]),a}(n.Component),K=(a(450),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,494)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),i(e),c(e)}))});c.a.render(Object(N.jsx)(s.a.StrictMode,{children:Object(N.jsx)(A,{})}),document.getElementById("root")),K()}},[[451,1,2]]]);
//# sourceMappingURL=main.fb0659c9.chunk.js.map