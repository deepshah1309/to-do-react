(this.webpackJsonpbn=this.webpackJsonpbn||[]).push([[0],{14:function(t,e,o){},15:function(t,e,o){"use strict";o.r(e);var n=o(0),c=o(1),a=o.n(c),s=o(7),r=o.n(s),d=(o(14),o(8)),l=o(2),i=o(3),h=o(5),u=o(4),b=function(t){var e=t.todos,o=t.deleteTodo;console.log(o);var c=e.length?e.map((function(t){return Object(n.jsx)("div",{className:"todos",children:Object(n.jsx)("div",{className:"todo-wrap",children:Object(n.jsxs)("p",{className:"todo",children:[t.content,Object(n.jsx)("button",{onClick:function(){o(t.id)},style:{color:"white",backgroundColor:"red"},children:"remove"})]})})},t.id)})):Object(n.jsx)("p",{className:"no-to-do",children:"you have nothing to do"});return Object(n.jsx)("div",{className:"todo",children:c})},j=function(t){Object(h.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(l.a)(this,o);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={content:""},t.handleSubmit=function(e){e.preventDefault(),console.log(t.state),t.props.addTodo(t.state),t.setState({content:""})},t.handleChange=function(e){t.setState({content:e.target.value})},t}return Object(i.a)(o,[{key:"render",value:function(){return Object(n.jsxs)("form",{onSubmit:this.handleSubmit,style:{color:"blue",fontSize:"2rem"},children:[Object(n.jsx)("br",{}),Object(n.jsx)("label",{htmlFor:"addtodo",children:"Add some work"}),Object(n.jsx)("input",{type:"text",onChange:this.handleChange,value:this.state.content,required:!0})]})}}]),o}(c.Component),f=function(t){Object(h.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(l.a)(this,o);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={todos:[{id:1,content:"let's have fun with react-to-do list"}]},t.deleteTodo=function(e){var o=t.state.todos.filter((function(t){return t.id!==e}));t.setState({todos:o})},t.addTodo=function(e){e.id=Math.random();var o=[].concat(Object(d.a)(t.state.todos),[e]);t.setState({todos:o}),console.log(e)},t}return Object(i.a)(o,[{key:"render",value:function(){console.log(this.state.todos);return Object(n.jsxs)("div",{className:"app",style:{background:"cyan",minHeight:"100vh",textAlign:"center"},children:[Object(n.jsx)("h1",{style:{color:"white",background:"black",textAlign:"center"},children:"Deep Shah's todo "}),Object(n.jsx)(b,{deleteTodo:this.deleteTodo,todos:this.state.todos,style:{background:"blue",color:"white",paddingLeft:"25%"}}),Object(n.jsx)(j,{addTodo:this.addTodo})]})}}]),o}(c.Component),g=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,16)).then((function(e){var o=e.getCLS,n=e.getFID,c=e.getFCP,a=e.getLCP,s=e.getTTFB;o(t),n(t),c(t),a(t),s(t)}))};r.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(f,{})}),document.getElementById("root")),g(console.log("hello"))}},[[15,1,2]]]);
//# sourceMappingURL=main.db6c79d7.chunk.js.map