"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7145],{34437:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>f,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var n=i(87462),p=(i(67294),i(3905));const o={title:"Ripple effect"},r=void 0,a={unversionedId:"guides/ripple-effect",id:"guides/ripple-effect",title:"Ripple effect",description:"The ripple effect is a visual feedback that occurs when a user interacts with a pressable UI element, such as a button. This response takes the form of a circular ripple expanding from the point of contact, much like a drop falling into water and creating ripples.",source:"@site/docs/guides/11-ripple-effect.md",sourceDirName:"guides",slug:"/guides/ripple-effect",permalink:"/react-native-paper/docs/guides/ripple-effect",draft:!1,editUrl:"https://github.com/callstack/react-native-paper/tree/main/docs/docs/guides/11-ripple-effect.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Ripple effect"},sidebar:"tutorialSidebar",previous:{title:"Introducing v5 with Material You",permalink:"/react-native-paper/docs/guides/migration-guide-to-5.0"}},l={},s=[{value:"Customize ripple effect color in component",id:"customize-ripple-effect-color-in-component",level:2},{value:"Disable ripple effect in all components",id:"disable-ripple-effect-in-all-components",level:2}],c={toc:s};function f(e){let{components:t,...i}=e;return(0,p.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"The ripple effect is a visual feedback that occurs when a user interacts with a pressable UI element, such as a button. This response takes the form of a circular ripple expanding from the point of contact, much like a drop falling into water and creating ripples."),(0,p.kt)("p",null,"The ripple effect is an essential aspect of Material Design, and Paper's pressable components have it enabled by default. Nonetheless, it can be tailored to suit specific needs."),(0,p.kt)("admonition",{type:"note"},(0,p.kt)("p",{parentName:"admonition"},"The ripple effect on the iOS platform is replaced by a highlight effect.")),(0,p.kt)("h2",{id:"customize-ripple-effect-color-in-component"},"Customize ripple effect color in component"),(0,p.kt)("p",null,"The ",(0,p.kt)("inlineCode",{parentName:"p"},"rippleColor")," prop is available for every pressable component which allows you to set the color of the ripple effect. For the instance, to make the ",(0,p.kt)("inlineCode",{parentName:"p"},"Button")," component's ripple effect transparent, simply pass the desired color value to the prop:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},'<Button\n  rippleColor="#FF000020"\n  icon="camera"\n  mode="contained"\n  onPress={() => console.log(\'Pressed\')}>\n  Press me\n</Button>\n')),(0,p.kt)("h2",{id:"disable-ripple-effect-in-all-components"},"Disable ripple effect in all components"),(0,p.kt)("p",null,"To disable the ripple effect in ",(0,p.kt)("strong",{parentName:"p"},"all")," of Paper's components set ",(0,p.kt)("inlineCode",{parentName:"p"},"rippleEffectEnabled: false")," on the ",(0,p.kt)("inlineCode",{parentName:"p"},"settings")," prop of ",(0,p.kt)("inlineCode",{parentName:"p"},"PaperProvider"),"."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"import { Provider as PaperProvider } from 'react-native-paper';\n// ...\n\n<PaperProvider\n  settings={{\n    rippleEffectEnabled: false\n  }}\n>\n  // ...\n</PaperProvider>\n")))}f.isMDXComponent=!0}}]);