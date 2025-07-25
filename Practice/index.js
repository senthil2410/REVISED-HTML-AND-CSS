function validateCheck()
{
 const data=   document.getElementById('fname');

 if(data.value.trim()==='')
 {
    alert("Input is not Entered");
    return false;
 }

 return true;

}


function validateInput()
{
    const input=document.getElementById('email');

    if(input.value.trim()==="")
    {
        alert("The value has been not entered properly ");
        return false;

    }
    return true;
}



function  changeInput()
{
    const input=document.getElementById('password');
    alert(`The password value has been chaned to ${input.value}`);

}


// Keyborad Events 

const kinput = document.getElementById("keyboardvalue");
const koutput = document.getElementById("output");

kinput.addEventListener("keydown", (event) => {
    if (event.ctrlKey) {
        switch (event.key.toLowerCase()) {
        case 's':
                event.preventDefault();
                koutput.textContent = `Ctrl key is pressed along with ${event.key} to save`;
                alert('Ctrl+s is used to save the document');
                break;
        case 'p':
            event.preventDefault();
                koutput.textContent = `Ctrl key is pressed along with ${event.key} to print`;
                alert('Ctrl+p is used to print the document');
                break;
            default:
                event.preventDefault();
                koutput.textContent = `Ctrl key is pressed along with ${event.key}`;
        }
    } else {
        koutput.textContent = `${event.key} is pressed`;
    }
});

kinput.addEventListener("keyup", (event) => {
    koutput.textContent = `${event.key} is released`;
});


// Mouse eVENTS

const minput=document.getElementById("mouseEvent");
const moutput=document.getElementById("m-output");

const locationPointer=(event)=>
{
    moutput.innerText=`OFFSET:${event.offsetX} AND ${event.offsetY}\n 
                         VIEWPORT :${event.clientX} AND ${event.clientY}\n
                         PAGE:${event.pageX} AND ${event.pageY}\n
                         SCREEN :${event.screenX} AND ${event.screenY}\n`;
                        

}

minput.addEventListener('mouseup',locationPointer);
minput.addEventListener('mousedown',locationPointer);
minput.addEventListener('mouseover',locationPointer);
minput.addEventListener('mouseout',locationPointer);
minput.addEventListener('mousemove',locationPointer);

// Drag and Drop Events


const dragStart=document.getElementById('draginput');

const dropbox=document.getElementById('dropoutput');

dragStart.addEventListener("dragstart",(event)=>
{
    event.dataTransfer.setData("text/plain",event.target.id);
});

dropbox.addEventListener("dragover",(event)=>
{
     event.preventDefault();
});

dropbox.addEventListener("drop",(event)=>

{
      event.preventDefault
    const dragId=event.dataTransfer.getData("text/plain");

    const draggedElement=document.getElementById(dragId);

    dropbox.appendChild(draggedElement)
});


dropbox.addEventListener("dragleave",(event)=>
{
    alert("THE ELEMENT IS MOVING FROM DROP POINT AGAIN")
});


// view events

const viewElement=document.getElementById('view');

function updatesize()
{
    const scroll=window.scrollY;
    const height=window.innerHeight;
    const width=window.innerWidth;


    viewElement.innerHTML=`Scroll:${scroll}px <br>
                            Size:${height}x${width}`;
}
updatesize();

window.addEventListener("scroll",updatesize);
window.addEventListener("resize",updatesize);


const video=document.querySelector('video');

document.addEventListener("visibilitychange",()=>
{
    if(document.visibilityState=="hidden")
    {
        video.pause();
        console.log("Video paused");
        alert("paused")
    }
    else{
        video.play();
        console.log("Video  resumed");
    }
})
 // local and session storage
function handleSubmit(event)
{

     event.preventDefault();
    const name=document.getElementById('firstname').value;

    localStorage.setItem("name",name);
    sessionStorage.setItem("name",name);



//  localStorage.removeItem(name);
//    console.log (localStorage.getItem());

//    sessionStorage.removeItem(name);
//    console.log (sessionStorage.getItem());

 console.log(localStorage.getItem('name'));
}



// Cookies

const setCookies=document.getElementById("setcookies");

setCookies.addEventListener("click",()=>
{
    document.cookie=`name=senthil_kumar;expires=Sun,2025-07-20 00:00:59 GMT;SameSite=Lax;path=/ `;
})

// histroy API

const front=document.getElementById('forward');

const back=document.getElementById('back');

const steps=document.getElementById('steps');

const stepbtn=document.getElementById('stepbtn');

history.pushState({name:"SENTHIL"},"users","?user1");

history.pushState({name:"KUMAR"},"users","?user2");

history.pushState({name:"BABY"},"users","?user3");

console.log(history.length);
front.addEventListener("click",()=>
{
    history.forward();
})

back.addEventListener("click",()=>
{
    history.back();
})

stepbtn.addEventListener("click",()=>
{
    const stepvalue=Number(steps.value);
    if(Number.isNaN(stepvalue))
    {
        alert("Invalid");
        return;
    }

    history.go(stepvalue);

});

window.addEventListener('popstate',(event)=>
{
    alert(`Location :${document.location} of the page and State ${JSON.stringify(event.state)}`);
})


//server-side Event


const events = new EventSource('http://localhost:3000/event');

events.onmessage = (event) => {
  document.getElementById('output-time').innerText = event.data;
};

events.onerror = (event) => {
  document.getElementById('output-time').innerText = 'ERROR';
};
