(this.webpackJsonpconverter=this.webpackJsonpconverter||[]).push([[0],{135:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(11),r=n.n(o),s=(n(94),n(35)),c=n.n(s),d=n(53),l=n(29),u=(n(96),n(54)),b=n(80),m=n(78),h=n.n(m),p=n(79),f=n.n(p),j=n(28),g=n.n(j),x=n(5),v=n(116),O="AIzaSyA_JbaEc0zfoF1ZzY-WEAhJzanBzGyWsnc",y=new u.a("p","pt","a4"),w=[];var A=function(){var e=g()(),t=Object(l.a)(e,2),n=t[0],i=t[1],o=g()([]),r=Object(l.a)(o,3),s=r[0],m=r[1],p=r[2],j=g()([]),A=Object(l.a)(j,3),C=(A[0],A[1]),I=A[2],T=g()(),P=Object(l.a)(T,2),z=P[0],E=P[1],L=g()(),M=Object(l.a)(L,2),F=M[0],k=M[1],D=g()(0),N=Object(l.a)(D,2),B=N[0],S=N[1];Object(a.useEffect)((function(){S(B+1),2===B&&s.map((function(e){console.log(e.id);var t=document.getElementById("Drive_img_grid"),n=document.createElement("div");n.setAttribute("id",e.id),n.style.cssText="margin-bottom:5px",n.className="col-md-4",t.appendChild(n);var a=document.createElement("img"),i="https://drive.google.com/uc?id="+e.id;a.src=i,a.setAttribute("height",100),a.setAttribute("width",100),a.style.cssText="margin-left:5px";var o=document.createElement("button");o.innerHTML="<i class='far fa-trash-alt'></i>",o.style.cssText="overflow:visible;font-size:15px;float:left;color:red;border-radius:100px;border:hidden",o.onclick=function(){!function(e){var t=p.current.filter((function(t){return t.id!==e}));document.getElementById(e).innerHTML="",m(t)}(e.id)},n.appendChild(o),n.appendChild(a),setTimeout((function(){window.$("#DriveModal").modal("show")}),3e3)}))}),[s]);var G=new u.a("p","pt","a4"),R=.75*(G.internal.pageSize.height-60),J=function(){var e=Object(d.a)(c.a.mark((function e(){var t,a,i,o,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t="",!(n.length>0)){e.next=18;break}a=n,i=0;case 4:if(!(i<a.length)){e.next=16;break}return o=a[i],e.next=8,_(o);case 8:t=e.sent,G.addImage(t,"JPEG",5,60,R,500),void 0!==a[i+1]&&G.addPage(),r=(100/(a.length-i)).toFixed(2),E("Initializing : "+r+"%");case 13:i++,e.next=4;break;case 16:G.save("ImgToPdf-Converted"),window.location.reload();case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(d.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){var a=new FileReader;a.readAsDataURL(t),a.onload=function(){e(a.result)},a.onerror=function(e){n(e)}})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function H(e){for(var t,n="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i=new Uint8Array(e),o=i.byteLength,r=o%3,s=o-r,c=0;c<s;c+=3)n+=a[(16515072&(t=i[c]<<16|i[c+1]<<8|i[c+2]))>>18]+a[(258048&t)>>12]+a[(4032&t)>>6]+a[63&t];return 1===r?n+=a[(252&(t=i[s]))>>2]+a[(3&t)<<4]+"==":2===r&&(n+=a[(64512&(t=i[s]<<8|i[s+1]))>>10]+a[(1008&t)>>4]+a[(15&t)<<2]+"="),n}function q(e,t){if(t!==e.length){var n=(100/(e.length-t)).toFixed(2);E("Initializing : "+n+"%");var a=[];a[t]=new XMLHttpRequest,"https://content.dropboxapi.com/2/files/download",a[t].open("POST","https://content.dropboxapi.com/2/files/download",!0),a[t].responseType="arraybuffer",a[t].setRequestHeader("Authorization","Bearer YE_Jc0-GGWMAAAAAAAAAARXr7ERK4stbhRFOyFTxIJdPcoSFcql6-eoQn1G51e7M"),a[t].setRequestHeader("Content-Type","application/octet-stream"),a[t].setRequestHeader("Dropbox-API-Arg",JSON.stringify({path:e[t].id})),a[t].onload=function(){if(4===a[t].readyState&&200===a[t].status){if(w[t]="data:image/jpeg;base64,"+H(a[t].response),console.log(w.length),void 0===e[t+1])for(var n=0;n<w.length;n++)y.addImage(w[n],"JPEG",5,60,R,500),void 0!==w[n+1]&&y.addPage(),void 0===w[n+1]&&(y.save("ImgToPdf-Converted"),window.location.reload());q(e,++t)}},a[t].send()}}var K=function(){q(I.current,0),window.$("#exampleModal").modal("hide")};return Object(x.jsxs)(a.Fragment,{children:[Object(x.jsx)("h1",{style:{marginBottom:"3%",marginLeft:"59px",marginTop:"3%"},className:"text-danger",children:"Image to pdf Converter"}),Object(x.jsx)("div",{class:"container-fluid",children:Object(x.jsxs)("div",{className:"row",style:{marginLeft:"30px"},children:[Object(x.jsx)("div",{className:"col-md-11",children:Object(x.jsx)(b.a,{acceptedFiles:["image/*"],onChange:function(e){return i(e)},dropzoneText:"Drag and drop an image here or click",filesLimit:100,showPreviewsInDropzone:!0,showAlerts:!1})}),Object(x.jsxs)("div",{className:"col-md-1",children:[Object(x.jsx)(h.a,{clientId:"53271139406-uvv8bp7h02s88p3u12oofn7bv9t35ocj.apps.googleusercontent.com",developerKey:O,scope:"https://www.googleapis.com/auth/drive.readonly",onChange:function(e){return m(e.docs)},onAuthenticate:function(e){return k(e)},onAuthFailed:function(e){return console.log("on auth failed :"+e)},multiselect:!0,navHidden:!0,authImmediate:!1,mimeTypes:["image/png","image/jpeg","image/jpg"],viewId:"DOCS_IMAGES",children:Object(x.jsx)("button",{className:"btn btn-danger",style:{borderRadius:"60%"},children:Object(x.jsx)("i",{class:"fab fa-google-drive",style:{color:"white",fontSize:"20px"}})})}),Object(x.jsx)("br",{}),Object(x.jsx)(f.a,{appKey:"929743z4hbcblk6",success:function(e){C(e),e.map((function(e){var t=document.getElementById("DropBox_img_grid"),n=document.createElement("div");n.setAttribute("id",e.id),n.style.cssText="margin-bottom:5px",n.className="col-md-4",t.appendChild(n);var a=document.createElement("img");a.src=e.thumbnailLink,a.style.cssText="margin-left:5px";var i=document.createElement("button");i.innerHTML="<i class='far fa-trash-alt'></i>",i.style.cssText="overflow:visible;font-size:15px;float:left;color:red;border-radius:100px;border:hidden",i.onclick=function(){!function(e,t){var n=I.current.filter((function(e){return e.id!==t}));document.getElementById(t).innerHTML="",C(n),w=[]}(0,e.id)},n.appendChild(i),n.appendChild(a),window.$("#exampleModal").modal("show")}))},cancel:function(){return console.log("canceled")},multiselect:!0,children:Object(x.jsxs)("button",{className:"btn btn-danger",style:{borderRadius:"60%"},children:[Object(x.jsx)("i",{class:"fa fa-dropbox",style:{color:"white",fontSize:"20px"}})," "]})})]})]})}),Object(x.jsx)("br",{}),Object(x.jsx)("button",{style:{marginLeft:"654px"},className:"btn btn-danger btn-lg",onClick:function(){return J()},children:"Generate PDF"}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsxs)("h3",{style:{marginLeft:"610px"},className:"text-danger",children:[z>0?"Intializing":""," ",z]}),Object(x.jsx)("div",{class:"modal fade",id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(x.jsx)("div",{class:"modal-dialog",role:"document",children:Object(x.jsxs)("div",{class:"modal-content",style:{height:"500px"},children:[Object(x.jsxs)("div",{class:"modal-header",children:[Object(x.jsx)("h5",{class:"modal-title",id:"exampleModalLabel",children:"Choose Picture"}),Object(x.jsx)("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close",children:Object(x.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(x.jsx)("div",{class:"modal-body",id:"modal-body",children:Object(x.jsx)("div",{id:"DropBox_img_grid",className:"row"})}),Object(x.jsxs)("div",{class:"modal-footer",children:[Object(x.jsx)("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal",children:"Close"}),Object(x.jsxs)("button",{type:"button",class:"btn btn-primary",onClick:function(){return K()},children:[" ","Generate PDF"]})]})]})})}),Object(x.jsx)("div",{class:"modal fade",id:"DriveModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(x.jsx)("div",{class:"modal-dialog",role:"document",children:Object(x.jsxs)("div",{class:"modal-content",style:{height:"500px"},children:[Object(x.jsxs)("div",{class:"modal-header",children:[Object(x.jsx)("h5",{class:"modal-title",id:"exampleModalLabel",children:"Choose Picture"}),Object(x.jsx)("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close",children:Object(x.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(x.jsx)("div",{class:"modal-body",id:"modal-body",children:Object(x.jsx)("div",{id:"Drive_img_grid",className:"row"})}),Object(x.jsxs)("div",{class:"modal-footer",children:[Object(x.jsx)("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal",children:"Close"}),Object(x.jsxs)("button",{type:"button",class:"btn btn-primary",onClick:function(){return function(){window.$("#DriveModal").modal("hide");for(var e=[],t=[],n="",a=0;a<s.length;a++)e.push(v.get("https://www.googleapis.com/drive/v3/files/"+s[a].id+"?key="+O+"&alt=media",{headers:{Authorization:"Bearer ".concat(F)},responseType:"arraybuffer"}).then((function(e){var i="data:"+s[0].mimeType+";base64,"+H(e.data);t.push(i),n++;var o=(100/t.length).toFixed(2);E("Initializing : "+(100-o)+"%"),n===a&&E("Initializing : 100%")}),(function(e){var t=e.response.status;console.log(t)})));Promise.all(e).then((function(){for(var e=0;e<t.length;e++)G.addImage(t[e],"JPEG",5,60,R,500),void 0!==t[e+1]&&G.addPage(),void 0===t[e+1]&&(G.save("ImgToPdf-Converted"),window.location.reload())}))}()},children:[" ","Generate PDF"]})]})]})})})]})},C=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,541)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),o(e),r(e)}))};r.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(A,{})}),document.getElementById("root")),C()},94:function(e,t,n){},96:function(e,t,n){}},[[135,1,3]]]);
//# sourceMappingURL=main.0dc55b50.chunk.js.map