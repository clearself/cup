webpackJsonp([1],{USbD:function(e,t,s){e.exports=s.p+"static/img/ewm.ebaa1c5.png"},kslJ:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("XFrK"),i={dataOne:[{selectGroup:[{imgUrl:"",message:"",numberOne:"",teamName:""},{imgUrl:"",message:"",numberOne:"",teamName:""}]},{selectGroup:[{imgUrl:"",message:"",numberOne:"",teamName:""},{imgUrl:"",message:"",numberOne:"",teamName:""}]},{selectGroup:[{imgUrl:"",message:"",numberOne:"",teamName:""},{imgUrl:"",message:"",numberOne:"",teamName:""}]},{selectGroup:[{imgUrl:"",message:"",numberOne:"",teamName:""},{imgUrl:"",message:"",numberOne:"",teamName:""}]},{selectGroup:[{imgUrl:"",message:"",numberOne:"",teamName:""},{imgUrl:"",message:"",numberOne:"",teamName:""}]},{selectGroup:[{imgUrl:"",message:"",numberOne:"",teamName:""},{imgUrl:"",message:"",numberOne:"",teamName:""}]},{selectGroup:[{imgUrl:"",message:"",numberOne:"",teamName:""},{imgUrl:"",message:"",numberOne:"",teamName:""}]},{selectGroup:[{imgUrl:"",message:"",numberOne:"",teamName:""},{imgUrl:"",message:"",numberOne:"",teamName:""}]},{selectGroup:[{imgUrl:"",message:"",numberOne:"",teamName:""},{imgUrl:"",message:"",numberOne:"",teamName:""}]}],dataTwo:[{selectGroup:{imgUrl:"",message:"",numberOne:"",teamName:""}},{selectGroup:{imgUrl:"",message:"",numberOne:"",teamName:""}},{selectGroup:{imgUrl:"",message:"",numberOne:"",teamName:""}},{selectGroup:{imgUrl:"",message:"",numberOne:"",teamName:""}},{selectGroup:{imgUrl:"",message:"",numberOne:"",teamName:""}},{selectGroup:{imgUrl:"",message:"",numberOne:"",teamName:""}},{selectGroup:{imgUrl:"",message:"",numberOne:"",teamName:""}},{selectGroup:{imgUrl:"",message:"",numberOne:"",teamName:""}}],dataThree:[{selectGroup:{imgUrl:"",message:"",numberOne:"",teamName:""}},{selectGroup:{imgUrl:"",message:"",numberOne:"",teamName:""}},{selectGroup:{imgUrl:"",message:"",numberOne:"",teamName:""}},{selectGroup:{imgUrl:"",message:"",numberOne:"",teamName:""}}],dataFour:[{selectGroup:{imgUrl:"",message:"",numberOne:"",teamName:""}},{selectGroup:{imgUrl:"",message:"",numberOne:"",teamName:""}}],firstData:[{selectGroup:{imgUrl:"",message:"",numberOne:"",teamName:""}}]},r={data:function(){return{imageurl:"http://img1.gtimg.com/sports/pics/hv1/158/222/2279/148248743.png",tipMessage:"",request:!0,request1:!1,myMessage:"",user:{nick:"",icon:"",supportsNum:""},dataOne:i.dataOne,dataTwo:i.dataTwo,dataThree:i.dataThree,dataFour:i.dataFour,firstData:i.firstData}},created:function(){this.firstData=a.a.getsessionStorage("firstData"),console.log(this.firstData),this.firstData[0].selectGroup.numberOne=!0;var e=this.firstData[0].selectGroup.id,t=Math.floor(Math.random()*this.firstData[0].selectGroup.text.length);console.log("everyNum",t),this.tipMessage=this.firstData[0].selectGroup.text[t];var s=a.a.getsessionStorage("secondData");this.dataOne=s.map(function(t){return console.log(t.selectGroup[0].id,t.selectGroup[1].id),t.selectGroup[0].id===e&&(t.selectGroup[0].numberOne=!0),t.selectGroup[1].id===e&&(t.selectGroup[1].numberOne=!0),t});var i=a.a.getsessionStorage("thirdData");this.dataTwo=i.map(function(t,s){return t.selectGroup.id===e&&(t.selectGroup.numberOne=!0),t});var r=a.a.getsessionStorage("fourthData");this.dataThree=r.map(function(t,s){return console.log(t.selectGroup.id),t.selectGroup.id===e&&(console.log("HHEHEHE",t.selectGroup.teamName,s),t.selectGroup.numberOne=!0),t});var c=a.a.getsessionStorage("fiveData");this.dataFour=c.map(function(t,s){return t.selectGroup.id===e&&(console.log("HHEHEHE",t.selectGroup.teamName,s),t.selectGroup.numberOne=!0),t})},mounted:function(){var e=this.$refs.poster,t=e.offsetWidth,s=e.offsetHeight,a=(e.offsetTop,document.createElement("canvas")),i=a.getContext("2d"),r=function(e){var t=e.backingStorePixelRatio||e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/t}(i);a.width=t*r,a.height=s*r,a.style.width=t+"px",a.style.height=s+"px",i.scale(r,r);var c={useCORS:!0,allowTaint:!1,tainttest:!0,scale:r,canvas:a,logging:!1,width:t,height:s};setTimeout(function(){html2canvas(e,c).then(function(e){var a=e.toDataURL(),i=document.createElement("img");i.src=a,i.style.width=t+"px",i.style.height=s+"px",document.getElementById("imageBox").appendChild(i)})},1e3)},methods:{}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"poster",staticClass:"dd"},[a("div",{staticClass:"bg"}),e._v(" "),a("div",{staticClass:"ub ub-ac top",class:{hengcenter:e.request1}},[a("div",{staticClass:"yuju"},[e._v("\n\t\t\t"+e._s(e.tipMessage)+"\n\t\t\t")])]),e._v(" "),a("div",{staticClass:"imageBox",attrs:{id:"imageBox"}}),e._v(" "),a("div",{staticClass:"wrapper"},[a("div",{staticClass:"ub ub-ver frst frst-one"},[a("div",{staticClass:"ub ub-ac"},[a("div",{staticClass:"text"},[e._v("A1")]),e._v(" "),a("div",{staticClass:"pic"},[a("img",{attrs:{src:e.dataOne[0].selectGroup[0].circleImg,alt:""}})]),e._v(" "),a("div",{staticClass:"trans-line",class:{active:e.dataOne[0].selectGroup[0].numberOne}}),e._v(" "),a("div",{staticClass:"ver-line-top",class:{active:e.dataOne[0].selectGroup[0].numberOne}})]),e._v(" "),a("div",{staticClass:"ub ub-ac ub-f1 ub-pc text-name"},[e._v(e._s(e.dataOne[0].selectGroup[0].teamName))])]),e._v(" "),a("div",{staticClass:"ub ub-ver frst frst-two"},[a("div",{staticClass:"ub ub-ac"},[a("div",{staticClass:"text"},[e._v("B2")]),e._v(" "),a("div",{staticClass:"pic"},[a("img",{attrs:{src:e.dataOne[1].selectGroup[1].circleImg,alt:""}})]),e._v(" "),a("div",{staticClass:"trans-line",class:{active:e.dataOne[1].selectGroup[1].numberOne}}),e._v(" "),a("div",{staticClass:"ver-line-bottom",class:{active:e.dataOne[1].selectGroup[1].numberOne}})]),e._v(" "),a("div",{staticClass:"ub ub-ac ub-f1 ub-pc text-name"},[e._v(e._s(e.dataOne[1].selectGroup[1].teamName))])]),e._v(" "),a("div",{staticClass:"ub ub-ver frst frst-three"},[a("div",{staticClass:"ub ub-ac"},[a("div",{staticClass:"text"},[e._v("C1")]),e._v(" "),a("div",{staticClass:"pic"},[a("img",{attrs:{src:e.dataOne[2].selectGroup[0].circleImg,alt:""}})]),e._v(" "),a("div",{staticClass:"trans-line",class:{active:e.dataOne[2].selectGroup[0].numberOne}}),e._v(" "),a("div",{staticClass:"ver-line-top",class:{active:e.dataOne[2].selectGroup[0].numberOne}})]),e._v(" "),a("div",{staticClass:"ub ub-ac ub-f1 ub-pc text-name"},[e._v(e._s(e.dataOne[2].selectGroup[0].teamName))])]),e._v(" "),a("div",{staticClass:"ub ub-ver frst frst-four"},[a("div",{staticClass:"ub ub-ac"},[a("div",{staticClass:"text"},[e._v("D2")]),e._v(" "),a("div",{staticClass:"pic"},[a("img",{attrs:{src:e.dataOne[3].selectGroup[1].circleImg,alt:""}})]),e._v(" "),a("div",{staticClass:"trans-line",class:{active:e.dataOne[3].selectGroup[1].numberOne}}),e._v(" "),a("div",{staticClass:"ver-line-bottom",class:{active:e.dataOne[3].selectGroup[1].numberOne}})]),e._v(" "),a("div",{staticClass:"ub ub-ac ub-f1 ub-pc text-name"},[e._v(e._s(e.dataOne[3].selectGroup[1].teamName))])]),e._v(" "),a("div",{staticClass:"ub ub-ver frst frst-five"},[a("div",{staticClass:"ub ub-ac"},[a("div",{staticClass:"text"},[e._v("E1")]),e._v(" "),a("div",{staticClass:"pic"},[a("img",{attrs:{src:e.dataOne[4].selectGroup[0].circleImg,alt:""}})]),e._v(" "),a("div",{staticClass:"trans-line",class:{active:e.dataOne[4].selectGroup[0].numberOne}}),e._v(" "),a("div",{staticClass:"ver-line-top",class:{active:e.dataOne[4].selectGroup[0].numberOne}})]),e._v(" "),a("div",{staticClass:"ub ub-ac ub-f1 ub-pc text-name"},[e._v(e._s(e.dataOne[4].selectGroup[0].teamName))])]),e._v(" "),a("div",{staticClass:"ub ub-ver frst frst-six"},[a("div",{staticClass:"ub ub-ac"},[a("div",{staticClass:"text"},[e._v("F2")]),e._v(" "),a("div",{staticClass:"pic"},[a("img",{attrs:{src:e.dataOne[5].selectGroup[1].circleImg,alt:""}})]),e._v(" "),a("div",{staticClass:"trans-line",class:{active:e.dataOne[5].selectGroup[1].numberOne}}),e._v(" "),a("div",{staticClass:"ver-line-bottom",class:{active:e.dataOne[5].selectGroup[1].numberOne}})]),e._v(" "),a("div",{staticClass:"ub ub-ac ub-f1 ub-pc text-name"},[e._v(e._s(e.dataOne[5].selectGroup[1].teamName))])]),e._v(" "),a("div",{staticClass:"ub ub-ver frst frst-seven"},[a("div",{staticClass:"ub ub-ac"},[a("div",{staticClass:"text"},[e._v("G1")]),e._v(" "),a("div",{staticClass:"pic"},[a("img",{attrs:{src:e.dataOne[6].selectGroup[0].circleImg,alt:""}})]),e._v(" "),a("div",{staticClass:"trans-line",class:{active:e.dataOne[6].selectGroup[0].numberOne}}),e._v(" "),a("div",{staticClass:"ver-line-top",class:{active:e.dataOne[6].selectGroup[0].numberOne}})]),e._v(" "),a("div",{staticClass:"ub ub-ac ub-f1 ub-pc text-name"},[e._v(e._s(e.dataOne[6].selectGroup[0].teamName))])]),e._v(" "),a("div",{staticClass:"ub ub-ver frst frst-eight"},[a("div",{staticClass:"ub ub-ac"},[a("div",{staticClass:"text"},[e._v("H2")]),e._v(" "),a("div",{staticClass:"pic"},[a("img",{attrs:{src:e.dataOne[7].selectGroup[1].circleImg,alt:""}})]),e._v(" "),a("div",{staticClass:"trans-line",class:{active:e.dataOne[7].selectGroup[1].numberOne}}),e._v(" "),a("div",{staticClass:"ver-line-bottom",class:{active:e.dataOne[7].selectGroup[1].numberOne}})]),e._v(" "),a("div",{staticClass:"ub ub-ac ub-f1 ub-pc text-name"},[e._v(e._s(e.dataOne[7].selectGroup[1].teamName))])]),e._v(" "),a("div",{staticClass:"ub ub-ver right frst-one"},[a("div",{staticClass:"ub ub-ac"},[a("div",{staticClass:"trans-line",class:{active:e.dataOne[1].selectGroup[0].numberOne}}),e._v(" "),a("div",{staticClass:"ver-line-top left",class:{active:e.dataOne[1].selectGroup[0].numberOne}}),e._v(" "),a("div",{staticClass:"pic"},[a("img",{attrs:{src:e.dataOne[1].selectGroup[0].circleImg,alt:""}})]),e._v(" "),a("div",{staticClass:"text tx-r"},[e._v("B1")])]),e._v(" "),a("div",{staticClass:"ub ub-ac ub-f1 ub-pc text-name"},[e._v(e._s(e.dataOne[1].selectGroup[0].teamName))])]),e._v(" "),a("div",{staticClass:"ub ub-ver right frst-two"},[a("div",{staticClass:"ub ub-ac"},[a("div",{staticClass:"trans-line",class:{active:e.dataOne[0].selectGroup[1].numberOne}}),e._v(" "),a("div",{staticClass:"ver-line-bottom left",class:{active:e.dataOne[0].selectGroup[1].numberOne}}),e._v(" "),a("div",{staticClass:"pic"},[a("img",{attrs:{src:e.dataOne[0].selectGroup[1].circleImg,alt:""}})]),e._v(" "),a("div",{staticClass:"text tx-r"},[e._v("A2")])]),e._v(" "),a("div",{staticClass:"ub ub-ac ub-f1 ub-pc text-name"},[e._v(e._s(e.dataOne[0].selectGroup[1].teamName))])]),e._v(" "),a("div",{staticClass:"ub ub-ver right frst-three"},[a("div",{staticClass:"ub ub-ac"},[a("div",{staticClass:"trans-line",class:{active:e.dataOne[3].selectGroup[0].numberOne}}),e._v(" "),a("div",{staticClass:"ver-line-top left",class:{active:e.dataOne[3].selectGroup[0].numberOne}}),e._v(" "),a("div",{staticClass:"pic"},[a("img",{attrs:{src:e.dataOne[3].selectGroup[0].circleImg,alt:""}})]),e._v(" "),a("div",{staticClass:"text tx-r"},[e._v("D1")])]),e._v(" "),a("div",{staticClass:"ub ub-ac ub-f1 ub-pc text-name"},[e._v(e._s(e.dataOne[3].selectGroup[0].teamName))])]),e._v(" "),a("div",{staticClass:"ub ub-ver right frst-four"},[a("div",{staticClass:"ub ub-ac"},[a("div",{staticClass:"trans-line",class:{active:e.dataOne[2].selectGroup[1].numberOne}}),e._v(" "),a("div",{staticClass:"ver-line-bottom left",class:{active:e.dataOne[2].selectGroup[1].numberOne}}),e._v(" "),a("div",{staticClass:"pic"},[a("img",{attrs:{src:e.dataOne[2].selectGroup[1].circleImg,alt:""}})]),e._v(" "),a("div",{staticClass:"text tx-r"},[e._v("C2")])]),e._v(" "),a("div",{staticClass:"ub ub-ac ub-f1 ub-pc text-name"},[e._v(e._s(e.dataOne[2].selectGroup[1].teamName))])]),e._v(" "),a("div",{staticClass:"ub ub-ver right frst-six"},[a("div",{staticClass:"ub ub-ac"},[a("div",{staticClass:"trans-line",class:{active:e.dataOne[4].selectGroup[1].numberOne}}),e._v(" "),a("div",{staticClass:"ver-line-bottom left",class:{active:e.dataOne[4].selectGroup[1].numberOne}}),e._v(" "),a("div",{staticClass:"pic"},[a("img",{attrs:{src:e.dataOne[4].selectGroup[1].circleImg,alt:""}})]),e._v(" "),a("div",{staticClass:"text tx-r"},[e._v("E2")])]),e._v(" "),a("div",{staticClass:"ub ub-ac ub-f1 ub-pc text-name"},[e._v(e._s(e.dataOne[4].selectGroup[1].teamName))])]),e._v(" "),a("div",{staticClass:"ub ub-ver right frst-five"},[a("div",{staticClass:"ub ub-ac"},[a("div",{staticClass:"trans-line",class:{active:e.dataOne[5].selectGroup[0].numberOne}}),e._v(" "),a("div",{staticClass:"ver-line-top left",class:{active:e.dataOne[5].selectGroup[0].numberOne}}),e._v(" "),a("div",{staticClass:"pic"},[a("img",{attrs:{src:e.dataOne[5].selectGroup[0].circleImg,alt:""}})]),e._v(" "),a("div",{staticClass:"text tx-r"},[e._v("F1")])]),e._v(" "),a("div",{staticClass:"ub ub-ac ub-f1 ub-pc text-name"},[e._v(e._s(e.dataOne[5].selectGroup[0].teamName))])]),e._v(" "),a("div",{staticClass:"ub ub-ver right frst-eight"},[a("div",{staticClass:"ub ub-ac"},[a("div",{staticClass:"trans-line",class:{active:e.dataOne[6].selectGroup[1].numberOne}}),e._v(" "),a("div",{staticClass:"ver-line-bottom left",class:{active:e.dataOne[6].selectGroup[1].numberOne}}),e._v(" "),a("div",{staticClass:"pic"},[a("img",{attrs:{src:e.dataOne[6].selectGroup[1].circleImg,alt:""}})]),e._v(" "),a("div",{staticClass:"text tx-r"},[e._v("G2")])]),e._v(" "),a("div",{staticClass:"ub ub-ac ub-f1 ub-pc text-name"},[e._v(e._s(e.dataOne[6].selectGroup[1].teamName))])]),e._v(" "),a("div",{staticClass:"ub ub-ver right frst-seven"},[a("div",{staticClass:"ub ub-ac"},[a("div",{staticClass:"trans-line",class:{active:e.dataOne[7].selectGroup[0].numberOne}}),e._v(" "),a("div",{staticClass:"ver-line-top left",class:{active:e.dataOne[7].selectGroup[0].numberOne}}),e._v(" "),a("div",{staticClass:"pic"},[a("img",{attrs:{src:e.dataOne[7].selectGroup[0].circleImg,alt:""}})]),e._v(" "),a("div",{staticClass:"text tx-r"},[e._v("H1")])]),e._v(" "),a("div",{staticClass:"ub ub-ac ub-f1 ub-pc text-name"},[e._v(e._s(e.dataOne[7].selectGroup[0].teamName))])]),e._v(" "),a("div",{staticClass:"pic abs second-one"},[a("img",{attrs:{src:e.dataTwo[0].selectGroup.circleImg,alt:""}})]),e._v(" "),a("div",{staticClass:"pic abs second-two"},[a("img",{attrs:{src:e.dataTwo[2].selectGroup.circleImg,alt:""}})]),e._v(" "),a("div",{staticClass:"pic abs second-three"},[a("img",{attrs:{src:e.dataTwo[4].selectGroup.circleImg,alt:""}})]),e._v(" "),a("div",{staticClass:"pic abs second-four"},[a("img",{attrs:{src:e.dataTwo[6].selectGroup.circleImg,alt:""}})]),e._v(" "),a("div",{staticClass:"pic abs-right second-one"},[a("img",{attrs:{src:e.dataTwo[1].selectGroup.circleImg,alt:""}})]),e._v(" "),a("div",{staticClass:"pic abs-right second-two"},[a("img",{attrs:{src:e.dataTwo[3].selectGroup.circleImg,alt:""}})]),e._v(" "),a("div",{staticClass:"pic abs-right second-three"},[a("img",{attrs:{src:e.dataTwo[5].selectGroup.circleImg,alt:""}})]),e._v(" "),a("div",{staticClass:"pic abs-right second-four"},[a("img",{attrs:{src:e.dataTwo[7].selectGroup.circleImg,alt:""}})]),e._v(" "),a("div",{staticClass:"pic abs-third-left third-one"},[a("img",{attrs:{src:e.dataThree[0].selectGroup.circleImg,alt:""}})]),e._v(" "),a("div",{staticClass:"pic abs-third-left third-two"},[a("img",{attrs:{src:e.dataThree[1].selectGroup.circleImg,alt:""}})]),e._v(" "),a("div",{staticClass:"pic abs-third-right third-one"},[a("img",{attrs:{src:e.dataThree[2].selectGroup.circleImg,alt:""}})]),e._v(" "),a("div",{staticClass:"pic abs-third-right third-two"},[a("img",{attrs:{src:e.dataThree[3].selectGroup.circleImg,alt:""}})]),e._v(" "),a("div",{staticClass:"pic abs-fourth-left fourth-one"},[a("img",{attrs:{src:e.dataFour[0].selectGroup.circleImg,alt:""}})]),e._v(" "),a("div",{staticClass:"pic abs-fourth-right fourth-one"},[a("img",{attrs:{src:e.dataFour[1].selectGroup.circleImg,alt:""}})]),e._v(" "),a("div",{staticClass:"pic pic-numberOne"},[a("img",{attrs:{src:e.firstData[0].selectGroup.circleImg,alt:""}})]),e._v(" "),a("div",{staticClass:"numberOne-name"},[e._v(e._s(e.firstData[0].selectGroup.teamName))]),e._v(" "),a("div",{staticClass:"trans-line abs-trans lineW second-trans-one",class:{active:e.dataTwo[0].selectGroup.numberOne}}),e._v(" "),a("div",{staticClass:"trans-line abs-trans lineW second-trans-two",class:{active:e.dataTwo[2].selectGroup.numberOne}}),e._v(" "),a("div",{staticClass:"trans-line abs-trans lineW second-trans-three",class:{active:e.dataTwo[4].selectGroup.numberOne}}),e._v(" "),a("div",{staticClass:"trans-line abs-trans lineW second-trans-four",class:{active:e.dataTwo[6].selectGroup.numberOne}}),e._v(" "),a("div",{staticClass:"ver-line-top abs-ver lineH second-ver-one",class:{active:e.dataTwo[0].selectGroup.numberOne}}),e._v(" "),a("div",{staticClass:"ver-line-top abs-ver lineH second-ver-two",class:{active:e.dataTwo[2].selectGroup.numberOne}}),e._v(" "),a("div",{staticClass:"ver-line-top abs-ver lineH second-ver-three",class:{active:e.dataTwo[4].selectGroup.numberOne}}),e._v(" "),a("div",{staticClass:"ver-line-top abs-ver lineH second-ver-four",class:{active:e.dataTwo[6].selectGroup.numberOne}}),e._v(" "),a("div",{staticClass:"trans-line abs-trans-right lineW second-trans-one",class:{active:e.dataTwo[1].selectGroup.numberOne}}),e._v(" "),a("div",{staticClass:"trans-line abs-trans-right lineW second-trans-two",class:{active:e.dataTwo[3].selectGroup.numberOne}}),e._v(" "),a("div",{staticClass:"trans-line abs-trans-right lineW second-trans-three",class:{active:e.dataTwo[5].selectGroup.numberOne}}),e._v(" "),a("div",{staticClass:"trans-line abs-trans-right lineW second-trans-four",class:{active:e.dataTwo[7].selectGroup.numberOne}}),e._v(" "),a("div",{staticClass:"ver-line-top abs-ver-right lineH second-ver-one",class:{active:e.dataTwo[1].selectGroup.numberOne}}),e._v(" "),a("div",{staticClass:"ver-line-top abs-ver-right lineH second-ver-two",class:{active:e.dataTwo[3].selectGroup.numberOne}}),e._v(" "),a("div",{staticClass:"ver-line-top abs-ver-right lineH second-ver-three",class:{active:e.dataTwo[5].selectGroup.numberOne}}),e._v(" "),a("div",{staticClass:"ver-line-top abs-ver-right lineH second-ver-four",class:{active:e.dataTwo[7].selectGroup.numberOne}}),e._v(" "),a("div",{staticClass:"trans-line abs-trans-third lineW third-trans-one",class:{active:e.dataThree[0].selectGroup.numberOne}}),e._v(" "),a("div",{staticClass:"trans-line abs-trans-third lineW third-trans-two",class:{active:e.dataThree[1].selectGroup.numberOne}}),e._v(" "),a("div",{staticClass:"trans-line abs-trans-third-right lineW third-trans-one",class:{active:e.dataThree[2].selectGroup.numberOne}}),e._v(" "),a("div",{staticClass:"trans-line abs-trans-third-right lineW third-trans-two",class:{active:e.dataThree[3].selectGroup.numberOne}}),e._v(" "),a("div",{staticClass:"ver-line-top abs-ver-third lineH1 third-ver-one",class:{active:e.dataThree[0].selectGroup.numberOne}}),e._v(" "),a("div",{staticClass:"ver-line-top abs-ver-third lineH1 third-ver-two",class:{active:e.dataThree[1].selectGroup.numberOne}}),e._v(" "),a("div",{staticClass:"ver-line-top abs-ver-third-right lineH1 third-ver-one",class:{active:e.dataThree[2].selectGroup.numberOne}}),e._v(" "),a("div",{staticClass:"ver-line-top abs-ver-third-right lineH1 third-ver-two",class:{active:e.dataThree[3].selectGroup.numberOne}}),e._v(" "),a("div",{staticClass:"trans-line abs-trans-fourth lineW1 fourth-trans-one",class:{active:e.dataFour[0].selectGroup.numberOne}}),e._v(" "),a("div",{staticClass:"trans-line abs-trans-fourth-right lineW1 fourth-trans-one",class:{active:e.dataFour[1].selectGroup.numberOne}}),e._v(" "),a("div",{staticClass:"ver-line-top numberOne",class:{active:e.firstData[0].selectGroup.numberOne}}),e._v(" "),a("img",{staticClass:"cup",attrs:{src:s("lCti"),alt:""}}),e._v(" "),e._m(0)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"ub ub-ver ewm"},[t("div",[t("img",{attrs:{src:s("USbD"),alt:""}})]),this._v(" "),t("div",{staticClass:"ub ub-pc line2"},[this._v("长按预测2018世界杯冠军")])])}]};var l=s("C7Lr")(r,c,!1,function(e){s("qhns")},"data-v-2bf64d4c",null);t.default=l.exports},lCti:function(e,t,s){e.exports=s.p+"static/img/cup.40a195a.png"},qhns:function(e,t){}});