(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[8442],{31199:function(V,Z,t){"use strict";var _=t(22122),F=t(28991),f=t(81253),u=t(67294),j=t(62404),C=["fieldProps","min","proFieldProps","max"],x=function(B,R){var c=B.fieldProps,m=B.min,S=B.proFieldProps,v=B.max,s=(0,f.Z)(B,C);return u.createElement(j.Z,(0,_.Z)({mode:"edit",valueType:"digit",fieldProps:(0,F.Z)({min:m,max:v},c),ref:R,filedConfig:{defaultProps:{width:"100%"}},proFieldProps:S},s))};Z.Z=u.forwardRef(x)},64317:function(V,Z,t){"use strict";var _=t(22122),F=t(28991),f=t(81253),u=t(67294),j=t(62404),C=t(22270),x=t(66758),O=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],B=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],R=u.forwardRef(function(s,T){var G=s.fieldProps,I=s.children,K=s.params,Q=s.proFieldProps,A=s.mode,N=s.valueEnum,H=s.request,b=s.showSearch,J=s.options,w=(0,f.Z)(s,O),$=(0,u.useContext)(x.Z);return u.createElement(j.Z,(0,_.Z)({mode:"edit",valueEnum:(0,C.h)(N),request:H,params:K,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,F.Z)({options:J,mode:A,showSearch:b,getPopupContainer:$.getPopupContainer},G),ref:T,proFieldProps:Q},w),I)}),c=u.forwardRef(function(s,T){var G=s.fieldProps,I=s.children,K=s.params,Q=s.proFieldProps,A=s.mode,N=s.valueEnum,H=s.request,b=s.options,J=(0,f.Z)(s,B),w=(0,F.Z)({options:b,mode:A||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label"},G),$=(0,u.useContext)(x.Z);return u.createElement(j.Z,(0,_.Z)({mode:"edit",valueEnum:(0,C.h)(N),request:H,params:K,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,F.Z)({getPopupContainer:$.getPopupContainer},w),ref:T,proFieldProps:Q},J),I)}),m=R,S=c,v=m;v.SearchSelect=S,v.displayName="ProFormComponent",Z.Z=v},5966:function(V,Z,t){"use strict";var _=t(22122),F=t(81253),f=t(67294),u=t(62404),j=["fieldProps","proFieldProps"],C=["fieldProps","proFieldProps"],x="text",O=function(m){var S=m.fieldProps,v=m.proFieldProps,s=(0,F.Z)(m,j);return f.createElement(u.Z,(0,_.Z)({mode:"edit",valueType:x,fieldProps:S,filedConfig:{valueType:x},proFieldProps:v},s))},B=function(m){var S=m.fieldProps,v=m.proFieldProps,s=(0,F.Z)(m,C);return f.createElement(u.Z,(0,_.Z)({mode:"edit",valueType:"password",fieldProps:S,proFieldProps:v,filedConfig:{valueType:x}},s))},R=O;R.Password=B,R.displayName="ProFormComponent",Z.Z=R},88227:function(V){V.exports={card:"card___2gwEq",result:"result___OtC7Q"}},52953:function(){},29557:function(V,Z,t){"use strict";t.r(Z);var _=t(58024),F=t(39144),f=t(48736),u=t(27049),j=t(17462),C=t(76772),x=t(3182),O=t(2824),B=t(57106),R=t(99683),c=t(57663),m=t(71577),S=t(95300),v=t(7277),s=t(98858),T=t(4914),G=t(94043),I=t.n(G),K=t(67294),Q=t(75362),A=t(65554),N=t(64317),H=t(952),b=t(5966),J=t(31199),w=t(88227),$=t.n(w),e=t(85893),r=function(l){var a=l.stepData,p=l.bordered,D=a.payAccount,M=a.receiverAccount,E=a.receiverName,P=a.amount;return(0,e.jsxs)(T.Z,{column:1,bordered:p,children:[(0,e.jsxs)(T.Z.Item,{label:"\u4ED8\u6B3E\u8D26\u6237",children:[" ",D]}),(0,e.jsxs)(T.Z.Item,{label:"\u6536\u6B3E\u8D26\u6237",children:[" ",M]}),(0,e.jsxs)(T.Z.Item,{label:"\u6536\u6B3E\u4EBA\u59D3\u540D",children:[" ",E]}),(0,e.jsx)(T.Z.Item,{label:"\u8F6C\u8D26\u91D1\u989D",children:(0,e.jsx)(v.Z,{value:P,suffix:(0,e.jsx)("span",{style:{fontSize:14},children:"\u5143"}),precision:2})})]})},n=function(l){return(0,e.jsx)(R.ZP,{status:"success",title:"\u64CD\u4F5C\u6210\u529F",subTitle:"\u9884\u8BA1\u4E24\u5C0F\u65F6\u5185\u5230\u8D26",extra:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(m.Z,{type:"primary",onClick:l.onFinish,children:"\u518D\u8F6C\u4E00\u7B14"}),(0,e.jsx)(m.Z,{children:"\u67E5\u770B\u8D26\u5355"})]}),className:$().result,children:l.children})},o=function(){var l=(0,K.useState)({payAccount:"ant-design@alipay.com",receiverAccount:"test@example.com",receiverName:"Alex",amount:"500",receiverMode:"alipay"}),a=(0,O.Z)(l,2),p=a[0],D=a[1],M=(0,K.useState)(0),E=(0,O.Z)(M,2),P=E[0],z=E[1],L=(0,K.useRef)();return(0,e.jsx)(Q.ZP,{content:"\u5C06\u4E00\u4E2A\u5197\u957F\u6216\u7528\u6237\u4E0D\u719F\u6089\u7684\u8868\u5355\u4EFB\u52A1\u5206\u6210\u591A\u4E2A\u6B65\u9AA4\uFF0C\u6307\u5BFC\u7528\u6237\u5B8C\u6210\u3002",children:(0,e.jsxs)(F.Z,{bordered:!1,children:[(0,e.jsxs)(A.L,{current:P,onCurrentChange:z,submitter:{render:function(h,g){return h.step===2?null:g}},children:[(0,e.jsxs)(A.L.StepForm,{formRef:L,title:"\u586B\u5199\u8F6C\u8D26\u4FE1\u606F",initialValues:p,onFinish:function(){var i=(0,x.Z)(I().mark(function h(g){return I().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return D(g),W.abrupt("return",!0);case 2:case"end":return W.stop()}},h)}));return function(h){return i.apply(this,arguments)}}(),children:[(0,e.jsx)(N.Z,{label:"\u4ED8\u6B3E\u8D26\u6237",width:"md",name:"payAccount",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4ED8\u6B3E\u8D26\u6237"}],valueEnum:{"ant-design@alipay.com":"ant-design@alipay.com"}}),(0,e.jsxs)(H.ZP.Group,{title:"\u6536\u6B3E\u8D26\u6237",size:8,children:[(0,e.jsx)(N.Z,{name:"receiverMode",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4ED8\u6B3E\u8D26\u6237"}],valueEnum:{alipay:"\u652F\u4ED8\u5B9D",bank:"\u94F6\u884C\u8D26\u6237"}}),(0,e.jsx)(b.Z,{name:"receiverAccount",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6536\u6B3E\u4EBA\u8D26\u6237"},{type:"email",message:"\u8D26\u6237\u540D\u5E94\u4E3A\u90AE\u7BB1\u683C\u5F0F"}],placeholder:"test@example.com"})]}),(0,e.jsx)(b.Z,{label:"\u6536\u6B3E\u4EBA\u59D3\u540D",width:"md",name:"receiverName",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6536\u6B3E\u4EBA\u59D3\u540D"}],placeholder:"\u8BF7\u8F93\u5165\u6536\u6B3E\u4EBA\u59D3\u540D"}),(0,e.jsx)(J.Z,{label:"\u8F6C\u8D26\u91D1\u989D",name:"amount",width:"md",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u8F6C\u8D26\u91D1\u989D"},{pattern:/^(\d+)((?:\.\d+)?)$/,message:"\u8BF7\u8F93\u5165\u5408\u6CD5\u91D1\u989D\u6570\u5B57"}],placeholder:"\u8BF7\u8F93\u5165\u91D1\u989D",fieldProps:{prefix:"\uFFE5"}})]}),(0,e.jsx)(A.L.StepForm,{title:"\u786E\u8BA4\u8F6C\u8D26\u4FE1\u606F",children:(0,e.jsxs)("div",{className:$().result,children:[(0,e.jsx)(C.Z,{closable:!0,showIcon:!0,message:"\u786E\u8BA4\u8F6C\u8D26\u540E\uFF0C\u8D44\u91D1\u5C06\u76F4\u63A5\u6253\u5165\u5BF9\u65B9\u8D26\u6237\uFF0C\u65E0\u6CD5\u9000\u56DE\u3002",style:{marginBottom:24}}),(0,e.jsx)(r,{stepData:p,bordered:!0}),(0,e.jsx)(u.Z,{style:{margin:"24px 0"}}),(0,e.jsx)(b.Z.Password,{label:"\u652F\u4ED8\u5BC6\u7801",width:"md",name:"password",required:!1,rules:[{required:!0,message:"\u9700\u8981\u652F\u4ED8\u5BC6\u7801\u624D\u80FD\u8FDB\u884C\u652F\u4ED8"}]})]})}),(0,e.jsx)(A.L.StepForm,{title:"\u5B8C\u6210",children:(0,e.jsx)(n,{onFinish:(0,x.Z)(I().mark(function i(){var h;return I().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:z(0),(h=L.current)===null||h===void 0||h.resetFields();case 2:case"end":return U.stop()}},i)})),children:(0,e.jsx)(r,{stepData:p})})})]}),(0,e.jsx)(u.Z,{style:{margin:"40px 0 24px"}}),(0,e.jsxs)("div",{className:$().desc,children:[(0,e.jsx)("h3",{children:"\u8BF4\u660E"}),(0,e.jsx)("h4",{children:"\u8F6C\u8D26\u5230\u652F\u4ED8\u5B9D\u8D26\u6237"}),(0,e.jsx)("p",{children:"\u5982\u679C\u9700\u8981\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u653E\u4E00\u4E9B\u5173\u4E8E\u4EA7\u54C1\u7684\u5E38\u89C1\u95EE\u9898\u8BF4\u660E\u3002\u5982\u679C\u9700\u8981\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u653E\u4E00\u4E9B\u5173\u4E8E\u4EA7\u54C1\u7684\u5E38\u89C1\u95EE\u9898\u8BF4\u660E\u3002\u5982\u679C\u9700\u8981\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u653E\u4E00\u4E9B\u5173\u4E8E\u4EA7\u54C1\u7684\u5E38\u89C1\u95EE\u9898\u8BF4\u660E\u3002"}),(0,e.jsx)("h4",{children:"\u8F6C\u8D26\u5230\u94F6\u884C\u5361"}),(0,e.jsx)("p",{children:"\u5982\u679C\u9700\u8981\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u653E\u4E00\u4E9B\u5173\u4E8E\u4EA7\u54C1\u7684\u5E38\u89C1\u95EE\u9898\u8BF4\u660E\u3002\u5982\u679C\u9700\u8981\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u653E\u4E00\u4E9B\u5173\u4E8E\u4EA7\u54C1\u7684\u5E38\u89C1\u95EE\u9898\u8BF4\u660E\u3002\u5982\u679C\u9700\u8981\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u653E\u4E00\u4E9B\u5173\u4E8E\u4EA7\u54C1\u7684\u5E38\u89C1\u95EE\u9898\u8BF4\u660E\u3002"})]})]})})};Z.default=o},4914:function(V,Z,t){"use strict";t.d(Z,{K:function(){return A},Z:function(){return $}});var _=t(96156),F=t(28481),f=t(90484),u=t(67294),j=t(94184),C=t.n(j),x=t(50344),O=t(24308),B=t(21687),R=t(65632),c=t(22122);function m(e){return e!=null}var S=function(r){var n=r.itemPrefixCls,o=r.component,d=r.span,l=r.className,a=r.style,p=r.labelStyle,D=r.contentStyle,M=r.bordered,E=r.label,P=r.content,z=r.colon,L=o;if(M){var i;return u.createElement(L,{className:C()((i={},(0,_.Z)(i,"".concat(n,"-item-label"),m(E)),(0,_.Z)(i,"".concat(n,"-item-content"),m(P)),i),l),style:a,colSpan:d},m(E)&&u.createElement("span",{style:p},E),m(P)&&u.createElement("span",{style:D},P))}return u.createElement(L,{className:C()("".concat(n,"-item"),l),style:a,colSpan:d},u.createElement("div",{className:"".concat(n,"-item-container")},(E||E===0)&&u.createElement("span",{className:C()("".concat(n,"-item-label"),(0,_.Z)({},"".concat(n,"-item-no-colon"),!z)),style:p},E),(P||P===0)&&u.createElement("span",{className:C()("".concat(n,"-item-content")),style:D},P)))},v=S;function s(e,r,n){var o=r.colon,d=r.prefixCls,l=r.bordered,a=n.component,p=n.type,D=n.showLabel,M=n.showContent,E=n.labelStyle,P=n.contentStyle;return e.map(function(z,L){var i=z.props,h=i.label,g=i.children,U=i.prefixCls,W=U===void 0?d:U,X=i.className,y=i.style,q=i.labelStyle,Y=i.contentStyle,ee=i.span,te=ee===void 0?1:ee,k=z.key;return typeof a=="string"?u.createElement(v,{key:"".concat(p,"-").concat(k||L),className:X,style:y,labelStyle:(0,c.Z)((0,c.Z)({},E),q),contentStyle:(0,c.Z)((0,c.Z)({},P),Y),span:te,colon:o,component:a,itemPrefixCls:W,bordered:l,label:D?h:null,content:M?g:null}):[u.createElement(v,{key:"label-".concat(k||L),className:X,style:(0,c.Z)((0,c.Z)((0,c.Z)({},E),y),q),span:1,colon:o,component:a[0],itemPrefixCls:W,bordered:l,label:h}),u.createElement(v,{key:"content-".concat(k||L),className:X,style:(0,c.Z)((0,c.Z)((0,c.Z)({},P),y),Y),span:te*2-1,component:a[1],itemPrefixCls:W,bordered:l,content:g})]})}var T=function(r){var n=u.useContext(A),o=r.prefixCls,d=r.vertical,l=r.row,a=r.index,p=r.bordered;return d?u.createElement(u.Fragment,null,u.createElement("tr",{key:"label-".concat(a),className:"".concat(o,"-row")},s(l,r,(0,c.Z)({component:"th",type:"label",showLabel:!0},n))),u.createElement("tr",{key:"content-".concat(a),className:"".concat(o,"-row")},s(l,r,(0,c.Z)({component:"td",type:"content",showContent:!0},n)))):u.createElement("tr",{key:a,className:"".concat(o,"-row")},s(l,r,(0,c.Z)({component:p?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},n)))},G=T,I=function(r){var n=r.children;return n},K=I,Q=t(96159),A=u.createContext({}),N={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function H(e,r){if(typeof e=="number")return e;if((0,f.Z)(e)==="object")for(var n=0;n<O.c4.length;n++){var o=O.c4[n];if(r[o]&&e[o]!==void 0)return e[o]||N[o]}return 3}function b(e,r,n){var o=e;return(r===void 0||r>n)&&(o=(0,Q.Tm)(e,{span:n}),(0,B.Z)(r===void 0,"Descriptions","Sum of column `span` in a line not match `column` of Descriptions.")),o}function J(e,r){var n=(0,x.Z)(e).filter(function(a){return a}),o=[],d=[],l=r;return n.forEach(function(a,p){var D,M=(D=a.props)===null||D===void 0?void 0:D.span,E=M||1;if(p===n.length-1){d.push(b(a,M,l)),o.push(d);return}E<l?(l-=E,d.push(a)):(d.push(b(a,E,l)),o.push(d),l=r,d=[])}),o}function w(e){var r,n=e.prefixCls,o=e.title,d=e.extra,l=e.column,a=l===void 0?N:l,p=e.colon,D=p===void 0?!0:p,M=e.bordered,E=e.layout,P=e.children,z=e.className,L=e.style,i=e.size,h=e.labelStyle,g=e.contentStyle,U=u.useContext(R.E_),W=U.getPrefixCls,X=U.direction,y=W("descriptions",n),q=u.useState({}),Y=(0,F.Z)(q,2),ee=Y[0],te=Y[1],k=H(a,ee);u.useEffect(function(){var re=O.ZP.subscribe(function(ue){(0,f.Z)(a)==="object"&&te(ue)});return function(){O.ZP.unsubscribe(re)}},[]);var ne=J(P,k),se=u.useMemo(function(){return{labelStyle:h,contentStyle:g}},[h,g]);return u.createElement(A.Provider,{value:se},u.createElement("div",{className:C()(y,(r={},(0,_.Z)(r,"".concat(y,"-").concat(i),i&&i!=="default"),(0,_.Z)(r,"".concat(y,"-bordered"),!!M),(0,_.Z)(r,"".concat(y,"-rtl"),X==="rtl"),r),z),style:L},(o||d)&&u.createElement("div",{className:"".concat(y,"-header")},o&&u.createElement("div",{className:"".concat(y,"-title")},o),d&&u.createElement("div",{className:"".concat(y,"-extra")},d)),u.createElement("div",{className:"".concat(y,"-view")},u.createElement("table",null,u.createElement("tbody",null,ne.map(function(re,ue){return u.createElement(G,{key:ue,index:ue,colon:D,prefixCls:y,vertical:E==="vertical",bordered:M,row:re})}))))))}w.Item=K;var $=w},98858:function(V,Z,t){"use strict";var _=t(38663),F=t.n(_),f=t(52953),u=t.n(f)}}]);
