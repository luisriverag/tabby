(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2048],{14375:function(e,t,r){"use strict";r.d(t,{j:function(){return o}});let n=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,s=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.flat(1/0).filter(Boolean).join(" ")},o=(e,t)=>r=>{var o;if((null==t?void 0:t.variants)==null)return s(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:i,defaultVariants:a}=t,l=Object.keys(i).map(e=>{let t=null==r?void 0:r[e],s=null==a?void 0:a[e];if(null===t)return null;let o=n(t)||n(s);return i[e][o]}),c=r&&Object.entries(r).reduce((e,t)=>{let[r,n]=t;return void 0===n||(e[r]=n),e},{}),d=null==t?void 0:null===(o=t.compoundVariants)||void 0===o?void 0:o.reduce((e,t)=>{let{class:r,className:n,...s}=t;return Object.entries(s).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...a,...c}[t]):({...a,...c})[t]===r})?[...e,r,n]:e},[]);return s(e,l,d,null==r?void 0:r.class,null==r?void 0:r.className)}},21644:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(3546),s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.365.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),i=(e,t)=>{let r=(0,n.forwardRef)(({color:r="currentColor",size:i=24,strokeWidth:a=2,absoluteStrokeWidth:l,className:c="",children:d,...u},f)=>(0,n.createElement)("svg",{ref:f,...s,width:i,height:i,stroke:r,strokeWidth:l?24*Number(a)/Number(i):a,className:["lucide",`lucide-${o(e)}`,c].join(" "),...u},[...t.map(([e,t])=>(0,n.createElement)(e,t)),...Array.isArray(d)?d:[d]]));return r.displayName=`${e}`,r}},83048:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(21644);/**
 * @license lucide-react v0.365.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,n.Z)("BookOpenText",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}],["path",{d:"M6 8h2",key:"30oboj"}],["path",{d:"M6 12h2",key:"32wvfc"}],["path",{d:"M16 8h2",key:"msurwy"}],["path",{d:"M16 12h2",key:"7q9ll5"}]])},40327:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(21644);/**
 * @license lucide-react v0.365.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,n.Z)("GitFork",[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",key:"1uq4wg"}],["path",{d:"M12 12v3",key:"158kv8"}]])},70418:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(21644);/**
 * @license lucide-react v0.365.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,n.Z)("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]])},63410:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(21644);/**
 * @license lucide-react v0.365.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,n.Z)("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]])},83024:function(e,t,r){Promise.resolve().then(r.bind(r,26756))},26756:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return w}});var n=r(36164),s=r(3546),o=r(70652),i=r.n(o),a=r(11978),l=r(31458),c=r(81565),d=r(84381),u=r(5493),f=r(23782),m=r(43240),h=r(11634),p=r(98150),x=r(82394);let v=(0,m.BX)("\n  mutation passwordReset($input: PasswordResetInput!) {\n    passwordReset(input: $input)\n  }\n"),g=f.Ry({password1:f.Z_(),password2:f.Z_(),code:f.Z_().optional()});function y(e){let{className:t,code:r,onSuccess:s,...o}=e,i=(0,u.cI)({resolver:(0,d.F)(g),defaultValues:{code:r}});(0,a.useRouter)();let{isSubmitting:f}=i.formState,m=(0,h.D)(v,{form:i});return(0,n.jsx)(p.l0,{...i,children:(0,n.jsxs)("div",{className:"grid gap-2",children:[(0,n.jsxs)("form",{className:"grid gap-4",onSubmit:i.handleSubmit(e=>{var t;return m({input:{...e,code:null!==(t=e.code)&&void 0!==t?t:""}}).then(e=>{var t;(null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.passwordReset)&&(null==s||s())})}),children:[(0,n.jsx)(p.Wi,{control:i.control,name:"password1",render:e=>{let{field:t}=e;return(0,n.jsxs)(p.xJ,{children:[(0,n.jsx)(p.lX,{children:"New Password"}),(0,n.jsx)(p.NI,{children:(0,n.jsx)(x.I,{type:"password",...t})}),(0,n.jsx)(p.zG,{})]})}}),(0,n.jsx)(p.Wi,{control:i.control,name:"password2",render:e=>{let{field:t}=e;return(0,n.jsxs)(p.xJ,{children:[(0,n.jsx)(p.lX,{children:"Confirm New Password"}),(0,n.jsx)(p.NI,{children:(0,n.jsx)(x.I,{type:"password",...t})}),(0,n.jsx)(p.zG,{})]})}}),(0,n.jsx)(p.Wi,{control:i.control,name:"code",render:e=>{let{field:t}=e;return(0,n.jsx)(p.xJ,{className:"hidden",children:(0,n.jsx)(p.NI,{children:(0,n.jsx)(x.I,{type:"hidden",...t})})})}}),(0,n.jsxs)(l.z,{type:"submit",className:"mt-2",disabled:f,children:[f&&(0,n.jsx)(c.IconSpinner,{className:"mr-2 h-4 w-4 animate-spin"}),"Reset password"]})]}),(0,n.jsx)(p.zG,{className:"text-center"})]})})}function w(){let[e,t]=s.useState(!1),r=(0,a.useSearchParams)(),o=r.get("code")||void 0;return e?(0,n.jsx)("div",{className:"w-[350px] space-y-6",children:(0,n.jsxs)("div",{className:"flex flex-col space-y-2 text-center",children:[(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsx)(c.IconCheckCircled,{className:"h-12 w-12 text-successful-foreground"})}),(0,n.jsx)("h1",{className:"text-2xl font-semibold tracking-tight",children:"Set a new password"}),(0,n.jsx)("p",{className:"pb-4 text-sm text-muted-foreground",children:"Your password has been changed."}),(0,n.jsx)(i(),{replace:!0,href:"/auth/signin",className:(0,l.d)(),children:"Go to Sign In"})]})}):(0,n.jsxs)("div",{className:"w-[350px] space-y-6",children:[(0,n.jsxs)("div",{className:"flex flex-col space-y-2 text-center",children:[(0,n.jsx)("h1",{className:"text-2xl font-semibold tracking-tight",children:"Set a new password"}),(0,n.jsx)("p",{className:"text-sm text-muted-foreground",children:"Please enter a new password for your account."})]}),(0,n.jsx)(y,{code:o,onSuccess:()=>t(!0)})]})}},31458:function(e,t,r){"use strict";r.d(t,{d:function(){return l},z:function(){return c}});var n=r(36164),s=r(3546),o=r(74047),i=r(14375),a=r(74248);let l=(0,i.j)("inline-flex items-center justify-center rounded-md text-sm font-medium shadow ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-md hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90","hover-destructive":"shadow-none hover:bg-destructive/90 hover:text-destructive-foreground",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"shadow-none hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 shadow-none hover:underline"},size:{default:"h-8 px-4 py-2",sm:"h-8 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-8 w-8 p-0"}},defaultVariants:{variant:"default",size:"default"}}),c=s.forwardRef((e,t)=>{let{className:r,variant:s,size:i,asChild:c=!1,...d}=e,u=c?o.g7:"button";return(0,n.jsx)(u,{className:(0,a.cn)(l({variant:s,size:i,className:r})),ref:t,...d})});c.displayName="Button"},98150:function(e,t,r){"use strict";r.d(t,{NI:function(){return x},Wi:function(){return u},l0:function(){return c},lX:function(){return p},pf:function(){return v},xJ:function(){return h},zG:function(){return g}});var n=r(36164),s=r(3546),o=r(74047),i=r(5493),a=r(74248),l=r(5266);let c=i.RV,d=s.createContext({}),u=e=>{let{...t}=e;return(0,n.jsx)(d.Provider,{value:{name:t.name},children:(0,n.jsx)(i.Qr,{...t})})},f=()=>{let e=s.useContext(d),t=s.useContext(m),{getFieldState:r,formState:n}=(0,i.Gc)(),o=e.name||"root",a=r(o,n);if(!n)throw Error("useFormField should be used within <Form>");let{id:l}=t;return{id:l,name:o,formItemId:"".concat(l,"-form-item"),formDescriptionId:"".concat(l,"-form-item-description"),formMessageId:"".concat(l,"-form-item-message"),...a}},m=s.createContext({}),h=s.forwardRef((e,t)=>{let{className:r,...o}=e,i=s.useId();return(0,n.jsx)(m.Provider,{value:{id:i},children:(0,n.jsx)("div",{ref:t,className:(0,a.cn)("space-y-2",r),...o})})});h.displayName="FormItem";let p=s.forwardRef((e,t)=>{let{className:r,required:s,...o}=e,{error:i,formItemId:c}=f();return(0,n.jsx)(l._,{ref:t,className:(0,a.cn)(i&&"text-destructive",s&&'after:ml-0.5 after:text-destructive after:content-["*"]',r),htmlFor:c,...o})});p.displayName="FormLabel";let x=s.forwardRef((e,t)=>{let{...r}=e,{error:s,formItemId:i,formDescriptionId:a,formMessageId:l}=f();return(0,n.jsx)(o.g7,{ref:t,id:i,"aria-describedby":s?"".concat(a," ").concat(l):"".concat(a),"aria-invalid":!!s,...r})});x.displayName="FormControl";let v=s.forwardRef((e,t)=>{let{className:r,...s}=e,{formDescriptionId:o}=f();return(0,n.jsx)("div",{ref:t,id:o,className:(0,a.cn)("text-sm text-muted-foreground",r),...s})});v.displayName="FormDescription";let g=s.forwardRef((e,t)=>{let{className:r,children:s,...o}=e,{error:i,formMessageId:l}=f(),c=i?String(null==i?void 0:i.message):s;return c?(0,n.jsx)("p",{ref:t,id:l,className:(0,a.cn)("text-sm font-medium text-destructive",r),...o,children:c}):null});g.displayName="FormMessage"},82394:function(e,t,r){"use strict";r.d(t,{I:function(){return i}});var n=r(36164),s=r(3546),o=r(74248);let i=s.forwardRef((e,t)=>{let{className:r,type:s,...i}=e;return(0,n.jsx)("input",{type:s,className:(0,o.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...i})});i.displayName="Input"},5266:function(e,t,r){"use strict";r.d(t,{_:function(){return c}});var n=r(36164),s=r(3546),o=r(90893),i=r(14375),a=r(74248);let l=(0,i.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)(o.f,{ref:t,className:(0,a.cn)(l(),r),...s})});c.displayName=o.f.displayName},72205:function(e,t,r){"use strict";r.d(t,{WV:function(){return a},jH:function(){return l}});var n=r(65122),s=r(3546),o=r(30171),i=r(74047);let a=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=(0,s.forwardRef)((e,r)=>{let{asChild:o,...a}=e,l=o?i.g7:t;return(0,s.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,s.createElement)(l,(0,n.Z)({},a,{ref:r}))});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function l(e,t){e&&(0,o.flushSync)(()=>e.dispatchEvent(t))}}},function(e){e.O(0,[872,55,3004,652,240,7444,1565,410,3396,3375,5289,1744],function(){return e(e.s=83024)}),_N_E=e.O()}]);