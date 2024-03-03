const subButt = document.querySelector('#submit');
const chat = document.querySelector('#chat');
const result = document.querySelector('#result');
const usr_name = document.querySelector("#usr_name");
const adm = document.querySelector('#adm');

// Function to handle user input evaluation
const evaluateInput = () => {
    if (usr_name.value === '') {
        result.innerHTML += "<br>User Name Not Set";
    } else {
        if (chat.value === '')
            result.innerHTML += "<br>" + usr_name.value + ":<br>No input";
        else
            makeRequest(chat.value);
    }
};

// Function to make XMLHttpRequest
const makeRequest = (message) => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', `http://localhost:8888/XpertBPOSolutions/bposervlet?chat=${encodeURIComponent(message)}`, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var responseText = xhr.responseText;
                try {
                    var jsonResponse = JSON.parse(responseText);
                    if (jsonResponse.hasOwnProperty("response")) {
                        result.innerHTML += `<br>alexa customer support:<br>${jsonResponse.response}`;
                    } else {
                        result.innerHTML += `<br>Error: ${jsonResponse.error}`;
                    }
                } catch (e) {
                    result.innerHTML += "<br>Error parsing JSON response: " + e.message;
                }
            } else {
                result.innerHTML += "<br>Error: " + xhr.status;
            }
        }
    };
    xhr.send();
};

// Function to handle WebSocket initialization
const initializeWebSocket = () => {
    var Chat = {};
    Chat.socket = null;

    if ('WebSocket' in window) {
        Chat.socket = new WebSocket(getWebSocketURL());
    } else if ('MozWebSocket' in window) {
        Chat.socket = new MozWebSocket(getWebSocketURL());
    } else {
        console.log('Error: WebSocket is not supported by this browser.');
        return;
    }

    Chat.socket.onopen = function () {
        console.log('Connection Established with the Server');
        subButt.addEventListener("click", evaluateInput);
    };

    Chat.socket.onmessage = function (message) {
        try {
            var data = message.data.replaceAll("&quot;", '"');
            var index = data.indexOf(":") + 2;
            var json = JSON.parse(data.substring(index));
            console.log(json.usr + ":<br>" + json.mess);
        } catch (guest) {
            console.log("A new user has Joined.");
        }
    };
};

// Function to get WebSocket URL based on the protocol
const getWebSocketURL = () => {
    return (window.location.protocol == 'http:') ? 'ws://' + window.location.host + '/examples/websocket/chat' :
        'wss://' + window.location.host + '/examples/websocket/chat';
};

// Event listener for the admin button
adm.addEventListener("click", (event) => {
    event.target.disabled = true;
    usr_name.value = "admin";
    usr_name.disabled = true;
});

// Event listener for the submit button
document.querySelector("button").addEventListener("click", () => {
    if (usr_name.value !== '')
        usr_name.disabled = true;
    for (var i = 1; i <= 7; i++) document.getElementById("butt_" + i).disabled = true;
});

// Event listeners for predefined buttons
for (var i = 1; i <= 7; i++) {
    document.getElementById("butt_" + i).addEventListener("click", (event) => {
        if (usr_name.value === '') {
            result.innerHTML += "<br>User Name Not Set";
        } else {
            usr_name.disabled = true;
            makeRequest(event.target.value);
        }
    });
}

// Initialize WebSocket connection
initializeWebSocket();
