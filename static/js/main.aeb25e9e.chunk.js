(this.webpackJsonpbn=this.webpackJsonpbn||[]).push([[0],{14:function(t,e,o){},15:function(t,e,o){"use strict";o.r(e);var n=o(0),c=o(1),a=o.n(c),s=o(7),d=o.n(s),r=(o(14),o(8)),i=o(2),l=o(3),h=o(5),u=o(4),b=function(t){var e=t.todos,o=t.deleteTodo;console.log(o);var c=e.length?e.map((function(t){return Object(n.jsx)("div",{className:"todos",children:Object(n.jsxs)("div",{className:"todo-wrap",children:[Object(n.jsx)("p",{className:"todo",children:t.content}),Object(n.jsx)("button",{onClick:function(){o(t.id)},children:"remove"})]})},t.id)})):Object(n.jsx)("p",{className:"no-to-do",children:"you have nothing to do"});return Object(n.jsx)("div",{className:"todo",children:c})},j=function(t){Object(h.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(i.a)(this,o);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={content:""},t.handleSubmit=function(e){e.preventDefault(),console.log(t.state),t.props.addTodo(t.state),t.setState({content:""})},t.handleChange=function(e){t.setState({content:e.target.value})},t}return Object(l.a)(o,[{key:"render",value:function(){return Object(n.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(n.jsx)("label",{htmlFor:"addtodo",children:"Add some work"}),Object(n.jsx)("input",{type:"text",onChange:this.handleChange,value:this.state.content,required:!0})]})}}]),o}(c.Component),f=function(t){Object(h.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(i.a)(this,o);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={todos:[{id:1,content:"let's have fun with react-to-do list"}]},t.deleteTodo=function(e){var o=t.state.todos.filter((function(t){return t.id!==e}));t.setState({todos:o})},t.addTodo=function(e){e.id=Math.random();var o=[].concat(Object(r.a)(t.state.todos),[e]);t.setState({todos:o}),console.log(e)},t}return Object(l.a)(o,[{key:"render",value:function(){console.log(this.state.todos);return Object(n.jsxs)("div",{className:"app",style:{background:"cyan"},children:[Object(n.jsx)("h1",{style:{color:"white",background:"black",textAlign:"center"},children:"Deep Shah's todo "}),Object(n.jsx)(b,{deleteTodo:this.deleteTodo,todos:this.state.todos,style:{background:"blue",color:"white",paddingLeft:"25%"}}),Object(n.jsx)(j,{addTodo:this.addTodo})]})}}]),o}(c.Component),g=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,16)).then((function(e){var o=e.getCLS,n=e.getFID,c=e.getFCP,a=e.getLCP,s=e.getTTFB;o(t),n(t),c(t),a(t),s(t)}))};d.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(f,{})}),document.getElementById("root")),g(console.log("hello"))}},[[15,1,2]]]);
//# sourceMappingURL=main.aeb25e9e.chunk.js.map