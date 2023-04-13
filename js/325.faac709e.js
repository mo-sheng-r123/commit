"use strict";(self["webpackChunkcommity"]=self["webpackChunkcommity"]||[]).push([[325],{2767:function(e,t,a){a.d(t,{Z:function(){return u}});var l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"block"},[t("el-pagination",{attrs:{"current-page":this.query.page,"page-sizes":[5,10,15,20],"page-size":this.query.psize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},s=[],n={name:"Paging",props:{query:{type:Object,require:()=>{}},total:{type:Number,require:()=>{}}},data(){return{}},methods:{handleSizeChange(e){this.query.psize=e,this.loading=!1,this.$emit("paging")},handleCurrentChange(e){this.query.page=e,this.$emit("paging"),this.loading=!1}}},i=n,r=a(1001),o=(0,r.Z)(i,l,s,!1,null,"37f50908",null),u=o.exports},466:function(e,t,a){a.d(t,{Z:function(){return u}});var l=function(){var e=this,t=e._self._c;return t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,"element-loading-background":"rgba(0, 0, 0, 0)"},on:{"selection-change":e.handleSelectionChange}},[t("el-table-column",{attrs:{type:"selection",width:"55"}}),e._l(e.tableCouml,(function(a,l){return[a.isshow?t("el-table-column",{key:l,attrs:{label:a.label},scopedSlots:e._u([{key:"default",fn:function(t){return[e._t(a.showname,null,{data:t.row})]}}],null,!0)}):t("el-table-column",{key:l,attrs:{prop:a.prop,label:a.label,width:a.width}})]}))],2)},s=[],n={name:"tablecom",props:{loading:{type:Boolean,default:()=>!0},tableData:{type:Array,default:()=>[]},tableCouml:{type:Array,default:()=>[]}},data(){return{}},created(){},methods:{handleSelectionChange(e){e.forEach((e=>{this.$emit("idshow",e.id)}))}}},i=n,r=a(1001),o=(0,r.Z)(i,l,s,!1,null,"8f316a3a",null),u=o.exports},2634:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var l=function(){var e=this,t=e._self._c;return t("div",[t("el-card",{staticClass:"box-card"},[t("span",[e._v("保修列表")])]),t("el-row",[t("el-col",{attrs:{span:24}},[t("el-form",{ref:"form",attrs:{model:e.query,"label-width":"96px"}},[t("div",{staticClass:"op"},[t("el-form-item",{attrs:{label:"投诉标题"}},[t("el-input",{attrs:{clearable:"",placeholder:"投诉标题"},on:{change:e.serate},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.serate.apply(null,arguments)}},model:{value:e.query.key,callback:function(t){e.$set(e.query,"key",t)},expression:"query.key"}})],1),t("el-form-item",{attrs:{label:"地址"}},[t("el-input",{attrs:{clearable:"",placeholder:"地址"},on:{change:e.serate},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.serate.apply(null,arguments)}},model:{value:e.query.address,callback:function(t){e.$set(e.query,"address",t)},expression:"query.address"}})],1),t("el-form-item",{attrs:{label:"电话"}},[t("el-input",{attrs:{clearable:"",placeholder:"电话"},on:{change:e.serate},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.serate.apply(null,arguments)}},model:{value:e.query.tel,callback:function(t){e.$set(e.query,"tel",t)},expression:"query.tel"}})],1),t("el-form-item",{attrs:{label:"按时间查询"}},[t("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.query.begindate,callback:function(t){e.$set(e.query,"begindate",t)},expression:"query.begindate"}})],1),t("el-form-item",{attrs:{label:"投诉状态"}},[t("el-select",{attrs:{clearable:"",placeholder:"请选择"},on:{change:e.serate},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.serate.apply(null,arguments)}},model:{value:e.query.state,callback:function(t){e.$set(e.query,"state",t)},expression:"query.state"}},e._l(e.list,(function(e,a){return t("el-option",{key:a,attrs:{label:e.name,value:e.id}})})),1)],1)],1),t("div",{staticClass:"ol"},[t("el-form-item",{attrs:{label:"投诉类型"}},[t("el-select",{attrs:{clearable:"",placeholder:"请选择"},on:{change:e.serate},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.serate.apply(null,arguments)}},model:{value:e.query.type,callback:function(t){e.$set(e.query,"type",t)},expression:"query.type"}},e._l(e.typename,(function(e,a){return t("el-option",{key:a,attrs:{label:e.name,value:e.id}})})),1)],1),t("el-form-item",{attrs:{label:"居民"}},[t("el-input",{attrs:{clearable:"",placeholder:"请输入关键字"},on:{change:e.serate},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.serate.apply(null,arguments)}},model:{value:e.query.userid,callback:function(t){e.$set(e.query,"userid",t)},expression:"query.userid"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.serate}},[e._v("查询")])],1)],1)])],1)],1),t("el-row",[t("el-button",{attrs:{type:"danger"},on:{click:e.del}},[e._v("批量删除")])],1),t("Table",{attrs:{loading:e.loading,tableData:e.tableData,tableCouml:e.tableCouml},on:{idshow:e.idshow},scopedSlots:e._u([{key:"title",fn:function(a){return[t("a",{attrs:{href:"javascript:void(0);"},on:{click:function(t){return e.deladd(a.data)}}},[e._v(e._s(a.data.typename))])]}},{key:"imgage",fn:function(a){return[t("p",{on:{click:function(t){return e.ol(a.data.images)}}},[t("el-image",{staticStyle:{width:"50px",height:"50px"},attrs:{src:e.img+e.url,fit:"fill"}}),t("el-image",{staticStyle:{width:"50px",height:"50px","margin-left":"10px"},attrs:{src:e.img+e.url,fit:"fill"}})],1)]}},{key:"option",fn:function(a){return[t("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(t){return e.mod(a.data)}}},[e._v("修改")]),t("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.handleDelete(a.data)}}},[e._v("删除")])]}}])}),t("Paging",{attrs:{query:e.query,total:e.total},on:{paging:e.paging}}),t("Reairsadd",{attrs:{isNewsadd:e.isNewsadd,Newsdata:e.Newsdata},on:{change:e.change}})],1)},s=[],n=(a(7658),a(466)),i=a(2767),r=function(){var e=this,t=e._self._c;return t("el-dialog",{attrs:{title:"详情展示",visible:e.isNewsadd,width:"60%",center:"center","before-close":e.handleClose},on:{"update:visible":function(t){e.isNewsadd=t}}},[t("div",{staticClass:"op"},[t("div",[t("h3",[t("span",[e._v("提交人："+e._s(e.Newsdata.username))]),e._v(" "),t("span",[e._v("维修地址："+e._s(e.Newsdata.address))]),e._v(" "),t("span",[e._v("手机号："+e._s(e.Newsdata.tel))])])]),t("div",[t("h3",[t("span",[e._v("问题类型："),t("b",{staticClass:"ol"},[e._v(e._s(e.Newsdata.typename)+" ")])]),e._v(" "),t("span",[e._v("问题描述："+e._s(e.Newsdata.content))])])]),t("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:e.Newsdata.url,fit:"fill"}}),t("el-image",{staticStyle:{width:"100px",height:"100px","margin-left":"300px"},attrs:{src:e.Newsdata.url,fit:"fill"}})],1),t("el-steps",{staticStyle:{"margin-top":"20px"},attrs:{active:e.Newsdata.state,"finish-status":"success",simple:""}},[t("el-step",{attrs:{title:"步骤 1"}}),t("el-step",{attrs:{title:"步骤 2"}}),t("el-step",{attrs:{title:"步骤 3"}}),t("el-step",{attrs:{title:"步骤 4"}})],1)],1)},o=[],u={props:{isNewsadd:{type:Boolean,default:!1},Newsdata:{type:Object,default:()=>{}}},data(){return{img:"http://estate.eshareedu.cn/estate/upload/"}},methods:{handleClose(e){this.$confirm("确认关闭？").then((()=>{this.$emit("change",!1)})).catch((()=>{}))}}},d=u,c=a(1001),p=(0,c.Z)(d,r,o,!1,null,"3d87fddb",null),h=p.exports,y={data(){return{img:"http://estate.eshareedu.cn/estate/upload/",loading:!0,query:{page:1,psize:5},tableData:[],tableCouml:[{prop:"id",label:"ID"},{prop:"typename",label:"故障类型",isshow:!0,showname:"title"},{prop:"address",label:"维修地址"},{prop:"images",label:"故障图片",isshow:!0,showname:"imgage"},{prop:"content",label:"故障描述"},{prop:"statename",label:"维修状态"},{prop:"username",label:"业主名称"},{prop:"addtime",label:"维修日期"},{label:"操作",isshow:!0,showname:"option"}],total:0,ids:[],Newsdata:{},isNewsadd:!1,typename:[],list:[],url:""}},components:{Table:n.Z,Reairsadd:h,Paging:i.Z},created(){this.getimet(),this.gettypename(),this.getstatename()},methods:{ol(e){e.forEach((e=>{this.url=e.url})),console.log(this.url)},serate(){this.getimet()},async getstatename(){let e=await this.http.get("/repairstate/list",this.query);1e4==e.errCode&&(this.list=e.data.list)},async gettypename(){let e=await this.http.get("/repairstype/list",this.query);1e4==e.errCode&&(this.typename=e.data.list)},paging(){this.getimet()},deladd(e){this.isNewsadd=!0,this.Newsdata=e},change(){this.isNewsadd=!1},del(){this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{let e=await this.http.post("/repairs/deleteall",{ids:this.ids});1e4==e.errCode&&(this.$message.success("删除成功"),this.getimet())})).catch((()=>{this.$message({type:"info",message:"已取消删除"})}))},idshow(e){this.ids.push(e)},handleDelete(e){this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{let t=await this.http.get("/questions/delete",{id:e.id});"10000"==t.errCode&&(this.$message.success("删除成功"),this.getimet())})).catch((()=>{this.$message({type:"info",message:"已取消删除"})}))},async getimet(){let e=await this.http.get("/repairs/list",this.query);"10000"==e.errCode&&(this.tableData=e.data.list,this.total=e.data.counts,this.loading=!1)}}},m=y,g=(0,c.Z)(m,l,s,!1,null,"85a358b0",null),f=g.exports}}]);
//# sourceMappingURL=325.faac709e.js.map