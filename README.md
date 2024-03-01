# BPO-Chat-Box-With-Java-Tomcat-Servlet-And-Websocket
Web App With FrontEnd Designed By [Binary-Shade](https://github.com/Binary-Shade) And BackEnd Developed By [IN4111](https://github.com/IN4111)
## 1..File Set-up:
Place the Servlet Folder in the following location
>
> ```
> .
> ├── Apache-Tomcat
>     ├── lib
>     │   └── servlet-api.jar
>     ├── conf
>     │   └── server.xml
>     └── webapps
>         └── XpertBPOSolutions
>             └── WEB-INF
>             │   └── classes
>             │   │   └── BPOServlet.java
>             │   │   └── BPOServlet.class
>             │   └── web.xml
>             └── index.html
>             └── script.js
>             └──style.css  
> ```
## 2..Compiling the code:
Move to the ```Apache-Tomcat/webapps/WEB-INF/classes``` folder and compile the servlet java class ```BPOServlet.java```
with the following prompt
```javac -cp ../../../../Lib/servlet-api.jar BPOServlet.java```
## 3..Run the server
Make sure that ```$JAVA_HOME``` variable has alsready set and Run the server using the command
```./Apache-Tomcat/bin/startup.sh```
## 4..Hosting
After compiling Servlet class and running apache server locate ```http://localhost:8888/XpertBPOSolutions/``` to locate ```index.html``` home page
## 5..Change Port Number
To change the port number open server.xml file in ```Apache-Tomcat/conf/server.xml``` and change the port number given as ```**port=8888**```
```**
<Connector port="8888" protocol="HTTP/1.1"
               connectionTimeout="20000"
               redirectPort="8443"
               maxParameterCount="1000"
               />
**
```
## 6..Server shutdown:
To Run the server use the below command
```./Apache-Tomcat/bin/shutdown.sh```
