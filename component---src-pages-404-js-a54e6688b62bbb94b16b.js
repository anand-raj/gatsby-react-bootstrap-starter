(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{144:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(161),i=a(159);t.default=function(){return r.a.createElement(l.a,null,r.a.createElement(i.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},152:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(33),o=a.n(c);a.d(t,"a",function(){return o.a});a(153);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},153:function(e,t,a){var n;e.exports=(n=a(158))&&n.default||n},157:function(e){e.exports={data:{site:{siteMetadata:{title:"My Site"}}}}},158:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(55),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},159:function(e,t,a){"use strict";var n=a(160),r=a(0),l=a.n(r),i=a(4),c=a.n(i),o=a(164),s=a.n(o);function u(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,c=e.title,o=n.data.site,u=t||o.siteMetadata.description;return l.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=u},160:function(e){e.exports={data:{site:{siteMetadata:{title:"My Site",description:"A starter that includes react-bootstrap and react-icons, along with SASS compilation.",author:"Billy Jacoby"}}}}},161:function(e,t,a){"use strict";var n=a(157),r=a(0),l=a.n(r),i=a(152),c=a(206),o=a(207),s=a(197),u=a(4),m=function(e){var t=e.siteTitle;return l.a.createElement("header",{style:{background:"#20232a"}},l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},l.a.createElement("h1",{style:{margin:0}},l.a.createElement(i.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};m.propTypes={siteTitle:a.n(u).a.string},m.defaultProps={siteTitle:""};var d=m,p=a(209),E=a(210),f=a(208),g=a(196),y=a(205),h=function(e){var t=e.pageInfo;return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{variant:"dark",expand:"lg",id:"site-navbar"},l.a.createElement(i.a,{to:"/",className:"link-no-style"},l.a.createElement(p.a.Brand,{as:"span"},"Title")),l.a.createElement(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(p.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(E.a,{className:"mr-auto",activeKey:t&&t.pageName},l.a.createElement(i.a,{to:"/page-2",className:"link-no-style"},l.a.createElement(E.a.Link,{as:"span",eventKey:"page-2"},"Page 2"))),l.a.createElement(E.a,{className:"ml-auto"},l.a.createElement(f.a,{inline:!0,onSubmit:function(e){return e.preventDefault()}},l.a.createElement(f.a.Group,null,l.a.createElement(g.a,{type:"text",placeholder:"Fake Search",className:"mr-2"})),l.a.createElement(y.a,null,"Fake Button"))))))};t.a=function(e){var t=e.children,a=e.pageInfo;return l.a.createElement(i.b,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,{fluid:!0,className:"px-0 main"},l.a.createElement(o.a,{noGutters:!0,className:"justify-content-center"},l.a.createElement(s.a,null,l.a.createElement(d,{siteTitle:e.site.siteMetadata.title}))),l.a.createElement(h,{pageInfo:a}),l.a.createElement(o.a,{noGutters:!0},l.a.createElement(s.a,null,l.a.createElement(c.a,{className:"mt-5"},l.a.createElement("main",null,t))))),l.a.createElement(c.a,{fluid:!0,className:"px-0"},l.a.createElement(o.a,{noGutters:!0},l.a.createElement(s.a,{className:"footer-col"},l.a.createElement("footer",null,l.a.createElement("span",null,"© ",(new Date).getFullYear(),", Built with"," ",l.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))))))},data:n})}}}]);
//# sourceMappingURL=component---src-pages-404-js-a54e6688b62bbb94b16b.js.map