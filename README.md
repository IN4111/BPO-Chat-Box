---

# BPO Chat Box with Java, Tomcat, Servlet, and Websocket

This project comprises a Java web application with a front-end designed by [Binary-Shade](https://github.com/Binary-Shade) and a back-end developed by [IN4111](https://github.com/IN4111).

## File Setup:

Ensure the Servlet folder is placed in the following directory structure:

```
.
├── Apache-Tomcat
│   ├── lib
│   │   └── servlet-api.jar
│   ├── conf
│   │   └── server.xml
│   └── webapps
│       └── XpertBPOSolutions
│           ├── WEB-INF
│           │   ├── classes
│           │   │   ├── BPOServlet.java
│           │   │   └── BPOServlet.class
│           │   └── web.xml
│           ├── index.html
│           ├── script.js
│           └── style.css  
```
## Project Demo:

https://github.com/IN4111/BPO-Chat-Box/assets/115919438/1a228887-73d1-4863-9c13-1a643d496418

## Compiling the Code:

Navigate to the `Apache-Tomcat/webapps/WEB-INF/classes` directory and compile the servlet Java class `BPOServlet.java` using the following command:

```sh
javac -cp ../../../../lib/servlet-api.jar BPOServlet.java
```

## Running the Server:

Ensure that the `$JAVA_HOME` variable is set and run the server using the command:

```sh
./Apache-Tomcat/bin/startup.sh
```

## Hosting:

After compiling the Servlet class and running the Apache server, access the home page at `http://localhost:8888/XpertBPOSolutions/index.html`.

## Changing Port Number:

To change the port number, open the `server.xml` file located in `Apache-Tomcat/conf/server.xml` and modify the port number specified within the `<Connector>` tag. After making changes, restart the server.

```xml
<Connector port="8888" protocol="HTTP/1.1"
               connectionTimeout="20000"
               redirectPort="8443"
               maxParameterCount="1000"
               />
```

## Server Shutdown:

To shut down the server, execute the following command:

```sh
./Apache-Tomcat/bin/shutdown.sh
```

---

Feel free to customize it further according to your preferences or additional instructions! 🚀
