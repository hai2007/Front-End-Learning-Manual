
/*************************** [bundle] ****************************/
// Original file:./src/App/pages/CSS/index.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['27']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var _dec, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

__etcpack__scope_args__=window.__etcpack__getBundle('1');
var Component=__etcpack__scope_args__.Component;

__etcpack__scope_args__=window.__etcpack__getBundle('49');
var template =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('50');
var style =__etcpack__scope_args__.default;


var _class = (_dec = Component({
  selector: "CSS",
  template: template,
  styles: [style]
}), _dec(_class2 = function _class2() {
  _classCallCheck(this, _class2);
}) || _class2);

__etcpack__scope_bundle__.default=_class;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App/pages/CSS/index.html
/*****************************************************************/
window.__etcpack__bundleSrc__['49']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<h2 id='fixed-top'>\r\n    CSS\r\n</h2>\r\n<h3 id='fixed-selector'>\r\n    选择器\r\n</h3>\r\n<h4 id='fixed-priority'>\r\n    优先级\r\n</h4>\r\n<p>\r\n    如果有多个选择器选中了同一个标签，并且设置的是同一个属性，如何判断谁可以生效，取决于选择器的\r\n    <span class=\"important\">优先级值</span>。下面，我们来说明如何计算这个值。\r\n</p>\r\n<p>\r\n    不同的选择器我们进行了5个等级的定义：\r\n</p>\r\n<ul>\r\n    <li>\r\n        第一等级：代表内联样式，如style=\"\"，权值为 1000\r\n    </li>\r\n    <li>\r\n        第二等级：代表id选择器，如#content，权值为0100\r\n    </li>\r\n    <li>\r\n        第三等级：代表类，伪类和属性选择器，如.content，权值为0010\r\n    </li>\r\n    <li>\r\n        第四等级：代表标签选择器和伪元素选择器，如div、p，权值为0001\r\n    </li>\r\n    <li>\r\n        第五等级：通用选择器（*），子选择器（>），和相邻同胞选择器（+）等，权值为0000\r\n    </li>\r\n</ul>\r\n<p>\r\n    举个例子：\r\n</p>\r\n<pre ui-code>\r\n    div.page-view.top\r\n</pre>\r\n<p>\r\n    可以看到，一个标签选择器和两个类选择器，也就是：\r\n</p>\r\n<pre ui-code>\r\n    0001 + 0010 + 0010 = 0021\r\n</pre>\r\n<p>\r\n    最后，还要补充一点，如果两个选择器的优先级值一样大，后出现的优先级更高。\r\n</p>\r\n<h3 id='fixed-attribute'>\r\n    常用属性\r\n</h3>\r\n<h4 id='fixed-transform'>\r\n    Transform 转换\r\n</h4>\r\n<p>\r\n    转换就是对一个节点元素进行缩放、旋转、位移等空间上的操作，如何定义一个转换？很简单：\r\n</p>\r\n<pre ui-code='css'>\r\n    transform: none | transform-functions;\r\n</pre>\r\n<p>\r\n    其中\r\n    <span class=\"warn\">transform-functions</span>\r\n    表示转换函数，有很多种，比如：rotate(angle)、scale(x,y)等。不过，在有些时候，需要和别的属性进行配合，下面我们来一一举例说明。\r\n</p>\r\n<pre ui-code='css'>\r\n    transform-origin: x-axis y-axis z-axis;\r\n</pre>\r\n<p>\r\n    设置元素转换的中心点，比如旋转图片，改变图片选择依赖的旋转中心，见下面：\r\n</p>\r\n<div class=\"example frame\">\r\n    <div class=\"example block\">\r\n        <div class=\"example key\">\r\n            <div class=\"info\">旋转的DIV属性：</div>\r\n            <div>transform:rotate(-45deg);</div>\r\n            <div>transform-origin:50% 50%;</div>\r\n        </div>\r\n        <div class=\"example value\">\r\n            <div class=\"_1_one_outer _box_\">\r\n                <div class=\"_1_one_inner _box_\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"example block\">\r\n        <div class=\"example key\">\r\n            <div class=\"info\">旋转的DIV属性：</div>\r\n            <div>transform:rotate(-45deg);</div>\r\n            <div>transform-origin:100% 0%;</div>\r\n        </div>\r\n        <div class=\"example value\">\r\n            <div class=\"_1_two_outer _box_\">\r\n                <div class=\"_1_two_inner _box_\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<pre ui-code='css'>\r\n    transform-style: flat | preserve-3d;\r\n</pre>\r\n<p>\r\n    定义里面转换的元素是在2D平面呈现还是在3D空间呈现，讲的直白些，就是这个元素里面的空间维度是二维还是三维，下面是一个直观的例子：\r\n</p>\r\n<div class=\"example frame\">\r\n    <div class=\"example block\">\r\n        <div class=\"example key\">\r\n            <div class=\"info\">外面div设置：</div>\r\n            <div>transform-style:flat;</div>\r\n            <div>transform: rotateX(120deg); </div>\r\n            <div class=\"info\">内部div设置：</div>\r\n            <div>transform: rotateX(-45deg);</div>\r\n        </div>\r\n        <div class=\"example value\">\r\n            <div class=\"_2_one_outer _box_\">\r\n                <div class=\"_2_one_inner _box_\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"example block\">\r\n        <div class=\"example key\">\r\n            <div class=\"info\">外面div设置：</div>\r\n            <div>transform-style:preserve-3d; </div>\r\n            <div>transform: rotateX(120deg); </div>\r\n            <div class=\"info\">内部div设置：</div>\r\n            <div>transform: rotateX(-45deg);</div>\r\n        </div>\r\n        <div class=\"example value\">\r\n            <div class=\"_2_two_outer _box_\">\r\n                <div class=\"_2_two_inner _box_\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<pre ui-code='css'>\r\n    perspective: number | none;\r\n</pre>\r\n<p>\r\n    属性是定义3D元素距试图的距离，设置以后，其子元素会获得透视效果，需要注意的是该值只对3D转换有效，这也是很容易理解的。此外，还可以通过Transform的属性值的方式设置，二者是有一定区别的，你可以认为，前者是把整个看成一个舞台，后者是每一个都是一个舞台，下面是具体的一个例子：\r\n</p>\r\n<div class=\"example frame\">\r\n    <div class=\"example block\">\r\n        <div class=\"example key\">\r\n            <div class=\"info\">外面div设置：</div>\r\n            <div>perspective:200px; </div>\r\n            <div class=\"info\">内部div设置：</div>\r\n            <div>transform: rotateY(45deg);</div>\r\n        </div>\r\n        <div class=\"example value\">\r\n            <div class=\"_3_one_outer _box_\">\r\n                <div class=\"_3_one_inner _box_ _bg_1_\"></div>\r\n                <div class=\"_3_one_inner _box_ _bg_2_\"></div>\r\n                <div class=\"_3_one_inner _box_ _bg_3_\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"example block\">\r\n        <div class=\"example key\">\r\n            <div class=\"info\">内部div设置：</div>\r\n            <div>transform: perspective(200px) rotateY(45deg);</div>\r\n        </div>\r\n        <div class=\"example value\">\r\n            <div class=\"_3_two_outer _box_\">\r\n                <div class=\"_3_two_inner _box_ _bg_1_\"></div>\r\n                <div class=\"_3_two_inner _box_ _bg_2_\"></div>\r\n                <div class=\"_3_two_inner _box_ _bg_3_\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<pre ui-code='css'>\r\n    perspective-origin: x-axis y-axis;\r\n</pre>\r\n<p>\r\n    必须和perspective一起使用，只对3D转换元素有效，简单的理解就是你的眼睛看的焦点，下面用一个例子来说明：\r\n</p>\r\n<div class=\"example frame\">\r\n    <div class=\"example block\">\r\n        <div class=\"example key\">\r\n            <div class=\"info\">外面div设置：</div>\r\n            <div>perspective:300px;perspective-origin: 50% 50%;</div>\r\n            <div class=\"info\">内部div设置：</div>\r\n            <div>transform:rotateX(45deg);</div>\r\n        </div>\r\n        <div class=\"example value\">\r\n            <div class=\"_4_one_outer _box_\">\r\n                <div class=\"_4_one_inner _box_\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"example block\">\r\n        <div class=\"example key\">\r\n            <div class=\"info\">外面div设置：</div>\r\n            <div>perspective:300px;perspective-origin: 50% 270%;</div>\r\n            <div class=\"info\">内部div设置：</div>\r\n            <div>transform:rotateX(45deg);</div>\r\n        </div>\r\n        <div class=\"example value\">\r\n            <div class=\"_4_two_outer _box_\">\r\n                <div class=\"_4_two_inner _box_\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<p>\r\n    当然，还有更多方法和属性，我们这里就不展开说明了。\r\n</p>\r\n<h4 id='fixed-transitions'>\r\n    Transitions 过渡\r\n</h4>\r\n<p>\r\n    比如，你有一个元素，本来宽是100px，鼠标悬浮的时候现在变成300px，如果你什么都不做，会突然变成300px，在你鼠标悬浮的时候，而使用此属性，可以实现慢慢改变的动画效果：\r\n</p>\r\n<div class=\"example frame\">\r\n    <div class=\"example block\">\r\n        <div class=\"example key\">\r\n            <div class=\"info\">div设置：</div>\r\n            <div>width: 100px;</div>\r\n            <div>height: 100px; </div>\r\n            <div>background-color:#3ce5da;</div>\r\n            <div>transition-property: width background-color;</div>\r\n            <div>transition-duration: 3s;</div>\r\n            <div>transition-timing-function: linear;</div>\r\n            <div class=\"info\">div悬浮设置：</div>\r\n            <div>width: 300px;</div>\r\n            <div>background-color: #7623ca;</div>\r\n        </div>\r\n        <div class=\"example value\">\r\n            <div class=\"_5_one _box_\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<p class='warn'>\r\n    温馨提示：transition-duration 用于设置改变时长，请始终设置，否则时长为 0，就不会产生过渡效果。\r\n</p>\r\n<h4 id='fixed-animation'>\r\n    Animation 动画\r\n</h4>\r\n<p>\r\n    首先，我们需要定义一个动画：\r\n</p>\r\n<pre ui-code='css'>\r\n@keyframes move_right {\r\n    from {\r\n        left: 0px;\r\n    }\r\n\r\n    to {\r\n        left: 200px;\r\n    }\r\n}\r\n</pre>\r\n<p>\r\n    然后，使用即可，就像下面这样：\r\n</p>\r\n<div class=\"example frame\">\r\n    <div class=\"example block\">\r\n        <div class=\"example key\">\r\n            <div class=\"info\">div设置：</div>\r\n            <div>animation: move_right 5s infinite;</div>\r\n        </div>\r\n        <div class=\"example value\">\r\n            <div class=\"_6_one _box_\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App/pages/CSS/index.scss
/*****************************************************************/
window.__etcpack__bundleSrc__['50']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "\n .example.frame:after{\n\nvisibility: hidden;\n\ndisplay: block;\n\nfont-size: 0;\n\ncontent: \" \";\n\nclear: both;\n\nheight: 0;\n\n}\n\n .example.block{\n\nbackground-color: #f2f2f2;\n\nmin-width: 300px;\n\nfloat: left;\n\nmargin: 20px;\n\n}\n\n .example.key{\n\npadding: 16px;\n\nfont-size: 14px;\n\ncolor: #4b4ee8;\n\n}\n\n .example.key .info{\n\ncolor: #977d16;\n\n}\n\n ._box_{\n\nwidth: 100px;\n\nheight: 100px;\n\n}\n\n ._bg_1_{\n\nbackground-color: #62c1d4;\n\n}\n\n ._bg_2_{\n\nbackground-color: #4cf36d;\n\n}\n\n ._bg_3_{\n\nbackground-color: #e745ce;\n\n}\n/*\r\n---------------------1\r\n*/\n ._1_one_outer, ._1_two_outer{\n\nbackground-color: #e8e7a4;\n\nmargin-bottom: 50px;\n\n}\n\n ._1_one_inner, ._1_two_inner{\n\ntransform: rotate(-45deg);\n\nbackground-color: #4dcfd2;\n\n}\n\n ._1_one_inner{\n\ntransform-origin: 50% 50%;\n\n}\n\n ._1_two_inner{\n\ntransform-origin: 100% 0%;\n\n}\n/*\r\n---------------------2\r\n  */\n ._2_one_outer, ._2_two_outer{\n\nbackground-color: #e8e7a4;\n\ntransform: rotateX(120deg);\n\n}\n\n ._2_one_inner, ._2_two_inner{\n\ntransform: rotateX(-45deg);\n\nbackground-color: #4dcfd2;\n\nmargin-left: 30px;\n\n}\n\n ._2_one_outer{\n\ntransform-style: flat;\n\n}\n\n ._2_two_outer{\n\ntransform-style: preserve-3d;\n\n}\n/*\r\n---------------------3\r\n  */\n ._3_one_outer, ._3_two_outer{\n\nbackground-color: #e8e7a4;\n\nwidth: 300px;\n\n}\n\n ._3_one_outer{\n\nperspective: 200px;\n\n}\n\n ._3_one_inner{\n\ntransform: rotateY(45deg);\n\n}\n\n ._3_two_inner{\n\ntransform: perspective(200px) rotateY(45deg);\n\n}\n\n ._3_one_inner, ._3_two_inner{\n\nwidth: 50px;\n\nheight: 50px;\n\ndisplay: inline-block;\n\nmargin-top: 20px;\n\nmargin-left: 26px;\n\n}\n/*\r\n---------------------4\r\n  */\n ._4_one_outer, ._4_two_outer{\n\nbackground-color: #e8e7a4;\n\nwidth: 300px;\n\n}\n\n ._4_one_inner, ._4_two_inner{\n\ntransform: rotateX(45deg);\n\nbackground-color: #4dcfd2;\n\nmargin-left: 100px;\n\n}\n\n ._4_one_outer{\n\nperspective: 300px;\n\nperspective-origin: 50% 50%;\n\n}\n\n ._4_two_outer{\n\nperspective: 300px;\n\nperspective-origin: 50% 270%;\n\n}\n/*\r\n---------------------5\r\n  */\n ._5_one{\n\nwidth: 100px;\n\nheight: 100px;\n\nbackground-color: #3ce5da;\n\ntransition-property: width background-color;\n\ntransition-duration: 3s;\n\ntransition-timing-function: linear;\n\n}\n\n ._5_one:hover{\n\nwidth: 300px;\n\nbackground-color: #7623ca;\n\n}\n/*\r\n---------------------6\r\n  */\n ._6_one{\n\nbackground-color: #3ce5da;\n\nanimation: move_right 5s infinite;\n\nposition: relative;\n\n}\n"
  
    return __etcpack__scope_bundle__;
}