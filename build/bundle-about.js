webpackJsonp([2],{260:function(e,t,a){"use strict";function n(e){var t=e.entities.projects,a=e.ui;return{staticContent:Object(C.a)(),count:r()(t).length,ui:a}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(43),r=a.n(l),o=a(13),u=a.n(o),c=a(14),s=a.n(c),d=a(15),i=a.n(d),p=a(16),f=a.n(p),m=a(17),h=a.n(m),b=a(0),E=a(12),y=a(35),g=function(e){var t=e.url;return b.default.createElement("a",{className:"btn",id:"star-button",href:t},b.default.createElement("span",{className:"octicon octicon-octoface"})," Star on GitHub")},w=g,j=a(9),v=a(73),k=function(e){var t=e.staticContent,a=e.count;Object(j.a)("Render the <About> component");var n=t.repo,l=t.projectName;return b.default.createElement(y.a,{style:{paddingTop:"2rem"}},b.default.createElement("div",{className:"card markdown-body",style:{padding:"2rem"}},b.default.createElement("h1",null,"About"),b.default.createElement(w,{url:n}),b.default.createElement("h2",null,"Why ",l," ?"),b.default.createElement("p",null,"Javascript, HTML and CSS are advancing faster than ever, we are going fullspeed on innovation.",b.default.createElement("br",null),"Amazing open-source projects are released almost everyday."),b.default.createElement("ul",null,b.default.createElement("li",null,"How to stay up-to-date about the latest tendencies ?"),b.default.createElement("li",null,"How to check quickly the projects that really matter,"," ",b.default.createElement("i",{className:"special"},"now")," and not 6 months ago ?")),b.default.createElement("p",null,l," was creaded to address these questions."),b.default.createElement("h2",null,"Concept"),b.default.createElement("p",null,"Checking the number of stars on GitHub is a good way to check project popularity but it does not tell you when the stars have been added."," "),b.default.createElement("p",null,l,' takes "snapshot" of GitHub stars every day, for a curated list of ',a," projects, to detect the trends over the last months."),b.default.createElement("h2",null,"How it works"),b.default.createElement("p",null,"First, a list of projects related to the web platform (JavaScript of course but also HTML and CSS) is stored in a database."),b.default.createElement("p",null,"Everytime we find a new project, we add it to the database."),b.default.createElement("p",null,"Then everyday, an automatic task checks project data from GitHub, for every project stored and generates data consumed by the web application."),b.default.createElement("p",null,"The web application displays the total number of stars and their variation over the last days."),b.default.createElement("h2",null,"Do you want more projects ?"),b.default.createElement("p",null,'Rather than scanning all existing projects on GitHub, We decided to focus on a curated list of projets we find "interesting", based on our experience and on things we read on the internet.'),b.default.createElement("p",null,"As a result, some great projects must be missing!"),b.default.createElement("p",null,"Create a GitHub issue ",b.default.createElement(v.a,null,"here")," to suggest a new project to add."),b.default.createElement("h2",null,"Show your support!"),b.default.createElement("p",null,"If you like the application, please star the project on"," ",b.default.createElement("a",{href:n},"GitHub"),"..."),b.default.createElement("p",null,"...we are all made of stars"," ",b.default.createElement("img",{src:"images/star.png",width:"16",height:"16",alt:"star"})," !"),b.default.createElement("p",null,"Thank you for your support!")))},H=k,C=a(122),G=function(e){function t(){return s()(this,t),f()(this,(t.__proto__||u()(t)).apply(this,arguments))}return h()(t,e),i()(t,[{key:"render",value:function(){Object(j.a)("Render the <AboutPage> container",this.props);var e=this.props,t=e.staticContent,a=e.project,n=e.count,l=e.ui;return b.default.createElement(H,{project:a,staticContent:t,count:n,ui:l})}}]),t}(b.Component);t.default=Object(E.b)(n,{})(G)}});
//# sourceMappingURL=bundle-about.js.map