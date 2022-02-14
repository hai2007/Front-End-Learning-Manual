
/*************************** [bundle] ****************************/
// Original file:./src/App/pages/JavaScript/index.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['28']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var _dec, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

__etcpack__scope_args__=window.__etcpack__getBundle('1');
var Component=__etcpack__scope_args__.Component;

__etcpack__scope_args__=window.__etcpack__getBundle('52');
var template =__etcpack__scope_args__.default;


var _class = (_dec = Component({
  selector: "JavaScript",
  template: template,
  styles: []
}), _dec(_class2 = function _class2() {
  _classCallCheck(this, _class2);
}) || _class2);

__etcpack__scope_bundle__.default=_class;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App/pages/JavaScript/index.html
/*****************************************************************/
window.__etcpack__bundleSrc__['52']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<h2 id='fixed-top'>\r\n    JavaScript\r\n</h2>\r\n<h3 id='fixed-object'>\r\n    常用对象\r\n</h3>\r\n<h4 id='fixed-ArrayBuffer_TypedArray_DataView'>\r\n    ArrayBuffer / TypedArray / DataView\r\n</h4>\r\n<p>\r\n    简单的说，\r\n    <span class=\"important\">ArrayBuffer</span>\r\n    就代表了内存中的一段二进制数据，不可以直接读写，只可以通过在上面建立\r\n    <span class=\"important\">TypedArray视图</span>\r\n    或\r\n    <span class=\"important\">DataView视图</span>\r\n    来操作这段二进制数据。\r\n</p>\r\n<p>\r\n    TypedArray视图主要用来操作简单类型的二进制数据，DataView用来操作复杂类型的二进制数据。\r\n</p>\r\n<p>\r\n    为了可以操作二进制数据，首先需要创建一个ArrayBuffer对象：\r\n</p>\r\n<pre ui-code>\r\n    var arrayBuffer = new ArrayBuffer(length) //length代表长度，单位是字节\r\n</pre>\r\n<p>\r\n    对象有了以后，就可以通过那两个视图进行操作了。\r\n</p>\r\n<h5>\r\n    TypedArray视图\r\n</h5>\r\n<p>\r\n    严格意义上来说，TypedArray视图应该是一类视图的统称，具体的有如下这些：\r\n</p>\r\n<ul>\r\n    <li>Int8Array：8位有符号整数，长度1个字节</li>\r\n    <li>Uint8Array：8位无符号整数，长度1个字节</li>\r\n    <li>Uint8ClampedArray：8位无符号整数，长度1个字节，溢出处理不同</li>\r\n    <li>Int16Array：16位有符号整数，长度2个字节</li>\r\n    <li>Uint16Array：16位无符号整数，长度2个字节</li>\r\n    <li>Int32Array：32位有符号整数，长度4个字节</li>\r\n    <li>Uint32Array：32位无符号整数，长度4个字节</li>\r\n    <li>Float32Array：32位浮点数，长度4个字节</li>\r\n    <li>Float64Array：64位浮点数，长度8个字节</li>\r\n</ul>\r\n<p>\r\n    他们只是数据格式不一样，操作上都一样，我们拿Int16Array和Int8Array举例子（非常类似普通的数组）：\r\n</p>\r\n<p>\r\n\r\n</p>\r\n<pre ui-code>\r\nvar arrayBuffer = new ArrayBuffer(6);//申请6个字节的内存空间\r\n\r\nvar int8Array = new Int8Array(arrayBuffer, 0, 2);//使用了2字节的空间\r\nvar int16Array = new Int16Array(arrayBuffer, 2, 2);//使用了4字节的空间\r\n\r\nint8Array[0] = 1;\r\nint16Array[0] = 2;\r\nint16Array[1] = 3;\r\n\r\nconsole.log(int8Array); //Int8Array(2) [1, 0]\r\nconsole.log(int16Array); //Int16Array(2) [2, 3]\r\n</pre>\r\n<h5>\r\n    DataView\r\n</h5>\r\n<p>\r\n    这个就相对复杂一点了，毕竟这个是为操作复杂类型的二进制数据设计的。先看看语法：\r\n</p>\r\n<pre ui-code>\r\n    var dataView = new DataView(ArrayBuffer实例对象[,字节起始位置[,长度]]);\r\n</pre>\r\n<p class=\"warn\">\r\n    温馨提示：和TypedArray有很大区别的是，这里我们在使用的时候可能要去关注一下大端还是小端保存或读取数据。\r\n</p>\r\n<p>\r\n    如果说的简单点，其实DataView就是一个非常非常厉害视图，提供了很多方法，不像TypedArray视图需要建立对应视图然后读取，你可以调用DataView的实例对象上的方法就可以实现TypedArray哪些各种视图的功能。\r\n</p>\r\n<p>\r\n    读数据的方法包括：getInt8、getUint8、getInt16、getUint16、getInt32、getUint32、getFloat32、getFloat64。\r\n</p>\r\n<p>\r\n    写数据的方法包括：setInt8、setUint8、setInt16、setUint16、setInt32、setUint32、setFloat32、setFloat64。\r\n</p>\r\n<p>\r\n    同样的，拿setInt16/getInt16和setInt8/getInt8举例子：\r\n</p>\r\n<pre ui-code>\r\nvar arrayBuffer = new ArrayBuffer(6);//申请6个字节的内存空间\r\n\r\nvar dataView = new DataView(arrayBuffer);// 建立读取对象\r\n\r\ndataView.setInt8(0,1);\r\ndataView.setInt16(2,2);\r\ndataView.setInt16(4,3);\r\n\r\nconsole.log(dataView.getInt8(0)); // 1\r\nconsole.log(dataView.getInt16(2)); // 2\r\nconsole.log(dataView.getInt16(4)); // 3\r\n</pre>\r\n<p class='warn'>\r\n    上面的所有方法最后都可以带一个布尔值，表示是大端(false)还是小端（true）。\r\n</p>\r\n<p>\r\n    当然，你也可以试着运行下面这条语句：\r\n</p>\r\n<pre ui-code>\r\n    console.log(dataView.getInt16(0)); // 256\r\n</pre>\r\n<p>\r\n    为什么是256？因为你在第一个字节写入了1，第二个没有写，也就是0，而getInt16读取的是16位，也就是读取的二进制应该是：0000000100000000(2)=2<sup>8</sup>(10)=256。\r\n</p>\r\n"
  
    return __etcpack__scope_bundle__;
}
