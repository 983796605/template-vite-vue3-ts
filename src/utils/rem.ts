/*动态设置html标签的字体大小，将设计图中的尺寸换算成rem，移动端页面元素根据手机尺寸不同而等比缩放*/
export default (function (doc: any, win: any) {
    let _root = doc.documentElement,
        resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize';
    function resize() {
        let clientWidth = _root.clientWidth,
            fontSize = 100;
        if (!clientWidth) return;
        if (clientWidth < 640) {
            fontSize = fontSize * (clientWidth / 375);
        }
        _root.style.fontSize = fontSize + 'px';
    }

    function addHandler(element: any, type: any, handler: any) { //添加事件
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);  //使用DOM2级方法添加事件
        } else if (element.attachEvent) {                    //使用IE方法添加事件
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;          //使用DOM0级方法添加事件
        }
    }

    addHandler(win, resizeEvent, resize);
    addHandler(doc, 'DOMContentLoaded', resize);
})(document, window)