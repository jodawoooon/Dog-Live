(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b0dddc0"],{"6d8a":function(t,e,o){"use strict";o.r(e);o("b0c0"),o("a4d3"),o("e01a");var n=o("7a23"),c=Object(n["ib"])("data-v-6bcfabad");Object(n["J"])("data-v-6bcfabad");var i={class:"button",style:{"text-align":"right","margin-top":"2%"}},r=Object(n["o"])("글 작성하기"),s={class:"title"},u={class:"user"},a={key:0,class:"button-group"},l={class:"body"},b={class:"tag"},m={class:"content"},d={style:{"font-weight":"600","font-size":"18px"}},p={class:"boardcontent",style:{"margin-top":"2%","white-space":"pre-wrap"}},j={class:"comment"},f={key:0},O={style:{"margin-right":"2%","font-weight":"bold","font-size":"16px"}},g={style:{"margin-right":"2%","font-size":"16px"}};Object(n["H"])();var y=c((function(t,e,y,h,k,C){var v=Object(n["P"])("el-button"),I=Object(n["P"])("el-empty"),L=Object(n["P"])("el-row"),w=Object(n["P"])("el-button-group"),B=Object(n["P"])("el-carousel-item"),P=Object(n["P"])("el-carousel"),G=Object(n["P"])("el-tag"),x=Object(n["P"])("el-input");return Object(n["G"])(),Object(n["k"])("div",null,[Object(n["p"])("div",i,[Object(n["p"])(v,{type:"outline-primary",round:"",onClick:h.goRegister},{default:c((function(){return[r]})),_:1},8,["onClick"])]),0==h.state.boardList.length?(Object(n["G"])(),Object(n["k"])(L,{key:0},{default:c((function(){return[Object(n["p"])(I,{style:{"margin-top":"80px","margin-bottom":"50px"},description:"작성한 게시글이 없다개 😢"})]})),_:1})):Object(n["l"])("",!0),0!=h.state.boardList.length?(Object(n["G"])(),Object(n["k"])(L,{key:1},{default:c((function(){return[(Object(n["G"])(!0),Object(n["k"])(n["b"],null,Object(n["N"])(h.state.boardList,(function(t,i){return Object(n["G"])(),Object(n["k"])(L,{class:"board",key:i},{default:c((function(){return[Object(n["p"])("div",null,[Object(n["p"])("div",s,[Object(n["p"])("div",u,[Object(n["p"])("img",{class:"user-profile",src:t.profileImageUrl},null,8,["src"]),Object(n["p"])("span",null,Object(n["T"])(t.name),1)]),t.userId==h.state.userId?(Object(n["G"])(),Object(n["k"])("span",a,[Object(n["p"])(w,null,{default:c((function(){return[Object(n["p"])(v,{type:"info",plain:"",icon:"el-icon-edit",size:"mini",onClick:function(e){return h.updateCommunity(t.id)}},null,8,["onClick"]),Object(n["p"])(v,{type:"info",plain:"",icon:"el-icon-delete",size:"mini",onClick:function(e){return h.deleteCommunity(t.id)}},null,8,["onClick"])]})),_:2},1024)])):Object(n["l"])("",!0)]),Object(n["p"])("div",l,[Object(n["p"])(P,{class:"image-carousel","indicator-position":"none",style:{"margin-top":"3%","margin-bottom":"3%"}},{default:c((function(){return[(Object(n["G"])(!0),Object(n["k"])(n["b"],null,Object(n["N"])(t.fileList,(function(t,e){return Object(n["G"])(),Object(n["k"])(B,{key:e},{default:c((function(){return[Object(n["p"])("img",{class:"image fit-image",src:t},null,8,["src"])]})),_:2},1024)})),128))]})),_:2},1024),Object(n["p"])("div",b,["입양일기"==t.category?(Object(n["G"])(),Object(n["k"])(G,{key:0,color:"#D7AFA4",effect:"dark",style:{border:"none","border-radius":"30px","font-size":"14px"}},{default:c((function(){return[Object(n["o"])(Object(n["T"])(t.category),1)]})),_:2},1024)):Object(n["l"])("",!0),"임보일기"==t.category?(Object(n["G"])(),Object(n["k"])(G,{key:1,color:"#E9CDA4",effect:"dark",style:{border:"none","border-radius":"30px","font-size":"14px"}},{default:c((function(){return[Object(n["o"])(Object(n["T"])(t.category),1)]})),_:2},1024)):Object(n["l"])("",!0),"자유게시판"==t.category?(Object(n["G"])(),Object(n["k"])(G,{key:2,color:"#87CEDC",effect:"dark",style:{border:"none","border-radius":"30px","font-size":"14px"}},{default:c((function(){return[Object(n["o"])(Object(n["T"])(t.category),1)]})),_:2},1024)):Object(n["l"])("",!0),"나눔"==t.category?(Object(n["G"])(),Object(n["k"])(G,{key:3,color:"#B4D9A7",effect:"dark",style:{border:"none","border-radius":"30px","font-size":"14px"}},{default:c((function(){return[Object(n["o"])(Object(n["T"])(t.category),1)]})),_:2},1024)):Object(n["l"])("",!0)]),Object(n["p"])("div",m,[Object(n["p"])("span",d,Object(n["T"])(t.title),1),Object(n["p"])("div",p,Object(n["T"])(t.description),1)])]),Object(n["p"])("div",j,[Object(n["p"])("img",{class:"icon",src:o("f8a2"),style:{"margin-left":"2%"}},null,8,["src"]),Object(n["p"])(x,{placeholder:"댓글을 입력해주세요",modelValue:h.comment.input,"onUpdate:modelValue":e[1]||(e[1]=function(t){return h.comment.input=t}),class:"comment-input",onKeyup:Object(n["gb"])((function(e){return h.RegisterComment(t.id)}),["enter"])},null,8,["modelValue","onKeyup"]),Object(n["p"])(v,{class:"comment-button",icon:"el-icon-s-promotion",onClick:function(e){return h.RegisterComment(t.id)},onKeyup:Object(n["gb"])((function(e){return h.RegisterComment(t.id)}),["enter"])},null,8,["onClick","onKeyup"]),(Object(n["G"])(!0),Object(n["k"])(n["b"],null,Object(n["N"])(h.state.reverseList,(function(e,o){return Object(n["G"])(),Object(n["k"])("div",{key:o,style:{margin:"2%"}},[e.communityId.id==t.id&&1==e.isDelete?(Object(n["G"])(),Object(n["k"])("div",f,[Object(n["p"])("span",O,Object(n["T"])(e.name),1),Object(n["p"])("span",g,Object(n["T"])(e.comment),1),Object(n["p"])("span",null,[h.state.userId==e.userId?(Object(n["G"])(),Object(n["k"])(v,{key:0,class:"close-button",icon:"el-icon-close",style:{position:"absolute",right:"0",padding:"1%","margin-right":"3%"},onClick:function(t){return h.DeleteComment(e.id)}},null,8,["onClick"])):Object(n["l"])("",!0)])])):Object(n["l"])("",!0)])})),128))])])]})),_:2},1024)})),128))]})),_:1})):Object(n["l"])("",!0)])})),h=o("2909"),k=(o("a434"),o("5502")),C=o("6c02"),v=o("98a0"),I=(o("c4bb"),{name:"community-board-list",components:{createToast:v["a"]},setup:function(){var t=new k["b"],e=new C["c"],c=Object(n["L"])(null),i=[o("e890"),o("5835"),o("f8a2")],r=Object(n["K"])({boardList:[],reverseList:[],comments:[],userId:Object(n["i"])((function(){return t.getters["root/getLoginUserInfo"].userId})),userProfile:Object(n["i"])((function(){return t.getters["root/getUpdateUserInfo"]})),isLoading:Object(n["i"])((function(){return r.comments}))}),s=Object(n["K"])({init:!0,loading:!0,isLoading:Object(n["i"])((function(){return s.loading})),page:0,noMore:!1}),u=Object(n["K"])({input:""}),a=function(){null===r.userId?(Object(v["a"])("로그인을 진행해주세요 💨💨",{hideProgressBar:"true",timeout:4500,showIcon:"true",toastBackgroundColor:"#c49d83",position:"bottom-left",transition:"bounce",type:"success"}),e.push({name:"Login"})):e.push({name:"community-board-register"})},l=t.getters["root/getLoginUserInfo"].userId;function b(){t.dispatch("root/requestMyCommunity",l).then((function(e){console.log(e);for(var o=e.data.communityList.length,n=0;n<o;n++){r.boardList.push(e.data.communityList[n]),console.log(e.data.communityList[n]);var c=e.data.communityList[n].id;t.dispatch("root/requestCommunityComment",c).then((function(t){for(var e=t.data.commentList.length,o=0;o<e;o++)r.comments.push(t.data.commentList[o]);r.reverseList=Object(h["a"])(r.comments).reverse()})).catch((function(t){console.log(t)}))}})).catch((function(t){console.log(t)}))}function m(t){console.log(c),c.value.scrollTop>=c.value.clientHeight&&!s.noMore&&(console.log(c.value.scrollHeight),s.page+=1,b()),console.log("scrollTo",c.value.scrollTop)}var d=function(o){t.dispatch("root/requestCommunityDetail",o).then((function(o){console.log(o);var n={communityId:o.data.community.id,title:o.data.community.title,category:o.data.community.category,description:o.data.community.description,fileList:o.data.filePath};t.commit("root/setCommunityBoard",n),e.push({name:"community-board-update"})})).catch((function(t){console.log(t)}))},p=function(o){t.dispatch("root/requestDeleteCommunity",o).then((function(t){Object(v["a"])("게시글이 삭제되었어요 💨💨",{hideProgressBar:"true",timeout:4500,showIcon:"true",toastBackgroundColor:"#7eaa72",position:"bottom-left",transition:"bounce",type:"success"}),e.go(e.currentRoute)})).catch((function(t){Object(v["a"])("게시글 삭제에 실패했어요 😱💦",{hideProgressBar:"true",timeout:4500,showIcon:"true",toastBackgroundColor:"#c49d83",position:"bottom-left",transition:"bounce",type:"warning"}),console.log(t)}))};t.dispatch("root/requestUserProfile",r.userId).then((function(t){console.log(t.data),r.userProfile=t.data})).catch((function(t){console.log(t)}));var j=function(o){null===r.userId||""==r.userId||void 0===r.userId?(Object(v["a"])("로그인해야 이용 가능하개🐕‍🦺💨",{hideProgressBar:"true",timeout:4500,showIcon:"true",toastBackgroundColor:"#c49d83",position:"bottom-left",transition:"bounce",type:"success"}),e.push({name:"Login"})):null==u.input||""==u.input?Object(v["a"])("댓글 내용을 적어주세요 😱💦",{hideProgressBar:"true",timeout:4500,showIcon:"true",toastBackgroundColor:"#c49d83",position:"bottom-left",transition:"bounce",type:"success"}):t.dispatch("root/requestRegisterComment",{communityId:o,userId:r.userId,comment:u.input}).then((function(t){Object(v["a"])("댓글이 등록되었어요 💨💨",{hideProgressBar:"true",timeout:4500,showIcon:"true",toastBackgroundColor:"#7eaa72",position:"bottom-left",transition:"bounce",type:"success"}),r.comments.push(t.data),u.input="",r.reverseList=Object(h["a"])(r.comments).reverse()})).catch((function(t){Object(v["a"])("댓글 등록에 실패했어요 😱💦",{hideProgressBar:"true",timeout:4500,showIcon:"true",toastBackgroundColor:"#c49d83",position:"bottom-left",transition:"bounce",type:"warning"})}))},f=function(e){t.dispatch("root/requestDeleteComment",e).then((function(t){Object(v["a"])("댓글이 삭제되었어요 💨💨",{hideProgressBar:"true",timeout:4500,showIcon:"true",toastBackgroundColor:"#7eaa72",position:"bottom-left",transition:"bounce",type:"success"});for(var o=0;o<r.comments.length;o++)r.comments[o].id==e&&(console.log(r.comments[o].id),r.comments.splice(o,1));r.reverseList=Object(h["a"])(r.comments).reverse()})).catch((function(t){Object(v["a"])("댓글 삭제에 실패했어요 😱💦",{hideProgressBar:"true",timeout:4500,showIcon:"true",toastBackgroundColor:"#c49d83",position:"bottom-left",transition:"bounce",type:"warning"}),console.log(t)}))};return Object(n["D"])((function(){t.commit("root/setBreadcrumbInfo",{isHome:!1,title:"돍립신문",subTitle:"내 피드 보러가기"}),b()})),{state:r,deleteCommunity:p,updateCommunity:d,communities:s,fetchCommunityList:b,scroll:m,images:i,comment:u,RegisterComment:j,DeleteComment:f,goRegister:a}}});o("97d8");I.render=y,I.__scopeId="data-v-6bcfabad";e["default"]=I},"71cb":function(t,e,o){},"97d8":function(t,e,o){"use strict";o("71cb")},e890:function(t,e,o){t.exports=o.p+"img/mbti_infj.de3c9b5d.png"}}]);
//# sourceMappingURL=chunk-1b0dddc0.100b1015.js.map