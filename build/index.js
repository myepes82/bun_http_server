var m=[{path:"/",handler:(i)=>{return new Response("Welcome to ur firts bun server",{status:200})}}];function v(i){const j=new URL(i.url),$=m.find((k)=>k.path===j.pathname);if(!$)return new Response("Resource not found",{status:400});return $.handler(i)}var{PORT:w}=Bun.env,f=w??4000,z=Bun.serve({port:f,fetch:v});console.log(`Server running at port: {${f}}`);
