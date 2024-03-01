const subButt=document.querySelector('#submit');
const chat=document.querySelector('#chat');
const result=document.querySelector('#result');
const usr_name=document.querySelector("#usr_name");
const adm=document.querySelector('#adm');


eval=(val)=>{
    if(usr_name.value==''){
        result.innerHTML+="<br>User Name Not Set";
    }else{
        if(chat.value=='')
            result.innerHTML+="<br>"+usr_name.value+":"+"<br>no inputs";
        else
            req(val);
    }
};

req=(message)=>{
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "http://localhost:8888/XpertBPOSolutions/bposervlet?chat="+message, true);
    xhr.responseType = 'document';  
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var a=xhr.responseXML.getElementsByTagName("result");
            result.innerHTML+="<br>XpertBPOSolutions:<br>"+a[0].textContent;
        }
    };
    xhr.send();
};

var Chat = {};

Chat.socket = null;

Chat.connect = (function(host) {
    if ('WebSocket' in window) {
        Chat.socket = new WebSocket(host);
    } else if ('MozWebSocket' in window) {
        Chat.socket = new MozWebSocket(host);
    } else {
        Console.log('Error: WebSocket is not supported by this browser.');
        return;
    }

    Chat.socket.onopen = function () {
        Console.log('Connection Established with the Server');
        subButt.addEventListener("click",function() {
            if(usr_name.value==''){
                result.innerHTML+="<br>User Name Not Set";
                return;
            }
            if(chat.value==''){
                result.innerHTML+="<br>"+usr_name.value+":<br>No input";
                return;
            }
                Chat.sendMessage(chat.value);
        });
    };

    Chat.socket.onmessage = function (message) {
        try{
            data=message.data.replaceAll("&quot;",'"');
            index=data.indexOf(":")+2;
            json=JSON.parse(data.substring(index));
            Console.log(json.usr+":<br>"+json.mess);
        }catch(guest){
            Console.log("A new user has Joined.");
        }
    };
});

Chat.initialize = function() {
    if (window.location.protocol == 'http:') {
        Chat.connect('ws://' + window.location.host + '/examples/websocket/chat');
    } else {
        Chat.connect('wss://' + window.location.host + '/examples/websocket/chat');
    }
};

Chat.sendMessage = (function(message) {
    if (message != '') {
        jsonData={"mess":message,"usr":usr_name.value};
        Chat.socket.send(JSON.stringify(jsonData));
        chat.value="";
    }
});

var Console = {};

Console.log = (function(message) {
    var p = document.createElement('p');
    p.innerHTML = message;
    result.appendChild(p);
});

Chat.initialize();


adm.addEventListener("click",(event)=>{
    event.target.disabled=true;
    usr_name.value="XpertBPOSolutions admin";
    usr_name.disabled=true;
    }
);

document.querySelector("button").addEventListener("click",()=>{
    if(usr_name.value!='')
        usr_name.disabled=true;
        for(var i=1;i<=6;i++)document.getElementById("butt_"+i).disabled=true;
    }
);

for(var i=1;i<=6;i++)
    document.getElementById("butt_"+i).addEventListener("click",(event)=>{
        if(usr_name.value=='')
            result.innerHTML+="<br>User Name Not Set";
        else {
            usr_name.disabled=true;
            req(event.target.value);
         }
    }
);
