"use strict";(self.webpackChunkproject_managment_app=self.webpackChunkproject_managment_app||[]).push([[96],{7096:(ct,x,d)=>{d.r(x),d.d(x,{PublicModule:()=>dt});var m=d(4843),o=d(4006),l=d(8505),t=d(4650),b=d(1455),v=d(262),P=d(9646),Z=d(529),A=d(7009),T=d(3175),k=d(2275);let y=(()=>{class e{constructor(n,r,i,c){this.http=n,this.snackbar=r,this.jwtService=i,this.apiService=c}login(n){return this.http.post(`${b.D_}auth/signin`,n).pipe((0,v.K)(r=>{let i="Unknown error occurred";return(400===r.status||401===r.status)&&(i=r.error.message),this.snackbar.open(i,"Close",{panelClass:"snackbar",duration:2e3,horizontalPosition:"right",verticalPosition:"top"}),(0,P.of)(null)}),(0,l.b)(r=>{localStorage.setItem("auth_token",r.token),localStorage.setItem("user_login",n.login),localStorage.setItem("user_pass",n.password),this.apiService.getUserId().subscribe(),this.apiService.getBoards()}),(0,l.b)(()=>this.snackbar.open("Login Successfull","Close",{panelClass:"snackbar",duration:2e3,horizontalPosition:"right",verticalPosition:"top"})))}register(n){const r={name:n.get("name")?.value,login:n.get("login")?.value,password:n.get("password")?.value};return this.http.post(`${b.D_}auth/signup`,r).pipe((0,v.K)(i=>{let c="Unknown error occurred";return 400===i.status?c=i.error.message:409===i.status&&(c="Login already exists"),this.snackbar.open(c,"Close",{panelClass:"snackbar",duration:2e3,horizontalPosition:"right",verticalPosition:"top"}),(0,P.of)(null)}),(0,l.b)(i=>{i&&this.snackbar.open("User created successfully. Please proceed to the login screen to access the system.","Close",{panelClass:"snackbar",duration:2e3,horizontalPosition:"right",verticalPosition:"top"})}))}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(Z.eN),t.LFG(A.ux),t.LFG(T.N0),t.LFG(k.s))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var g=d(6895),O=d(3238);const I=["*"],D=new t.OlP("MAT_CARD_CONFIG");let f=(()=>{class e{constructor(n){this.appearance=n?.appearance||"raised"}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(D,8))},e.\u0275cmp=t.Xpm({type:e,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:4,hostBindings:function(n,r){2&n&&t.ekj("mat-mdc-card-outlined","outlined"===r.appearance)("mdc-card--outlined","outlined"===r.appearance)},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:I,decls:1,vars:0,template:function(n,r){1&n&&(t.F$t(),t.Hsn(0))},styles:['.mdc-card{display:flex;flex-direction:column;box-sizing:border-box}.mdc-card::after{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none;pointer-events:none}@media screen and (forced-colors: active){.mdc-card::after{border-color:CanvasText}}.mdc-card--outlined::after{border:none}.mdc-card__content{border-radius:inherit;height:100%}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:""}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__media--square::before{margin-top:100%}.mdc-card__media--16-9::before{margin-top:56.25%}.mdc-card__media-content{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box}.mdc-card__primary-action{display:flex;flex-direction:column;box-sizing:border-box;position:relative;outline:none;color:inherit;text-decoration:none;cursor:pointer;overflow:hidden}.mdc-card__primary-action:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__primary-action:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mdc-card__actions--full-bleed{padding:0}.mdc-card__action-buttons,.mdc-card__action-icons{display:flex;flex-direction:row;align-items:center;box-sizing:border-box}.mdc-card__action-icons{flex-grow:1;justify-content:flex-end}.mdc-card__action-buttons+.mdc-card__action-icons{margin-left:16px;margin-right:0}[dir=rtl] .mdc-card__action-buttons+.mdc-card__action-icons,.mdc-card__action-buttons+.mdc-card__action-icons[dir=rtl]{margin-left:0;margin-right:16px}.mdc-card__action{display:inline-flex;flex-direction:row;align-items:center;box-sizing:border-box;justify-content:center;cursor:pointer;user-select:none}.mdc-card__action:focus{outline:none}.mdc-card__action--button{margin-left:0;margin-right:8px;padding:0 8px}[dir=rtl] .mdc-card__action--button,.mdc-card__action--button[dir=rtl]{margin-left:8px;margin-right:0}.mdc-card__action--button:last-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-card__action--button:last-child,.mdc-card__action--button:last-child[dir=rtl]{margin-left:0;margin-right:0}.mdc-card__actions--full-bleed .mdc-card__action--button{justify-content:space-between;width:100%;height:auto;max-height:none;margin:0;padding:8px 16px;text-align:left}[dir=rtl] .mdc-card__actions--full-bleed .mdc-card__action--button,.mdc-card__actions--full-bleed .mdc-card__action--button[dir=rtl]{text-align:right}.mdc-card__action--icon{margin:-6px 0;padding:12px}.mat-mdc-card{position:relative;border-radius:var(--mdc-elevated-card-container-shape, var(--mdc-shape-medium, 4px));background-color:var(--mdc-elevated-card-container-color, transparent);border-width:0;border-style:solid;border-color:var(--mdc-elevated-card-container-color, transparent)}.mat-mdc-card .mdc-card::after{border-radius:var(--mdc-elevated-card-container-shape, var(--mdc-shape-medium, 4px))}.mat-mdc-card-outlined{border-width:var(--mdc-outlined-card-outline-width, 1px);border-style:solid;border-color:var(--mdc-outlined-card-outline-color, transparent)}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}'],encapsulation:2,changeDetection:0}),e})(),h=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=t.lG2({type:e,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]}),e})(),_=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=t.lG2({type:e,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]}),e})(),B=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[O.BQ,g.ez,O.BQ]}),e})();var s=d(9549),C=d(4144),M=d(4859);function E(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Username is required"),t.qZA())}function V(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Password is required"),t.qZA())}let W=(()=>{class e{constructor(n,r){this.authService=n,this.router=r,this.loginForm=new o.cw({login:new o.NI(null,[o.kI.required]),password:new o.NI(null,[o.kI.required])})}login(){this.loginForm.valid&&this.authService.login(this.loginForm.value).pipe((0,l.b)(()=>this.router.navigate(["../../protected"]))).subscribe()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(y),t.Y36(m.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-login"]],decls:32,vars:7,consts:[[1,"header"],["routerLink","",1,"logo"],[1,"autorization-panel"],[1,"signin",3,"routerLink"],[1,"singup",3,"routerLink"],[1,"main"],[3,"routerLink"],[3,"formGroup","ngSubmit"],["type","text","matInput","","placeholder","Login","formControlName","login"],[4,"ngIf"],["type","password","matInput","","placeholder","Password","formControlName","password"],[1,"button"],["type","submit","mat-button","",3,"disabled"],[1,"footer"],["href","https://github.com/anvianvi","target","_blank"],["href","https://rs.school/angular/","target","_blank"]],template:function(n,r){if(1&n&&(t.TgZ(0,"header",0),t._UZ(1,"a",1),t.TgZ(2,"div",2)(3,"a",3),t._uU(4,"Log in"),t.qZA(),t.TgZ(5,"a",4),t._uU(6,"Get Anvello for free"),t.qZA()()(),t.TgZ(7,"main",5)(8,"a",6),t._uU(9,"Go to Register"),t.qZA(),t.TgZ(10,"mat-card")(11,"mat-card-title"),t._uU(12,"Login"),t.qZA(),t.TgZ(13,"mat-card-content")(14,"form",7),t.NdJ("ngSubmit",function(){return r.login()}),t.TgZ(15,"mat-form-field"),t._UZ(16,"input",8),t.YNc(17,E,2,0,"mat-error",9),t.qZA(),t.TgZ(18,"mat-form-field"),t._UZ(19,"input",10),t.YNc(20,V,2,0,"mat-error",9),t.qZA(),t.TgZ(21,"div",11)(22,"button",12),t._uU(23,"Login"),t.qZA()()()()()(),t.TgZ(24,"footer",13)(25,"div"),t._uU(26,"Created by "),t.TgZ(27,"a",14),t._uU(28,"Pavel Viarbitsi"),t.qZA(),t._uU(29," in March 2023 for "),t.TgZ(30,"a",15),t._uU(31,"The Rolling Scopes"),t.qZA()()()),2&n){let i,c;t.xp6(3),t.s9C("routerLink","../login"),t.xp6(2),t.s9C("routerLink","../register"),t.xp6(3),t.s9C("routerLink","../register"),t.xp6(6),t.Q6J("formGroup",r.loginForm),t.xp6(3),t.Q6J("ngIf",(null==(i=r.loginForm.get("login"))?null:i.touched)&&(null==(i=r.loginForm.get("login"))?null:i.hasError("required"))),t.xp6(3),t.Q6J("ngIf",(null==(c=r.loginForm.get("password"))?null:c.touched)&&(null==(c=r.loginForm.get("password"))?null:c.hasError("required"))),t.xp6(2),t.Q6J("disabled",!r.loginForm.valid)}},dependencies:[g.O5,m.rH,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u,f,_,h,s.KE,s.TO,C.Nt,M.lW],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;min-height:100vh}.header[_ngcontent-%COMP%]{width:97vw;max-width:1500px;height:60px;display:flex;justify-content:space-between;align-items:center}.logo[_ngcontent-%COMP%]{height:60px;width:160px;background:url(logo.986da57f4512c485.png) no-repeat center;background-size:100%}.autorization-panel[_ngcontent-%COMP%]{display:flex}.signin[_ngcontent-%COMP%], .singup[_ngcontent-%COMP%]{background:transparent;border:0;outline:0;padding:13px;font-weight:500;text-align:center}.singup[_ngcontent-%COMP%]{background:#34AADC;color:#f7f7f7}.main[_ngcontent-%COMP%]{flex:1 1 auto;max-width:1500px}h1[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{max-width:70vw;margin:3vh auto;text-align:center}@media (width > 750px){h1[_ngcontent-%COMP%]{font-size:48px}}@media (width > 750px){h3[_ngcontent-%COMP%]{font-size:28px}}.hero-content[_ngcontent-%COMP%]{display:grid;align-items:center;max-height:600px}@media (width > 750px){.hero-content[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr .3fr}}.welcom-text[_ngcontent-%COMP%]{padding:10px;justify-self:end;text-align:right}.welcom-text[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin:20px 0}@media (width > 750px){.welcom-text[_ngcontent-%COMP%]{font-size:22px}}.hero-img[_ngcontent-%COMP%]{width:100%;height:100%;display:none}@media (width > 750px){.hero-img[_ngcontent-%COMP%]{display:block}}.singup[_ngcontent-%COMP%]{background:transparent;border:0;outline:0;padding:13px;text-align:center;background:#34AADC;color:#f7f7f7}.footer[_ngcontent-%COMP%]{display:grid;place-content:center;height:60px}.footer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding:10px;text-align:center}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer;font-weight:500}",".main[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column;gap:10px}.mat-card[_ngcontent-%COMP%]{max-width:600px}.mat-card[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%], .mat-card[_ngcontent-%COMP%]   .mat-card-content[_ngcontent-%COMP%]{display:flex;justify-content:center}.mat-card[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%], .mat-card[_ngcontent-%COMP%]   .mat-card-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{width:100%;min-width:300px}.mat-card[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%], .mat-card[_ngcontent-%COMP%]   .mat-card-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{padding:16px;width:300px;color:#fff;background-color:red}.mat-card[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%], .mat-card[_ngcontent-%COMP%]   .mat-card-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}"]}),e})();class ${static passwordsMatching(a){const n=a.get("password")?.value,r=a.get("passwordConfirm")?.value;return n===r&&null!==n&&null!==r?null:{passwordsNotMatching:!0}}}function K(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Username is required"),t.qZA())}function tt(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Username is required"),t.qZA())}function et(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Password is required"),t.qZA())}function nt(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Password Confirmation is required"),t.qZA())}function at(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Passwords are not matching!"),t.qZA())}const rt=[{path:"",component:(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-home"]],decls:35,vars:0,consts:[[1,"header"],["routerLink","",1,"logo"],[1,"autorization-panel"],["routerLink","login",1,"signin"],["routerLink","register",1,"singup"],[1,"main"],[1,"hero-content"],[1,"welcom-text"],["src","assets/hero-img.png","alt","a picture of people working with tasks and documents around a laptop",1,"hero-img"],[1,"footer"],["href","https://github.com/anvianvi","target","_blank"],["href","https://rs.school/angular/","target","_blank"]],template:function(n,r){1&n&&(t.TgZ(0,"header",0),t._UZ(1,"a",1),t.TgZ(2,"div",2)(3,"a",3),t._uU(4,"Log in"),t.qZA(),t.TgZ(5,"a",4),t._uU(6,"Get Anvello for free"),t.qZA()()(),t.TgZ(7,"main",5)(8,"h1"),t._uU(9,"Welcome to Anvello! "),t.qZA(),t.TgZ(10,"h3"),t._uU(11,"Project Management app that will help you create and organize your projects, set milestones and deadlines, and track progress in real-time"),t.qZA(),t.TgZ(12,"div",6)(13,"div",7)(14,"div"),t._uU(15," Take a moment to explore our features!"),t._UZ(16,"br"),t._uU(17," Start creating your first project! "),t.qZA(),t.TgZ(18,"a",4),t._uU(19,"Lets start for free!"),t.qZA(),t.TgZ(20,"div"),t._uU(21," We're here to support you every step!"),t._UZ(22,"br"),t._uU(23," We will help you achieve your goals! "),t.qZA()(),t._UZ(24,"img",8),t.qZA(),t.TgZ(25,"h3"),t._uU(26,"Thank you for choosing our app, and happy project managing!"),t.qZA()(),t.TgZ(27,"footer",9)(28,"div"),t._uU(29,"Created by "),t.TgZ(30,"a",10),t._uU(31,"Pavel Viarbitsi"),t.qZA(),t._uU(32," in March 2023 for "),t.TgZ(33,"a",11),t._uU(34,"The Rolling Scopes"),t.qZA()()())},dependencies:[m.rH],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;min-height:100vh}.header[_ngcontent-%COMP%]{width:97vw;max-width:1500px;height:60px;display:flex;justify-content:space-between;align-items:center}.logo[_ngcontent-%COMP%]{height:60px;width:160px;background:url(logo.986da57f4512c485.png) no-repeat center;background-size:100%}.autorization-panel[_ngcontent-%COMP%]{display:flex}.signin[_ngcontent-%COMP%], .singup[_ngcontent-%COMP%]{background:transparent;border:0;outline:0;padding:13px;font-weight:500;text-align:center}.singup[_ngcontent-%COMP%]{background:#34AADC;color:#f7f7f7}.main[_ngcontent-%COMP%]{flex:1 1 auto;max-width:1500px}h1[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{max-width:70vw;margin:3vh auto;text-align:center}@media (width > 750px){h1[_ngcontent-%COMP%]{font-size:48px}}@media (width > 750px){h3[_ngcontent-%COMP%]{font-size:28px}}.hero-content[_ngcontent-%COMP%]{display:grid;align-items:center;max-height:600px}@media (width > 750px){.hero-content[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr .3fr}}.welcom-text[_ngcontent-%COMP%]{padding:10px;justify-self:end;text-align:right}.welcom-text[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin:20px 0}@media (width > 750px){.welcom-text[_ngcontent-%COMP%]{font-size:22px}}.hero-img[_ngcontent-%COMP%]{width:100%;height:100%;display:none}@media (width > 750px){.hero-img[_ngcontent-%COMP%]{display:block}}.singup[_ngcontent-%COMP%]{background:transparent;border:0;outline:0;padding:13px;text-align:center;background:#34AADC;color:#f7f7f7}.footer[_ngcontent-%COMP%]{display:grid;place-content:center;height:60px}.footer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding:10px;text-align:center}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer;font-weight:500}"]}),e})()},{path:"login",component:W},{path:"register",component:(()=>{class e{constructor(n,r){this.router=n,this.authService=r,this.registerForm=new o.cw({name:new o.NI(null,[o.kI.required]),login:new o.NI(null,[o.kI.required]),password:new o.NI(null,[o.kI.required]),passwordConfirm:new o.NI(null,[o.kI.required])},{validators:$.passwordsMatching})}register(){this.registerForm.valid&&this.authService.register(this.registerForm).pipe((0,l.b)(()=>this.router.navigate(["public/login"]))).subscribe()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(m.F0),t.Y36(y))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-register"]],decls:39,vars:10,consts:[[1,"header"],["routerLink","",1,"logo"],[1,"autorization-panel"],[1,"signin",3,"routerLink"],[1,"singup",3,"routerLink"],[1,"main"],[3,"routerLink"],[3,"formGroup","ngSubmit"],["type","text","matInput","","placeholder","name","formControlName","name"],[4,"ngIf"],["type","text","matInput","","placeholder","login","formControlName","login"],["type","password","matInput","","placeholder","Password","formControlName","password"],["type","password","matInput","","placeholder","Password Confirmation","formControlName","passwordConfirm"],[1,"button"],["type","submit","mat-button","",3,"disabled"],[1,"footer"],["href","https://github.com/anvianvi","target","_blank"],["href","https://rs.school/angular/","target","_blank"]],template:function(n,r){if(1&n&&(t.TgZ(0,"header",0),t._UZ(1,"a",1),t.TgZ(2,"div",2)(3,"a",3),t._uU(4,"Log in"),t.qZA(),t.TgZ(5,"a",4),t._uU(6,"Get Anvello for free"),t.qZA()()(),t.TgZ(7,"main",5)(8,"a",6),t._uU(9,"Go to Login"),t.qZA(),t.TgZ(10,"mat-card")(11,"mat-card-title"),t._uU(12,"Register"),t.qZA(),t.TgZ(13,"mat-card-content")(14,"form",7),t.NdJ("ngSubmit",function(){return r.register()}),t.TgZ(15,"mat-form-field"),t._UZ(16,"input",8),t.YNc(17,K,2,0,"mat-error",9),t.qZA(),t.TgZ(18,"mat-form-field"),t._UZ(19,"input",10),t.YNc(20,tt,2,0,"mat-error",9),t.qZA(),t.TgZ(21,"mat-form-field"),t._UZ(22,"input",11),t.YNc(23,et,2,0,"mat-error",9),t.qZA(),t.TgZ(24,"mat-form-field"),t._UZ(25,"input",12),t.YNc(26,nt,2,0,"mat-error",9),t.qZA(),t.YNc(27,at,2,0,"mat-error",9),t.TgZ(28,"div",13)(29,"button",14),t._uU(30,"Register"),t.qZA()()()()()(),t.TgZ(31,"footer",15)(32,"div"),t._uU(33,"Created by "),t.TgZ(34,"a",16),t._uU(35,"Pavel Viarbitsi"),t.qZA(),t._uU(36," in March 2023 for "),t.TgZ(37,"a",17),t._uU(38,"The Rolling Scopes"),t.qZA()()()),2&n){let i,c,u,p,w;t.xp6(3),t.s9C("routerLink","../login"),t.xp6(2),t.s9C("routerLink","../register"),t.xp6(3),t.s9C("routerLink","../login"),t.xp6(6),t.Q6J("formGroup",r.registerForm),t.xp6(3),t.Q6J("ngIf",(null==(i=r.registerForm.get("name"))?null:i.touched)&&(null==(i=r.registerForm.get("name"))?null:i.hasError("required"))),t.xp6(3),t.Q6J("ngIf",(null==(c=r.registerForm.get("login"))?null:c.touched)&&(null==(c=r.registerForm.get("login"))?null:c.hasError("required"))),t.xp6(3),t.Q6J("ngIf",(null==(u=r.registerForm.get("password"))?null:u.touched)&&(null==(u=r.registerForm.get("password"))?null:u.hasError("required"))),t.xp6(3),t.Q6J("ngIf",(null==(p=r.registerForm.get("passwordConfirm"))?null:p.touched)&&(null==(p=r.registerForm.get("passwordConfirm"))?null:p.hasError("required"))),t.xp6(1),t.Q6J("ngIf",(null==(w=r.registerForm.get("passwordConfirm"))?null:w.dirty)&&r.registerForm.hasError("passwordsNotMatching")),t.xp6(2),t.Q6J("disabled",!r.registerForm.valid)}},dependencies:[g.O5,m.rH,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u,f,_,h,s.KE,s.TO,C.Nt,M.lW],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;min-height:100vh}.header[_ngcontent-%COMP%]{width:97vw;max-width:1500px;height:60px;display:flex;justify-content:space-between;align-items:center}.logo[_ngcontent-%COMP%]{height:60px;width:160px;background:url(logo.986da57f4512c485.png) no-repeat center;background-size:100%}.autorization-panel[_ngcontent-%COMP%]{display:flex}.signin[_ngcontent-%COMP%], .singup[_ngcontent-%COMP%]{background:transparent;border:0;outline:0;padding:13px;font-weight:500;text-align:center}.singup[_ngcontent-%COMP%]{background:#34AADC;color:#f7f7f7}.main[_ngcontent-%COMP%]{flex:1 1 auto;max-width:1500px}h1[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{max-width:70vw;margin:3vh auto;text-align:center}@media (width > 750px){h1[_ngcontent-%COMP%]{font-size:48px}}@media (width > 750px){h3[_ngcontent-%COMP%]{font-size:28px}}.hero-content[_ngcontent-%COMP%]{display:grid;align-items:center;max-height:600px}@media (width > 750px){.hero-content[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr .3fr}}.welcom-text[_ngcontent-%COMP%]{padding:10px;justify-self:end;text-align:right}.welcom-text[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin:20px 0}@media (width > 750px){.welcom-text[_ngcontent-%COMP%]{font-size:22px}}.hero-img[_ngcontent-%COMP%]{width:100%;height:100%;display:none}@media (width > 750px){.hero-img[_ngcontent-%COMP%]{display:block}}.singup[_ngcontent-%COMP%]{background:transparent;border:0;outline:0;padding:13px;text-align:center;background:#34AADC;color:#f7f7f7}.footer[_ngcontent-%COMP%]{display:grid;place-content:center;height:60px}.footer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding:10px;text-align:center}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer;font-weight:500}","[_nghost-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:column;gap:20px}.mat-card[_ngcontent-%COMP%]{max-width:600px}.mat-card-title[_ngcontent-%COMP%], .mat-card-content[_ngcontent-%COMP%]{display:flex;justify-content:center}.mat-card-title[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%], .mat-card-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{width:100%;min-width:300px}.mat-card-title[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%], .mat-card-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{padding:16px;width:300px;color:#fff;background-color:red}.mat-card-title[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%], .mat-card-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.success-snackbar-label[_ngcontent-%COMP%]   .mat-mdc-snack-bar-label[_ngcontent-%COMP%]{color:#2e2e2e}"]}),e})()},{path:"**",redirectTo:"",pathMatch:"full"}];let ot=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[m.Bz.forChild(rt),m.Bz]}),e})();var it=d(7392);let dt=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[g.ez,ot,o.UX,o.u5,B,s.lN,C.c,M.ot,it.Ps]}),e})()}}]);