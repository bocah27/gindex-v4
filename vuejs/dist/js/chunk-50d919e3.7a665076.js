(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50d919e3"],{"4f31":function(s,t,i){"use strict";i.r(t);var a=function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{staticClass:"content mx-2 mt-2"},[i("div",{staticClass:"loading"},[i("loading",{attrs:{active:s.loading,"can-cancel":!1,"is-full-page":s.fullpage},on:{"update:active":function(t){s.loading=t}}})],1),i("div",{staticClass:"columns is-vcentered is-centered is-multiline"},[i("div",{staticClass:"column is-half"},[i("section",{staticClass:"hero is-black is-medium"},[i("div",{staticClass:"hero-body"},[i("div",{staticClass:"container"},[s._m(0),i("div",{staticClass:"buttons is-centered"},[i("button",{staticClass:"button is-rounded is-medium is-danger",on:{click:function(t){return s.gotoPage("/","login")}}},[s._m(1),i("span",[s._v("Login")])])])])])])]),i("div",{staticClass:"column is centered has-text-centered has-text-white is-two-fifths"},[i("article",{class:s.errormessageVisibility?"message is-danger":"message is-hidden is-danger"},[i("div",{staticClass:"message-header"},[i("p",[s._v("Error verifying in!!")]),i("button",{staticClass:"delete",attrs:{"aria-label":"delete"},on:{click:function(t){s.errormessageVisibility=!1}}})]),i("div",{staticClass:"message-body"},[s._v(" "+s._s(s.resultmessage)+" ")])]),i("article",{class:s.successmessageVisibility?"message is-success":"message is-hidden is-success"},[i("div",{staticClass:"message-header"},[i("p",[s._v("Success !")]),i("button",{staticClass:"delete",attrs:{"aria-label":"delete"},on:{click:function(t){s.successmessageVisibility=!1}}})]),i("div",{staticClass:"message-body"},[s._v(" "+s._s(s.resultmessage)+" ")])]),i("h2",{staticClass:"title has-text-weight-bold has-text-white"},[s._v("Verify Your Account")]),i("form",{on:{submit:function(t){return t.preventDefault(),s.handleSubmit(t)}}},[i("div",{staticClass:"field"},[i("p",{staticClass:"control has-icons-left has-icons-right"},[i("input",{directives:[{name:"model",rawName:"v-model",value:s.email,expression:"email"}],staticClass:"input is-rounded",attrs:{placeholder:"Email",id:"email",type:"email",required:"",autofocus:""},domProps:{value:s.email},on:{input:function(t){t.target.composing||(s.email=t.target.value)}}}),s._m(2),s._m(3)])]),i("div",{staticClass:"field"},[i("p",{staticClass:"control has-icons-left has-icons-right"},[i("input",{directives:[{name:"model",rawName:"v-model",value:s.otp,expression:"otp"}],staticClass:"input is-rounded",attrs:{placeholder:"Enter Your OTP",id:"otp",type:"text",autofocus:""},domProps:{value:s.otp},on:{input:function(t){t.target.composing||(s.otp=t.target.value)}}}),s._m(4),s._m(5)]),i("p",{staticClass:"help is-danger"},[s._v("OTP is Case Sensitive")])]),i("div",{staticClass:"field"},[i("p",{staticClass:"control has-icons-left"},[i("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],staticClass:"input is-rounded",attrs:{id:"password",type:"password",placeholder:"Password",required:""},domProps:{value:s.password},on:{input:function(t){t.target.composing||(s.password=t.target.value)}}}),s._m(6)])]),i("div",{staticClass:"field"},[i("p",{staticClass:"control has-icons-left"},[i("input",{directives:[{name:"model",rawName:"v-model",value:s.confirmpassword,expression:"confirmpassword"}],staticClass:"input is-rounded",attrs:{id:"confirm-password",type:"password",placeholder:"Confirm Password",required:""},domProps:{value:s.confirmpassword},on:{input:function(t){t.target.composing||(s.confirmpassword=t.target.value)}}}),s._m(7)])]),i("button",{class:s.loading?"button is-rounded is-loading is-success is-medium":"button is-rounded is-success is-medium",attrs:{disabled:s.disabled}},[s._m(8),i("span",[s._v("Verify")])])])])])])},e=[function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{staticClass:"tile is-ancestor"},[i("div",{staticClass:"tile is-parent"},[i("article",{staticClass:"tile has-text-centered is-child notification is-success"},[i("p",{staticClass:"title has-text-dark"},[i("span",{staticClass:"icon"},[i("i",{staticClass:"fab fa-superpowers"})]),i("span",[s._v(" Final Steps... ")])]),i("p",{staticClass:"subtitle"},[s._v("Email Verification")]),i("div",{staticClass:"content"},[i("p",{staticClass:"has-text-dark has-text-weight-semibold"},[s._v("After Receiving Confirmation Mail, You Have to Verify your Account with OTP.")]),i("p",{staticClass:"has-text-dark"},[s._v("Please Enter your OTP to Verify and Register your Account.")]),i("p",{staticClass:"has-text-dark"},[s._v("After Successfully Verifying. Press the Below button to Login.")])])])])])},function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("span",{staticClass:"icon is-medium"},[i("i",{staticClass:"fas fa-shipping-fast"})])},function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("span",{staticClass:"icon is-small is-left"},[i("i",{staticClass:"fas fa-envelope"})])},function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("span",{staticClass:"icon is-small is-right"},[i("i",{staticClass:"fas fa-check"})])},function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("span",{staticClass:"icon is-small is-left"},[i("i",{staticClass:"fas fa-key"})])},function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("span",{staticClass:"icon is-small is-right"},[i("i",{staticClass:"fas fa-check"})])},function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("span",{staticClass:"icon is-small is-left"},[i("i",{staticClass:"fas fa-lock"})])},function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("span",{staticClass:"icon is-small is-left"},[i("i",{staticClass:"fas fa-lock"})])},function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("span",{staticClass:"icon is-medium"},[i("i",{staticClass:"fas fa-user-check"})])}],n=(i("d81d"),i("9062")),o=i.n(n),l=(i("e40d"),{components:{Loading:o.a},data:function(){return{email:"",emailFocus:"",otpFocus:"",otp:"",password:"",confirmpassword:"",resultmessage:"",gds:[],currgd:{},disabled:!0,databasemessage:"",loading:!1,fullpage:!0,errormessageVisibility:!1,successmessageVisibility:!1}},methods:{handleSubmit:function(s){var t=this;this.loading=!0,s.preventDefault(),this.confirmpassword===this.password&&this.password.length>0?this.$http.post(window.apiRoutes.otpRegister,{email:this.email,otp:this.otp,newpassword:this.password}).then((function(s){console.log(s),s.data.auth&&s.data.registered&&s.data.changed?(t.errormessageVisibility=!1,t.successmessageVisibility=!0,t.loading=!1,t.resultmessage=s.data.message+"Now You can Login with Your Email and Password"):(t.errormessageVisibility=!0,t.successmessageVisibility=!1,t.loading=!1,t.resultmessage=s.data.message)})):(this.errormessageVisibility=!0,this.successmessageVisibility=!1,this.loading=!1,this.resultmessage="Passwords Do Not Match",this.password="",this.confirmpassword="")},gotoPage:function(s,t){t?this.$router.push({path:"/"+this.currgd.id+":"+t+s}):this.$router.push({path:"/"+this.currgd.id+":"+s})},checkParams:function(){this.$route.params.email?(this.email=this.$route.params.email,this.emailFocus=!1,this.otpFocus=!0):(this.email="",this.emailFocus=!0,this.otpFocus=!1)},validateData:function(){var s=/[a-z1-9].+@+[a-z1-9A-Z].+[.][a-z]+/g;s.test(this.email)&&this.otp.length>0&&this.password.length>0&&this.password==this.confirmpassword?this.disabled=!1:this.disabled=!0}},mounted:function(){this.checkParams()},created:function(){if(window.gds&&window.gds.length>0){this.gds=window.gds.map((function(s,t){return{name:s,id:t}}));var s=this.$route.params.id;this.gds&&this.gds.length>=s&&(this.currgd=this.gds[s])}},watch:{otp:"validateData",email:"validateData",password:"validateData",confirmpassword:"validateData"}}),r=l,c=i("2877"),d=Object(c["a"])(r,a,e,!1,null,null,null);t["default"]=d.exports},e40d:function(s,t,i){}}]);