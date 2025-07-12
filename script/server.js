const http=require('http');


http.createServer((req,res)=>
{

    if(req.url==='/event')
    {
        res.writeHead(200,
            {
                "Content-Type":"text/event-stream",
                'Connection': 'keep-alive',
                "Access-Control-Allow-Origin": "*"
            }
        )

        const intervalId=setInterval(()=>
        {
             const time = new Date().toLocaleTimeString();
               res.write(`data: ${time}\n\n`);
        },1000)
        
        res.on('close',()=>
        {
            clearInterval(intervalId);
        })
    }
    else
    {
              res.writeHead(400, { 'Content-Type': 'text/plain' });
             res.end('Error:error occured');
    }

}).listen(3000,()=>
{
    console.log('server running on port number 3000');
})