const http=require('http'),fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'..');const T={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.jpg':'image/jpeg','.png':'image/png','.json':'application/json'};
http.createServer((q,r)=>{let p=decodeURIComponent(q.url.split('?')[0]);if(p==='/')p='/index.html';const f=path.join(root,p);
fs.readFile(f,(e,d)=>{if(e){r.writeHead(404);r.end('nf');return}r.writeHead(200,{'Content-Type':T[path.extname(f)]||'application/octet-stream','Cache-Control':'no-store'});r.end(d)})}).listen(8765,()=>console.log('serving '+root+' on 8765'));
