(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{492:function(t,s,a){"use strict";a.r(s);var n=a(29),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-基础绘图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-基础绘图"}},[t._v("#")]),t._v(" 1 基础绘图")]),t._v(" "),a("h3",{attrs:{id:"_1-1-曲线图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-曲线图"}},[t._v("#")]),t._v(" 1.1 曲线图")]),t._v(" "),a("p",[t._v("原理：描点呈现，只要输入x、y的两个list就可以了")]),t._v(" "),a("p",[a("code",[t._v("plt.plot(x,y)")]),t._v("呈现x、y的映射")]),t._v(" "),a("h3",{attrs:{id:"_1-2-直方图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-直方图"}},[t._v("#")]),t._v(" 1.2 直方图")]),t._v(" "),a("p",[t._v("用hist绘制直方图，需要串入一个数组和分类数量参数bins")]),t._v(" "),a("p",[a("code",[t._v("plt.hist(x,bins= 30) #将x数据分成30组")])]),t._v(" "),a("h3",{attrs:{id:"_1-3-散点图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-散点图"}},[t._v("#")]),t._v(" 1.3 散点图")]),t._v(" "),a("p",[t._v("scatter函数传入x、y数组")]),t._v(" "),a("p",[a("code",[t._v("plt.scatter(x,y)")])]),t._v(" "),a("h3",{attrs:{id:"_1-4-饼状图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-饼状图"}},[t._v("#")]),t._v(" 1.4 饼状图")]),t._v(" "),a("p",[t._v("将一个list传入pie函数，plot会根据list中各数字占list数据和的比例绘制饼状图")]),t._v(" "),a("p",[a("code",[t._v("plt.pie(a)")])]),t._v(" "),a("h2",{attrs:{id:"_2-绘图标注"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-绘图标注"}},[t._v("#")]),t._v(" 2 绘图标注")]),t._v(" "),a("h3",{attrs:{id:"_2-1-颜色"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-颜色"}},[t._v("#")]),t._v(" 2.1 颜色")]),t._v(" "),a("p",[a("code",[t._v("plt.plot(x,y,color = 'green')")]),t._v("加入color参数即可设定绘图颜色")]),t._v(" "),a("p",[t._v("颜色的表示有以下几种")]),t._v(" "),a("ol",[a("li",[t._v("常见颜色缩写：绿色（g）、红色（r）、蓝色（b）、黄色（y）")]),t._v(" "),a("li",[t._v("查阅"),a("a",{attrs:{href:"https://www.cnblogs.com/I-AM-DUMBASS/p/13229898.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("相关文档"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("16进制RGB表示颜色")])]),t._v(" "),a("h3",{attrs:{id:"_2-2-标记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-标记"}},[t._v("#")]),t._v(" 2.2 标记")]),t._v(" "),a("p",[t._v("给数据位置特定图形")]),t._v(" "),a("p",[a("code",[t._v("plt.plot(x,y,marker='o')")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://stackoverflow.com/questions/8409095/set-markers-for-individual-points-on-a-line-in-matplotlib",target:"_blank",rel:"noopener noreferrer"}},[t._v("具体标记符号见"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"_2-3-线条"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-线条"}},[t._v("#")]),t._v(" 2.3 线条")]),t._v(" "),a("p",[a("code",[t._v("plt.plot(x,y,linestyle='--')")]),t._v("虚线")]),t._v(" "),a("h3",{attrs:{id:"_2-4-上述三种合一"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-上述三种合一"}},[t._v("#")]),t._v(" 2.4 上述三种合一")]),t._v(" "),a("p",[a("code",[t._v("plt.plot(x,y,'og--')")]),t._v("o型标记、绿色、虚线")]),t._v(" "),a("h3",{attrs:{id:"_2-5-标题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-标题"}},[t._v("#")]),t._v(" 2.5 标题")]),t._v(" "),a("h4",{attrs:{id:"_2-5-1-基础设置-plt-title-标题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-1-基础设置-plt-title-标题"}},[t._v("#")]),t._v(" 2.5.1 基础设置："),a("code",[t._v("plt.title('标题')")])]),t._v(" "),a("h4",{attrs:{id:"_2-5-2-子图设置标题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-2-子图设置标题"}},[t._v("#")]),t._v(" 2.5.2 子图设置标题")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("fig "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" plt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("figure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nax1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add_subplot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nax2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add_subplot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nax1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("set_title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'line'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nax2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("set_title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'logistic'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nplt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("subplots_adjust"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hspace"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#调节子图之间的间隙")]),t._v("\nax1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rang"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nax2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nplt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("show"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("h4",{attrs:{id:"_2-5-3-标题参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-3-标题参数"}},[t._v("#")]),t._v(" 2.5.3 标题参数")]),t._v(" "),a("ol",[a("li",[t._v("fontsize字体大小\n"),a("ul",[a("li",[t._v("数字代表字体大小，默认为12")]),t._v(" "),a("li",[t._v("字符串确定字体大小：'xx-small', 'x-small', 'small', 'medium', 'large','x-large', 'xx-large'")])])]),t._v(" "),a("li",[t._v("fontweight字体粗细：常用的选项有：['light', 'normal', 'medium', 'semibold', 'bold', 'heavy', 'black'] 。bold就是加粗，semibold是半加粗，heavy是重加粗，black就是全黑了")]),t._v(" "),a("li",[t._v("verticalalignment竖直对齐方式：'center' , 'top' , 'bottom' ,'baseline'")]),t._v(" "),a("li",[t._v("horizontalalignment水平对齐方式：[left,right,center]")]),t._v(" "),a("li",[t._v("rotation旋转角度：输入数字代表旋转角度")]),t._v(" "),a("li",[t._v("alpha透明度，参数在0到1之间")]),t._v(" "),a("li",[t._v("backgroundcolor背景颜色")]),t._v(" "),a("li",[t._v("bbox背景框：facecolor背景颜色，edgecolor线条颜色，boxstyle方框外形，edgewidth线条粗细")])]),t._v(" "),a("h3",{attrs:{id:"_2-6-轴名称"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-轴名称"}},[t._v("#")]),t._v(" 2.6 轴名称")]),t._v(" "),a("p",[a("code",[t._v("plt.xlabel('x轴名称')")])]),t._v(" "),a("p",[t._v("多个子图与标题一样")]),t._v(" "),a("h3",{attrs:{id:"_2-7-标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-标签"}},[t._v("#")]),t._v(" 2.7 标签")]),t._v(" "),a("p",[t._v("调用legend方法，在绘图后加上laber参数")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("plt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("laber "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'linear'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nplt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("laber "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quadratic'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nplt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("legend"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nplt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("show"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("legend参数：常用的是loc，标签位置。")]),t._v(" "),a("p",[t._v("上中下为upper、center、lower；左中右为left、center、right，两两组合得到9中方位，再还有一种best，自适配最佳放置位置")]),t._v(" "),a("h2",{attrs:{id:"_3-图表设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-图表设置"}},[t._v("#")]),t._v(" 3 图表设置")]),t._v(" "),a("h3",{attrs:{id:"_3-1-xlim、ylim"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-xlim、ylim"}},[t._v("#")]),t._v(" 3.1 xlim、ylim")]),t._v(" "),a("p",[t._v("设置坐标轴范围"),a("code",[t._v("plt.xlim(-5,5)")]),t._v("，不常用")]),t._v(" "),a("h3",{attrs:{id:"_3-2-xticks、ytixks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-xticks、ytixks"}},[t._v("#")]),t._v(" 3.2 xticks、ytixks")]),t._v(" "),a("p",[t._v("既可以设置范围也可以设置每个刻度之间的间距，还可以设置坐标轴刻度及旋转角度")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#x从-10到10每隔5画一个点，标签为labers且旋转30°")]),t._v("\nplt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("label"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quadratic'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nplt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xlaber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x laber'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nplt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ylaber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'y laber'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nlabers "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10 , 5 , 0 , 5 , 10'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nplt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xicks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("laber"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("labers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("rotation"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#range前闭后开")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("在月报表等刻度为汉字的时候很有用")])])}),[],!1,null,null,null);s.default=e.exports}}]);