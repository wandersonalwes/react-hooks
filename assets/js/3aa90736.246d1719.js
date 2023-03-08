"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[978],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>f});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(o),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return o?n.createElement(f,s(s({ref:t},p),{},{components:o})):n.createElement(f,s({ref:t},p))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=o[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},6814:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=o(7462),r=(o(7294),o(3905));const a={sidebar_position:1},s="use-disclosure",i={unversionedId:"hooks/use-disclosure",id:"hooks/use-disclosure",title:"use-disclosure",description:"Import",source:"@site/docs/hooks/use-disclosure.md",sourceDirName:"hooks",slug:"/hooks/use-disclosure",permalink:"/react-hooks/docs/hooks/use-disclosure",draft:!1,editUrl:"https://github.com/wandersonalwes/react-hooks/tree/main/website/docs/hooks/use-disclosure.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Hooks",permalink:"/react-hooks/docs/category/hooks"}},l={},c=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Callbacks",id:"callbacks",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"use-disclosure"},"use-disclosure"),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { useDisclosure } from "@wandersonalwes/react-hooks";\n')),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"The useDisclosure hook is a powerful tool for managing boolean state in your React application. With this hook, you can easily create and manage controlled modals, popovers, and other similar components."),(0,r.kt)("p",null,"This hook provides ",(0,r.kt)("inlineCode",{parentName:"p"},"open"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"close")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"toggle")," handlers, making it simple to manage the state of your components with just a few lines of code. Additionally, you can pass in optional ",(0,r.kt)("inlineCode",{parentName:"p"},"onOpen")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"onClose")," callbacks to customize the behavior of your components when they are opened or closed."),(0,r.kt)("p",null,"Whether you're building a complex application with multiple components or just need a simple way to manage boolean state, the useDisclosure hook is a great choice. With its flexibility and ease of use, it can help you create better, more efficient components in no time."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { useDisclosure } from "@wandersonalwes/react-hooks";\n\nfunction Demo() {\n  const [opened, handlers] = useDisclosure();\n\n  // Sets opened to true\n  handlers.open();\n\n  // Sets opened to false\n  handlers.close();\n\n  // Sets opened to true if it was false and vice versa\n  handlers.toggle();\n}\n')),(0,r.kt)("h2",{id:"callbacks"},"Callbacks"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function useDisclosure(\n  initialState: boolean,\n  callbacks?: {\n    onOpen?(): void;\n    onClose?(): void;\n  }\n): [\n  boolean,\n  {\n    open: () => void;\n    close: () => void;\n    toggle: () => void;\n  }\n];\n")))}d.isMDXComponent=!0}}]);