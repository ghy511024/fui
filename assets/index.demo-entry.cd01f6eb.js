import{ad as e,a4 as l,ae as a,af as t,a9 as A,ag as u,a5 as d,ay as i,F as o,b as n,aa as s,u as E,c as p,a7 as r,ab as B}from"./vendor.21146406.js";import{u as b,a as c}from"./index.92ad74d1.js";const v={data:()=>({options:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭",disabled:!0}],inputValue:"选项2",multipleInputValue:["选项2"]})},m=n(" 基础 "),C={class:"demo-card__view"};v.render=function(E,p,r,B,b,c){const v=e("f-option"),f=e("f-select"),D=e("component-demo");return l(),a(D,{"demo-file-name":"basic","relative-url":"E:/develop/workespace/58git_public/fui/src-fui/select/demos/basic.demo.md",title:"基础",code:"%3Ctemplate%3E%0A%20%20%3Cf-select%20%3AinputValue%3D%22inputValue%22%3E%0A%20%20%20%20%3Cf-option%0A%20%20%20%20%20%20v-for%3D%22item%20in%20options%22%0A%20%20%20%20%20%20%3Akey%3D%22item.value%22%0A%20%20%20%20%20%20%3Alabel%3D%22item.label%22%0A%20%20%20%20%20%20%3Avalue%3D%22item.value%22%0A%20%20%20%20%20%20%3Adisabled%3D%22item.disabled%22%0A%20%20%20%20%3E%20%7B%7Bitem.label%7D%7D%3C%2Ff-option%3E%0A%20%20%3C%2Ff-select%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aexport%20default%20%7B%0A%20%20data%20()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20options%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22%E9%80%89%E9%A1%B91%22%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22%E9%BB%84%E9%87%91%E7%B3%95%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22%E9%80%89%E9%A1%B92%22%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22%E5%8F%8C%E7%9A%AE%E5%A5%B6%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22%E9%80%89%E9%A1%B93%22%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22%E8%9A%B5%E4%BB%94%E7%85%8E%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22%E9%80%89%E9%A1%B94%22%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22%E9%BE%99%E9%A1%BB%E9%9D%A2%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22%E9%80%89%E9%A1%B95%22%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22%E5%8C%97%E4%BA%AC%E7%83%A4%E9%B8%AD%22%2C%0A%20%20%20%20%20%20%20%20%20%20disabled%3A%20true%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20inputValue%3A%20%22%E9%80%89%E9%A1%B92%22%2C%0A%20%20%20%20%20%20multipleInputValue%3A%20%5B%22%E9%80%89%E9%A1%B92%22%5D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%3C%2Fscript%3E"},{title:t((()=>[m])),content:t((()=>[])),demo:t((()=>[A("div",C,[u(f,{inputValue:b.inputValue},{default:t((()=>[(l(!0),d(o,null,i(b.options,(e=>(l(),a(v,{key:e.value,label:e.label,value:e.value,disabled:e.disabled},{default:t((()=>[n(s(e.label),1)])),_:2},1032,["label","value","disabled"])))),128))])),_:1},8,["inputValue"])])])),_:1})};const f={data:()=>({options:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭",disabled:!0}],inputValue:"选项2",multipleInputValue:["选项2"],placeholder:"今天吃什么"})},D=n(" 占位符 "),h={class:"demo-card__view"};f.render=function(E,p,r,B,b,c){const v=e("f-option"),m=e("f-select"),C=e("component-demo");return l(),a(C,{"demo-file-name":"placeholder","relative-url":"E:/develop/workespace/58git_public/fui/src-fui/select/demos/placeholder.demo.md",title:"占位符",code:"%3Ctemplate%3E%0A%20%20%3Cf-select%20%3AinputValue%3D%22inputValue%22%20%3Aplaceholder%3D%22placeholder%22%3E%0A%20%20%20%20%3Cf-option%0A%20%20%20%20%20%20v-for%3D%22item%20in%20options%22%0A%20%20%20%20%20%20%3Akey%3D%22item.value%22%0A%20%20%20%20%20%20%3Alabel%3D%22item.label%22%0A%20%20%20%20%20%20%3Avalue%3D%22item.value%22%0A%20%20%20%20%20%20%3Adisabled%3D%22item.disabled%22%0A%20%20%20%20%3E%20%7B%7Bitem.label%7D%7D%3C%2Ff-option%3E%0A%20%20%3C%2Ff-select%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aexport%20default%20%7B%0A%20%20data%20()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20options%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22%E9%80%89%E9%A1%B91%22%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22%E9%BB%84%E9%87%91%E7%B3%95%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22%E9%80%89%E9%A1%B92%22%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22%E5%8F%8C%E7%9A%AE%E5%A5%B6%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22%E9%80%89%E9%A1%B93%22%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22%E8%9A%B5%E4%BB%94%E7%85%8E%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22%E9%80%89%E9%A1%B94%22%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22%E9%BE%99%E9%A1%BB%E9%9D%A2%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22%E9%80%89%E9%A1%B95%22%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22%E5%8C%97%E4%BA%AC%E7%83%A4%E9%B8%AD%22%2C%0A%20%20%20%20%20%20%20%20%20%20disabled%3A%20true%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20inputValue%3A%20%22%E9%80%89%E9%A1%B92%22%2C%0A%20%20%20%20%20%20multipleInputValue%3A%20%5B%22%E9%80%89%E9%A1%B92%22%5D%2C%0A%20%20%20%20%20%20placeholder%3A%20%22%E4%BB%8A%E5%A4%A9%E5%90%83%E4%BB%80%E4%B9%88%22%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%3C%2Fscript%3E"},{title:t((()=>[D])),content:t((()=>[])),demo:t((()=>[A("div",h,[u(m,{inputValue:b.inputValue,placeholder:b.placeholder},{default:t((()=>[(l(!0),d(o,null,i(b.options,(e=>(l(),a(v,{key:e.value,label:e.label,value:e.value,disabled:e.disabled},{default:t((()=>[n(s(e.label),1)])),_:2},1032,["label","value","disabled"])))),128))])),_:1},8,["inputValue","placeholder"])])])),_:1})};const _={data:()=>({options:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭",disabled:!0}]})},V=n(" 禁用 "),y={class:"demo-card__view"};_.render=function(E,p,r,B,b,c){const v=e("f-option"),m=e("f-select"),C=e("component-demo");return l(),a(C,{"demo-file-name":"disabled","relative-url":"E:/develop/workespace/58git_public/fui/src-fui/select/demos/disabled.demo.md",title:"禁用",code:"%3Ctemplate%3E%0A%20%20%3Cf-select%20%3AinputValue%3D%22inputValue%22%20%3Adisabled%3D%22true%22%3E%0A%20%20%20%20%3Cf-option%0A%20%20%20%20%20%20v-for%3D%22item%20in%20options%22%0A%20%20%20%20%20%20%3Akey%3D%22item.value%22%0A%20%20%20%20%20%20%3Alabel%3D%22item.label%22%0A%20%20%20%20%20%20%3Avalue%3D%22item.value%22%0A%20%20%20%20%20%20%3Adisabled%3D%22item.disabled%22%0A%20%20%20%20%3E%20%7B%7Bitem.label%7D%7D%3C%2Ff-option%3E%0A%20%20%3C%2Ff-select%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aexport%20default%20%7B%0A%20%20data%20()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20options%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22%E9%80%89%E9%A1%B91%22%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22%E9%BB%84%E9%87%91%E7%B3%95%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22%E9%80%89%E9%A1%B92%22%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22%E5%8F%8C%E7%9A%AE%E5%A5%B6%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22%E9%80%89%E9%A1%B93%22%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22%E8%9A%B5%E4%BB%94%E7%85%8E%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22%E9%80%89%E9%A1%B94%22%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22%E9%BE%99%E9%A1%BB%E9%9D%A2%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22%E9%80%89%E9%A1%B95%22%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22%E5%8C%97%E4%BA%AC%E7%83%A4%E9%B8%AD%22%2C%0A%20%20%20%20%20%20%20%20%20%20disabled%3A%20true%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%2F%2F%20inputValue%3A%20%22%E9%80%89%E9%A1%B92%22%2C%0A%20%20%20%20%20%20%2F%2F%20multipleInputValue%3A%20%5B%22%E9%80%89%E9%A1%B92%22%5D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%3C%2Fscript%3E"},{title:t((()=>[V])),content:t((()=>[])),demo:t((()=>[A("div",y,[u(m,{inputValue:E.inputValue,disabled:!0},{default:t((()=>[(l(!0),d(o,null,i(b.options,(e=>(l(),a(v,{key:e.value,label:e.label,value:e.value,disabled:e.disabled},{default:t((()=>[n(s(e.label),1)])),_:2},1032,["label","value","disabled"])))),128))])),_:1},8,["inputValue"])])])),_:1})};const x={data:()=>({options:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭",disabled:!0}],inputValue:"选项2",multipleInputValue:["选项2"]})},F=n(" 默认值 "),w={class:"demo-card__view"};x.render=function(E,p,r,B,b,c){const v=e("f-option"),m=e("f-select"),C=e("component-demo");return l(),a(C,{"demo-file-name":"inputValue","relative-url":"E:/develop/workespace/58git_public/fui/src-fui/select/demos/inputValue.demo.md",title:"默认值",code:"%3Ctemplate%3E%0A%20%20%3Cf-select%20%3Avalue%3D%22inputValue%22%3E%0A%20%20%20%20%3Cf-option%0A%20%20%20%20%20%20v-for%3D%22item%20in%20options%22%0A%20%20%20%20%20%20%3Akey%3D%22item.value%22%0A%20%20%20%20%20%20%3Alabel%3D%22item.label%22%0A%20%20%20%20%20%20%3Avalue%3D%22item.value%22%0A%20%20%20%20%20%20%3Adisabled%3D%22item.disabled%22%0A%20%20%20%20%3E%20%7B%7Bitem.label%7D%7D%3C%2Ff-option%3E%0A%20%20%3C%2Ff-select%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aexport%20default%20%7B%0A%20%20data%20()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20options%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22%E9%80%89%E9%A1%B91%22%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22%E9%BB%84%E9%87%91%E7%B3%95%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22%E9%80%89%E9%A1%B92%22%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22%E5%8F%8C%E7%9A%AE%E5%A5%B6%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22%E9%80%89%E9%A1%B93%22%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22%E8%9A%B5%E4%BB%94%E7%85%8E%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22%E9%80%89%E9%A1%B94%22%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22%E9%BE%99%E9%A1%BB%E9%9D%A2%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22%E9%80%89%E9%A1%B95%22%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22%E5%8C%97%E4%BA%AC%E7%83%A4%E9%B8%AD%22%2C%0A%20%20%20%20%20%20%20%20%20%20disabled%3A%20true%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20inputValue%3A%20%22%E9%80%89%E9%A1%B92%22%2C%0A%20%20%20%20%20%20multipleInputValue%3A%20%5B%22%E9%80%89%E9%A1%B92%22%5D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%3C%2Fscript%3E"},{title:t((()=>[F])),content:t((()=>[])),demo:t((()=>[A("div",w,[u(m,{value:b.inputValue},{default:t((()=>[(l(!0),d(o,null,i(b.options,(e=>(l(),a(v,{key:e.value,label:e.label,value:e.value,disabled:e.disabled},{default:t((()=>[n(s(e.label),1)])),_:2},1032,["label","value","disabled"])))),128))])),_:1},8,["value"])])])),_:1})};const k={components:{basicDemo:v,placeholderDemo:f,disabledDemo:_,inputValueDemo:x},setup(){const e=b(),l=E((()=>!e.value)),a=e;return{showAnchor:l,displayMode:c(),wrapperStyle:p((()=>a.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;")),contentStyle:p((()=>l.value?"width: calc(100% - 180px); margin-right: 36px;":"width: 100%; padding-right: 12px;")),url:"E:/develop/workespace/58git_public/fui/src-fui/select/demos/index.demo-entry.md"}}},g=n("下拉框。"),S=n("演示"),I=n("Props"),M=n("Button Props"),P={class:"md-table-wrapper"},j=A("thead",null,[A("tr",null,[A("th",null,"名称"),A("th",null,"类型"),A("th",null,"默认值"),A("th",null,"说明")])],-1),q=A("td",null,"placeholder",-1),z=n("string"),G=n("'请选择'"),H=A("td",null,"占位符",-1),J=A("td",null,"disabled",-1),K=n("boolean"),L=n("false"),N=A("td",null,"按钮是否禁用",-1),O=n("Slots"),Q=n("Button Slots"),R={class:"md-table-wrapper"},T=A("thead",null,[A("tr",null,[A("th",null,"名称"),A("th",null,"参数"),A("th",null,"说明")])],-1),U=A("td",null,"default",-1),W=n("()"),X=A("td",null,"按钮的内容",-1),Y=A("td",null,"icon",-1),Z=n("()"),$=A("td",null,"按钮的图标",-1),ee={key:0,style:{width:"144px"}};k.render=function(i,o,n,s,E,p){const b=e("edit-on-github-header"),c=e("n-p"),v=e("n-h2"),m=e("basicDemo"),C=e("placeholderDemo"),f=e("disabledDemo"),D=e("inputValueDemo"),h=e("component-demos"),_=e("n-h3"),V=e("n-text"),y=e("n-table"),x=e("n-anchor-link"),F=e("n-anchor");return l(),d("div",{class:"doc",style:r(s.wrapperStyle)},[A("div",{style:r(s.contentStyle)},[u(b,{"relative-url":"E:/develop/workespace/58git_public/fui/src-fui/select/demos/index.demo-entry.md",text:"选择器 Select"}),u(c,null,{default:t((()=>[g])),_:1}),u(v,{id:"演示"},{default:t((()=>[S])),_:1}),u(h,{span:2},{default:t((()=>[u(m),u(C),u(f),u(D)])),_:1}),u(v,{id:"Props"},{default:t((()=>[I])),_:1}),u(_,{id:"Button-Props"},{default:t((()=>[M])),_:1}),A("div",P,[u(y,{"single-column":"",class:"md-table"},{default:t((()=>[j,A("tbody",null,[A("tr",null,[q,A("td",null,[u(V,{code:""},{default:t((()=>[z])),_:1})]),A("td",null,[u(V,{code:""},{default:t((()=>[G])),_:1})]),H]),A("tr",null,[J,A("td",null,[u(V,{code:""},{default:t((()=>[K])),_:1})]),A("td",null,[u(V,{code:""},{default:t((()=>[L])),_:1})]),N])])])),_:1})]),u(v,{id:"Slots"},{default:t((()=>[O])),_:1}),u(_,{id:"Button-Slots"},{default:t((()=>[Q])),_:1}),A("div",R,[u(y,{"single-column":"",class:"md-table"},{default:t((()=>[T,A("tbody",null,[A("tr",null,[U,A("td",null,[u(V,{code:""},{default:t((()=>[W])),_:1})]),X]),A("tr",null,[Y,A("td",null,[u(V,{code:""},{default:t((()=>[Z])),_:1})]),$])])])),_:1})])],4),s.showAnchor?(l(),d("div",ee,[u(F,{bound:16,style:{width:"144px",position:"sticky",top:"32px"},"offset-target":"#doc-layout","ignore-gap":void 0},{default:t((()=>[(s.displayMode,l(),a(x,{key:0,title:"基础\r",href:"#basic"})),(s.displayMode,l(),a(x,{key:1,title:"占位符\r",href:"#placeholder"})),(s.displayMode,l(),a(x,{key:2,title:"禁用\r",href:"#disabled"})),(s.displayMode,l(),a(x,{key:3,title:"默认值\r",href:"#inputValue"}))])),_:1})])):B("",!0)],4)};export{k as default};
