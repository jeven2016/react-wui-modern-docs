### TODO List
* refactor existing code to allow applying customized class, 
refer to the implementation of NavBar    
 
 * dropdown, popover, handler for onfocus , onblur event :  open/close the widget
 * default selected/active for dropdown,menu,popover
 * by default , all modals will be initially inserted => should be lazily loaded 
 * refactor the toggle css code to use flexbox 
 * add {...otherProps} to all components
 * 多个card 一起排列时,设置了padding-left,窗口变小出现换行时左侧不对齐的问题
 *　动画统一增强
 * Drawer没有黑色背景时的点击自动关闭如何实现
 * 参数\变量\方法名称统一风格
 * loader设置style: margin-top失败
 * Modal 打开在关闭时,IE 下overflow无法滚动
 * 各类颜色需要统一
 * 动画版本１.2太低了－－》　升级
 * append class should be deprecated
 * toggle设置为turnOn 时无效, turnOn后界面第一次\第二次点击时,onChange中的状态值出错
 * input/button, large/small/medium需要统一添加
 * useCallback to refactor
 * popover 覆盖了子节点各类监听事件＝》可在dropdown处测试
 *  ReactDOM.render cannot work perfectly with CSSTransition
 * useEvent 反复注册问题,(解决，只关联name的变更)
 * useEvent 没有加载的组件也会触发，　popover在dropdown 界面触发。。
 
 * refer to: https://www.w3schools.com/howto/howto_css_image_overlay.asp
 * react suspense -> loading test
 
 
 *animation -> react-spring  !!
 
 Reference:
 react-beautiful-dnd-zh
 react-dnd
 
 ** Select 里面调整宽度的逻辑需要监听dropdown的onOpen事件，不需要每次状态变化就更新一次宽度
 * PopupControlloer中开放onFocus,onBlur事件，由Select负责触发时，focus Input. ==> Select 中onFocus, showMenu
 * onOpen, onClose 不准确
 
* dropdown 的边框阴影都加在menu上，需要跟select保持一致，加在外层wrapper上
