webpackJsonp([18],{451:function(e,t,r){"use strict";function a(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i,c,s,p,d=r(0),u=r.n(d),f=(r(74),r(73)),y=(r.n(f),r(30)),h=r.n(y),g=(r(448),r(13)),m=r(26),b=r(47),w=r(450),v=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),S=g.x.Option,C=function(e,t){return{user:e.app.userState}},E=[{title:"File Name",dataIndex:"reportName",key:"reportName"},{title:"Category",dataIndex:"category",key:"category",render:function(e,t){return u.a.createElement("p",null,e.categoryName)}}],_=(i=Object(m.b)(C))((p=s=function(e){function t(){var e,r,l,i;o(this,t);for(var c=arguments.length,s=Array(c),p=0;p<c;p++)s[p]=arguments[p];return r=l=n(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),l.state={loading:!1,reportCategories:[],selectedCategory:void 0,selectedDept:void 0,reportList:[],selectedRowKeys:[]},l.loadCategory=function(e){l.setState({loading:!0,selectedDept:e}),b.a.get("api/pdf/category/"+e).then(function(e){e.data=""===e.data?[]:e.data,l.setState({loading:!1,reportCategories:e.data})}).catch(function(e){alert(e)})},l.handleSelectCategory=function(e,t,r){console.log(e),l.setState({selectedCategory:e})},l.handleDeleteReport=function(){b.a.delete("api/pdf/report/delete",{data:{reportIds:l.state.selectedRowKeys}}).then(function(e){var t=[].concat(a(l.state.reportList));t=t.filter(function(t){return!h.a.includes(e.data,t._id)}),l.setState({reportList:t,selectedRowKeys:[]})}).catch(function(e){console.log(e)})},l.rowSelection={onChange:function(e,t){l.setState({selectedRowKeys:e})}},i=r,n(l,i)}return l(t,e),v(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),b.a.get("api/pdf/report/",{params:{user:this.props.user._id}}).then(function(t){e.setState({reportList:t.data})}).catch(function(e){alert(e)})}},{key:"render",value:function(){var e=this,t=this.props.user,r=this.state,o=r.reportCategories,n=r.loading,l=r.selectedCategory,i=r.reportList,c=r.selectedRowKeys,s=r.selectedDept;return u.a.createElement(g.w,{type:"flex",justify:"start"},u.a.createElement(g.h,{span:5},u.a.createElement(g.x,{style:{width:"90%",marginBottom:"5px"},onSelect:this.loadCategory,placeholder:"Select department"},t.dept.length>0?t.dept.map(function(e){return u.a.createElement(S,{key:e._id,value:e._id},e.name)}):null),u.a.createElement(g.F,{allowClear:!0,placeholder:"Select report category",style:{width:"90%",marginBottom:"5px"},dropdownStyle:{maxHeight:400,overflow:"auto"},treeData:o,treeDefaultExpandAll:!0,disabled:n,onChange:this.handleSelectCategory}),",",u.a.createElement(g.G,{disabled:void 0===l,name:"reportFile",action:w.a.baseURL+"api/pdf/report/add",multiple:!0,data:{category:l,user:t._id,dept:s},onChange:function(t){var r=t.file.response,o=t.file.status;if("done"===o){var n=[].concat(a(i));n.push(r),e.setState({reportList:[].concat(a(n))})}else"error"===o&&console.log(r)}},u.a.createElement(g.e,null,"Choose file(s) to upload"))),u.a.createElement(g.h,{span:19},u.a.createElement(g.v,{title:"Are you sure delete?",onConfirm:this.handleDeleteReport,okText:"Yes",cancelText:"No"},u.a.createElement(g.e,{type:"danger",size:"small",disabled:0===c.length},"Delete")),u.a.createElement(g.B,{style:{marginTop:"5px"},columns:E,dataSource:i,bordered:!0,size:"small",rowKey:"_id",rowSelection:this.rowSelection})))}}]),t}(d.Component),s.defaultProps={pathName:"Upload PDF Report"},c=p))||c;t.default=_}});
//# sourceMappingURL=18.68c3c657.chunk.js.map