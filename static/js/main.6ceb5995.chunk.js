(this.webpackJsonppoolcarapp=this.webpackJsonppoolcarapp||[]).push([[0],{16:function(e,t,a){e.exports={table:"table_table__2CHya"}},20:function(e,t,a){e.exports={App:"showride_App__XeQ8V",button:"showride_button__1Cn7v",button1:"showride_button1__22pPA"}},25:function(e,t,a){e.exports={App:"offerride_App__3rEAC",button:"offerride_button__1okg6",button1:"offerride_button1__2sz-R"}},28:function(e,t,a){e.exports={App:"login_App__3tPs1",form:"login_form__1Nxxu",fade:"login_fade__1HHsW"}},47:function(e,t,a){e.exports=a(77)},52:function(e,t,a){},53:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(26),o=a.n(s),l=(a(52),a(53),a(22)),i=a(10),c=a(11),u=a(14),m=a(13),p=a(12),d=a(78),h=a(79),f=a(80),E=a(16),b=a.n(E),y=a(23),v=a.n(y),k=function(){return function(e){v.a.get("http://localhost:5000/show_rides").then((function(t){e({type:"SHOW_RIDES",payload:t.data})}))}},g=function(e){return function(t){t({type:"SET_RIDES",paysload:e})}},O=function(e){return{type:"AUTH_FAIL",payload:e}},j=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).rideDetail=function(){var t=[];if(e.props.Inride){var a=e.props.Inride;t.push(r.a.createElement("tr",{key:Math.random()},r.a.createElement("td",{key:a.name},a.name),r.a.createElement("td",{key:a.pickUp},a.pickUp),r.a.createElement("td",{key:a.destination},a.destination),r.a.createElement("td",{key:a.car},a.car),r.a.createElement("td",{key:a.seatsLeft},a.seatsLeft)))}return t},e.rideDetailHeader=function(){var t=[];if(e.props.Inride){var a=e.props.Inride,n=Object.keys(a);t.push(r.a.createElement("th",{key:n[1]},n[1])),t.push(r.a.createElement("th",{key:n[4]},n[4])),t.push(r.a.createElement("th",{key:n[5]},n[5])),t.push(r.a.createElement("th",{key:n[2]},n[2])),t.push(r.a.createElement("th",{key:n[3]},n[3]))}return t},e}return Object(c.a)(a,[{key:"generateHeader",value:function(){var e=[];if(this.props.tab){for(var t=0;t<this.props.tab.length-1;t++){var a=this.props.tab[t],n=Object.keys(a);e.length<3&&(e.push(r.a.createElement("th",{key:n[4]},n[4])),e.push(r.a.createElement("th",{key:n[5]},n[5])),e.push(r.a.createElement("th",{key:n[3]},n[3])))}return e}}},{key:"generateBody",value:function(){var e=this,t=[];if(this.props.tab)for(var a=function(a){var n=e.props.tab[a];t.push(r.a.createElement("tr",{key:a},r.a.createElement("td",{key:n.pickUp,onClick:function(){return e.props.onselectData(n)}},n.pickUp),r.a.createElement("td",{key:n.destination},n.destination),r.a.createElement("td",{key:n.seatsLeft},n.seatsLeft)))},n=0;n<this.props.tab.length;n++)a(n);return t}},{key:"render",value:function(){var e;return this.props.Inride&&(e=r.a.createElement(d.a,null,r.a.createElement(h.a,null,"Ride Details"))),r.a.createElement("div",null,r.a.createElement(f.a,{bordered:!0,hover:!0,className:b.a.table},r.a.createElement("thead",null,r.a.createElement("tr",null,this.generateHeader())),r.a.createElement("tbody",null,this.generateBody())),e,r.a.createElement(f.a,{bordered:!0,hover:!0,className:b.a.table},r.a.createElement("thead",null,r.a.createElement("tr",null,this.rideDetailHeader())),r.a.createElement("tbody",null,this.rideDetail())))}}]),a}(n.Component),I=Object(p.b)((function(e){return{Inride:e.redu.datas,load:e.redu.loading}}),(function(e){return{onselectData:function(t){return e(g(t))}}}))(j),_=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).rideDetail=function(){var t=[];if(e.props.Inride){var a=e.props.Inride;t.push(r.a.createElement("tr",{key:Math.random()},r.a.createElement("td",{key:a.name},a.name),r.a.createElement("td",{key:a.pickUp},a.pickUp),r.a.createElement("td",{key:a.destination},a.destination),r.a.createElement("td",{key:a.car},a.car),r.a.createElement("td",{key:a.seatsLeft},a.seatsLeft)))}return t},e.rideDetailHeader=function(){var t=[];if(e.props.Inride){var a=e.props.Inride,n=Object.keys(a);t.push(r.a.createElement("th",{key:n[1]},n[1])),t.push(r.a.createElement("th",{key:n[4]},n[4])),t.push(r.a.createElement("th",{key:n[5]},n[5])),t.push(r.a.createElement("th",{key:n[2]},n[2])),t.push(r.a.createElement("th",{key:n[3]},n[3]))}return t},e}return Object(c.a)(a,[{key:"generateHeader",value:function(){var e=[];if(this.props.tab){for(var t=0;t<this.props.tab.length-1;t++){var a=this.props.tab[t],n=Object.keys(a);e.length<3&&(e.push(r.a.createElement("th",{key:n[4]},n[4])),e.push(r.a.createElement("th",{key:n[5]},n[5])),e.push(r.a.createElement("th",{key:n[3]},n[3])))}return e}}},{key:"generateBody",value:function(){var e=this,t=[];if(this.props.tab)for(var a=function(a){var n=e.props.tab[a];"Infosys"===n.destination&&t.push(r.a.createElement("tr",{key:a},r.a.createElement("td",{key:n.pickUp,onClick:function(){return e.props.onselectData(n)}},n.pickUp),r.a.createElement("td",{key:n.destination},n.destination),r.a.createElement("td",{key:n.seatsLeft},n.seatsLeft)))},n=0;n<this.props.tab.length;n++)a(n);return t}},{key:"render",value:function(){var e;return this.props.Inride&&(e=r.a.createElement(d.a,null,r.a.createElement(h.a,null,"Ride Details"))),r.a.createElement("div",null,r.a.createElement(f.a,{bordered:!0,hover:!0,className:b.a.table},r.a.createElement("thead",null,r.a.createElement("tr",null,this.generateHeader())),r.a.createElement("tbody",null,this.generateBody())),e,r.a.createElement(f.a,{bordered:!0,hover:!0,className:b.a.table},r.a.createElement("thead",null,r.a.createElement("tr",null,this.rideDetailHeader())),r.a.createElement("tbody",null,this.rideDetail())))}}]),a}(n.Component),w=Object(p.b)((function(e){return{Inride:e.redu.datas,load:e.redu.loading}}),(function(e){return{onselectData:function(t){return e(g(t))}}}))(_),N=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).rideDetail=function(){var t=[];if(e.props.Inride){var a=e.props.Inride;t.push(r.a.createElement("tr",{key:Math.random()},r.a.createElement("td",{key:a.name},a.name),r.a.createElement("td",{key:a.pickUp},a.pickUp),r.a.createElement("td",{key:a.destination},a.destination),r.a.createElement("td",{key:a.car},a.car),r.a.createElement("td",{key:a.seatsLeft},a.seatsLeft)))}return t},e.rideDetailHeader=function(){var t=[];if(e.props.Inride){var a=e.props.Inride,n=Object.keys(a);t.push(r.a.createElement("th",{key:n[1]},n[1])),t.push(r.a.createElement("th",{key:n[4]},n[4])),t.push(r.a.createElement("th",{key:n[5]},n[5])),t.push(r.a.createElement("th",{key:n[2]},n[2])),t.push(r.a.createElement("th",{key:n[3]},n[3]))}return t},e}return Object(c.a)(a,[{key:"generateHeader",value:function(){var e=[];if(this.props.tab){for(var t=0;t<this.props.tab.length-1;t++){var a=this.props.tab[t],n=Object.keys(a);e.length<3&&(e.push(r.a.createElement("th",{key:n[4]},n[4])),e.push(r.a.createElement("th",{key:n[5]},n[5])),e.push(r.a.createElement("th",{key:n[3]},n[3])))}return e}}},{key:"generateBody",value:function(){var e=this,t=[];if(this.props.tab)for(var a=function(a){var n=e.props.tab[a];"Infosys"===n.pickUp&&t.push(r.a.createElement("tr",{key:a},r.a.createElement("td",{key:n.pickUp,onClick:function(){return e.props.onselectData(n)}},n.pickUp),r.a.createElement("td",{key:n.destination},n.destination),r.a.createElement("td",{key:n.seatsLeft},n.seatsLeft)))},n=0;n<this.props.tab.length;n++)a(n);return t}},{key:"render",value:function(){var e;return this.props.Inride&&(e=r.a.createElement(d.a,null,r.a.createElement(h.a,null,"Ride Details"))),r.a.createElement("div",null,r.a.createElement(f.a,{bordered:!0,hover:!0,className:b.a.table},r.a.createElement("thead",null,r.a.createElement("tr",null,this.generateHeader())),r.a.createElement("tbody",null,this.generateBody())),e,r.a.createElement(f.a,{bordered:!0,hover:!0,className:b.a.table},r.a.createElement("thead",null,r.a.createElement("tr",null,this.rideDetailHeader())),r.a.createElement("tbody",null,this.rideDetail())))}}]),a}(n.Component),A=Object(p.b)((function(e){return{Inride:e.redu.datas,load:e.redu.loading}}),(function(e){return{onselectData:function(t){return e(g(t))}}}))(N),S=a(20),x=a.n(S),C=a(81),D=a(82),L=a(83),U=a(84),H=a(85),T=a(86),V=a(87),R=a(88),F=a(89),B=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"navigateToOffer",value:function(){this.props.history.replace("/offer_ride")}},{key:"render",value:function(){var e,t,a,n=this;return this.props.ride&&(e=r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{className:x.a.button1,color:"primary",size:"sm",id:"From Infosys",onClick:this.props.onfromInfo},"From Infosys"),r.a.createElement(C.a,{className:x.a.button1,color:"primary",size:"sm",id:"To Infosys",onClick:this.props.ontoInfo},"To Infosys"))),this.props.fromin&&(t=r.a.createElement(A,{tab:this.props.ride})),this.props.toin&&(t=r.a.createElement(w,{tab:this.props.ride,load:this.props.loading})),this.props.show&&(a=r.a.createElement(I,{tab:this.props.ride,load:this.props.load})),r.a.createElement("div",null,r.a.createElement(D.a,{color:"dark"},r.a.createElement(L.a,Object(l.a)({className:"container-fluid"},"className","ml-auto"),r.a.createElement(U.a,{href:"/"},"Logout"))),r.a.createElement("div",{className:x.a.App},r.a.createElement(H.a,null,r.a.createElement(T.a,null,r.a.createElement(d.a,null,r.a.createElement(V.a,{tag:"p",className:"text-left"},"Book a ride"),r.a.createElement(R.a,null,r.a.createElement(F.a,null,"car Pool is an online application which enables users to share ride with others.you can either book a ride or offer a ride."),r.a.createElement("div",{className:x.a.button},r.a.createElement(C.a,{className:x.a.button1,color:"primary",size:"sm",onClick:this.props.onshowRide},"Show All Rides"),e,r.a.createElement("div",{style:{padding:"10px"}},t,a)),r.a.createElement(C.a,{className:x.a.button1,color:"primary",size:"sm",onClick:function(){return n.navigateToOffer()}},"Offer a ride")))))))}}]),a}(r.a.Component),P=Object(p.b)((function(e){return{ride:e.redu.offersList,data:e.redu.datas,isAuth:e.authen.isAuthenticated,fromin:e.redu.fromInfo,toin:e.redu.toInfo,show:e.redu.showAll}}),(function(e){return{onshowRide:function(){return e((function(e){e(k()),e(g()),e({type:"SHOWALL"})}))},onfromInfo:function(){return e((function(e){e(k()),e(g()),e({type:"FROMINFO"})}))},ontoInfo:function(){return e((function(e){e(k()),e(g()),e({type:"TOINFO"})}))}}}))(B),q=a(90),M=a(91),W=a(92),z=a(93),X=a(25),G=a.n(X),J=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).onChange=function(e){e.preventDefault();var t=n.state.formValues,a=e.target.name,r=e.target.value;t[a]=r,n.setState({formValues:t})},n.onSubmit=function(e){if(e.preventDefault(),n.state.formIsValid){var t={name:n.state.formValues.Name,car:n.state.formValues.Car,seatsLeft:n.state.formValues.SeatsAvailable,pickUp:n.state.formValues.StartLocation,destination:n.state.formValues.Destination};v.a.post("http://localhost:5000/offer_ride",t).then((function(e){console.log(e.data),n.setState({message:e.data.message}),n.setState({success:!0}),console.log(n.state.message)})).catch((function(e){console.log(e)}))}document.getElementById("theForm").reset()},n.state={formValues:{},message:null,success:!1,formIsValid:!0,error:""},n}return Object(c.a)(a,[{key:"goback",value:function(){this.props.history.replace("/show_ride")}},{key:"render",value:function(){var e=this,t=this.state.success;return r.a.createElement("div",null,r.a.createElement(D.a,{color:"dark"},r.a.createElement(L.a,Object(l.a)({className:"container-fluid"},"className","ml-auto"),r.a.createElement(U.a,{href:"/"},"Logout"))),r.a.createElement(q.a,{onSubmit:this.onSubmit.bind(this),id:"theForm",className:G.a.App},r.a.createElement(M.a,null,r.a.createElement(W.a,{for:"exampleText"},"Name"),r.a.createElement(z.a,{type:"text",name:"Name",id:"exampleText",value:this.state.formValues.name,onChange:this.onChange.bind(this),required:!0})),r.a.createElement(M.a,null,r.a.createElement(W.a,{for:"exampleText"},"Start Location"),r.a.createElement(z.a,{type:"text",name:"StartLocation",id:"exampleText",value:this.state.formValues.name,onChange:this.onChange.bind(this),required:!0})),r.a.createElement(M.a,null,r.a.createElement(W.a,{for:"exampleText"},"Destination"),r.a.createElement(z.a,{type:"text",name:"Destination",id:"exampleText",value:this.state.formValues.name,onChange:this.onChange.bind(this),required:!0})),r.a.createElement(M.a,null,r.a.createElement(W.a,{for:"exampleText"},"Car"),r.a.createElement(z.a,{type:"text",name:"Car",id:"exampleText",value:this.state.formValues.name,onChange:this.onChange.bind(this),required:!0})),r.a.createElement(M.a,null,r.a.createElement(W.a,{for:"exampleText"},"Seats Available"),r.a.createElement(z.a,{type:"number",name:"SeatsAvailable",id:"exampleText",value:this.state.formValues.name,onChange:this.onChange.bind(this),required:!0}),t?null:this.state.error,r.a.createElement("div",{className:G.a.button},r.a.createElement(C.a,{className:G.a.button1},"Submit"),r.a.createElement(C.a,{className:G.a.button1,onClick:function(){return e.goback()}},"Go Back"))),r.a.createElement("div",{style:{color:"Green"}},t?this.state.message:null)))}}]),a}(n.Component),Q=a(19),$=a(94),K=a(28),Y=a.n(K),Z=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={userName:"",password:""},n}return Object(c.a)(a,[{key:"handleUserName",value:function(e){this.setState({userName:e.target.value})}},{key:"handlePassword",value:function(e){this.setState({password:e.target.value})}},{key:"onSubmitHandler",value:function(e){e.preventDefault(),this.props.onAuth(this.state.userName,this.state.password),this.setState({userName:""}),this.setState({password:""})}},{key:"render",value:function(){var e=this.props.mess;return 200===this.props.stat&&this.props.history.replace("/show_ride"),r.a.createElement("div",null,r.a.createElement(D.a,{color:"dark"},r.a.createElement(L.a,{className:"container-fluid"},r.a.createElement("div",{style:{color:"white"}},r.a.createElement(U.a,null,"Car Pool App")))),r.a.createElement($.a,{className:Y.a.App},r.a.createElement(q.a,{onSubmit:this.onSubmitHandler.bind(this),className:Y.a.form},r.a.createElement(T.a,null,r.a.createElement(M.a,null,r.a.createElement(W.a,{for:"exampleEmail"},"UserName"),r.a.createElement(z.a,{type:"text",name:"UserName",id:"exampleEmail",placeholder:"UserName",value:this.state.userName,onChange:this.handleUserName.bind(this),required:!0}))),r.a.createElement(T.a,null,r.a.createElement(M.a,null,r.a.createElement(W.a,{for:"examplePassword"},"Password"),r.a.createElement(z.a,{type:"password",name:"password",id:"examplePassword",placeholder:"password",value:this.state.password,onChange:this.handlePassword.bind(this),required:!0}),r.a.createElement("div",{className:Y.a.fade},this.props.isAuth?null:e))),r.a.createElement(C.a,null,"Login"))))}}]),a}(n.Component),ee=Object(p.b)((function(e){return{mess:e.authen.message,stat:e.authen.status,isAuth:e.authen.isAuthenticated}}),(function(e){return{onAuth:function(t,a){return e(function(e,t){return function(a){var n={userName:e,password:t};v.a.post("http://localhost:5000/login",n).then((function(e){console.log(e.data);var t=e.data.status;200===t?a({type:"AUTH_SUCCESS",payload:e.data}):(console.log(t),a(O(e.data)))})).catch((function(e){console.log(e),a(O())}))}}(t,a))}}}))(Z);var te=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Q.c,null,r.a.createElement(Q.a,{path:"/",exact:!0,component:ee}),r.a.createElement(Q.a,{path:"/show_ride",component:P}),r.a.createElement(Q.a,{path:"/offer_ride",exact:!0,component:J})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ae=a(17),ne=a(46),re=a(7),se={message:"",error:"",status:null,isAuthendticated:!1},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_SUCCESS":return Object(re.a)(Object(re.a)({},e),{},{message:t.payload.message,status:t.payload.status,error:null,isAuthendticated:!0});case"AUTH_FAIL":return Object(re.a)(Object(re.a)({},e),{},{message:t.payload.message,status:t.payload.status,isAuthendticated:!1});default:return e}},le={offersList:null,loading:!1,datas:null,fromInfo:!1,toInfo:!1,showAll:!1},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_RIDES":return Object(re.a)(Object(re.a)({},e),{},{offersList:t.payload});case"SET_RIDES":return Object(re.a)(Object(re.a)({},e),{},{datas:t.paysload,loading:!0});case"FROMINFO":return Object(re.a)(Object(re.a)({},e),{},{fromInfo:!0,showAll:!1,toInfo:!1});case"TOINFO":return Object(re.a)(Object(re.a)({},e),{},{toInfo:!0,fromInfo:!1,showAll:!1});case"SHOWALL":return Object(re.a)(Object(re.a)({},e),{},{showAll:!0,toInfo:!1,fromInfo:!1});default:return e}},ce=Object(ae.c)({redu:ie,authen:oe}),ue=(a(76),a(30)),me=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ae.d,pe=Object(ae.e)(ce,me(Object(ae.a)(ne.a)));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p.a,{store:pe},r.a.createElement(ue.a,null,r.a.createElement(te,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.6ceb5995.chunk.js.map