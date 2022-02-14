
/*************************** [bundle] ****************************/
// Original file:./examples/canvas.html
/*****************************************************************/
window.__etcpack__bundleSrc__['41']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<!DOCTYPE html>\r\n<html lang=\"zh-cn\">\r\n\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>HTML / 标签 / Canvas</title>\r\n    <script src='https://cdn.jsdelivr.net/npm/@hai2007/tool@0'></script>\r\n    <style>\r\n        canvas {\r\n            width: 300px;\r\n            height: 300px;\r\n        }\r\n    </style>\r\n</head>\r\n\r\n<body>\r\n    <canvas>非常抱歉，您的浏览器不支持canvas!</canvas>\r\n    <script>\r\n\r\n        // 获取画布结点\r\n        var canvas = document.getElementsByTagName('canvas')[0];\r\n\r\n        // 设置画布大小\r\n        canvas.setAttribute('width', tool.xhtml.getStyle(canvas, 'width'));\r\n        canvas.setAttribute('height', tool.xhtml.getStyle(canvas, 'height'));\r\n\r\n        // 获取画笔对象\r\n        var painter = canvas.getContext('2d');\r\n\r\n        // 配置画笔\r\n        painter.fillStyle = 'red';\r\n        painter.font = '20px cursive';\r\n\r\n        // 使用画笔绘画\r\n        painter.fillText('我是一段文字', 50, 50);\r\n\r\n    </script>\r\n</body>\r\n\r\n</html>\r\n"
  
    return __etcpack__scope_bundle__;
}
