
/*************************** [bundle] ****************************/
// Original file:./src/App/pages/Vue3/index.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['29']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var _dec, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

__etcpack__scope_args__=window.__etcpack__getBundle('1');
var Component=__etcpack__scope_args__.Component;

__etcpack__scope_args__=window.__etcpack__getBundle('53');
var template =__etcpack__scope_args__.default;


var _class = (_dec = Component({
  selector: "Vue3",
  template: template,
  styles: []
}), _dec(_class2 = function _class2() {
  _classCallCheck(this, _class2);
}) || _class2);

__etcpack__scope_bundle__.default=_class;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App/pages/Vue3/index.html
/*****************************************************************/
window.__etcpack__bundleSrc__['53']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<h2 id='fixed-top'>\n    Vue3\n</h2>\n<h3 id='fixed-templte'>\n    模板\n</h3>\n<h4 id='fixed-Teleport'>\n    Teleport\n</h4>\n<p>\n    拿下面的代码举例子：\n</p>\n<pre ui-code=\"html\">\n<div>\n    <ui-dialog></ui-dialog>\n</div>\n</pre>\n<p>\n    因为是弹框，你可能希望弹框组件直接挂载在body上，那么，你只需要：\n</p>\n<pre ui-code=\"html\">\n<div>\n    <teleport to=\"body\">\n        <ui-dialog></ui-dialog>\n    </teleport>\n</div>\n</pre>\n<p class=\"warn\">\n    如果 &lt;teleport&gt; 包含 Vue 组件，则它仍将是 &lt;teleport&gt; 父组件的逻辑子组件。\n</p>\n"
  
    return __etcpack__scope_bundle__;
}
