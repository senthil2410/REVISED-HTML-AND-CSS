const connections = [];

onconnect = function (e) {
  const port = e.ports[0];
  connections.push(port);

  port.onmessage =  (event) =>{
    const msg = event.data;

    connections.forEach(p => {
      p.postMessage(`${msg}`);
    });
  };

  port.start();
}