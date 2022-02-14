
/*************************** [bundle] ****************************/
// Original file:./examples/postMessage.html
/*****************************************************************/
window.__etcpack__bundleSrc__['43']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<!DOCTYPE html>\r\n<html lang=\"zh-cn\">\r\n\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>HTML / 接口 / postMessage(信息发送者)</title>\r\n</head>\r\n\r\n<body>\r\n\r\n    <button id=\"sendMessage\">发送消息</button>\r\n    <iframe id=\"receiver\" src=\"https://hai2007.github.io/Front-End-Learning-Manual/examples/postMessage_receiver.html\" width=\"300\" height=\"100\"></iframe>\r\n\r\n    <script>\r\n\r\n        var receiver = document.getElementById('receiver').contentWindow;\r\n        var btn = document.getElementById('sendMessage');\r\n\r\n        btn.addEventListener('click', function (e) {\r\n            receiver.postMessage(\"你好呀！\", \"*\");\r\n        });\r\n\r\n    </script>\r\n</body>\r\n\r\n</html>\r\n"
  
    return __etcpack__scope_bundle__;
}
