(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{368:function(t,e,a){"use strict";a.r(e);var i=a(6),v=Object(i.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"requestmapping注解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#requestmapping注解"}},[t._v("#")]),t._v(" @RequestMapping注解")]),t._v(" "),e("h2",{attrs:{id:"requestmapping注解的功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#requestmapping注解的功能"}},[t._v("#")]),t._v(" @RequestMapping注解的功能")]),t._v(" "),e("p",[t._v("从注解名称上来看，@RequestMapping注解的作用就是将请求和处理请求的控制器方法关联起来，建立映射关系。")]),t._v(" "),e("p",[t._v("SpringMVC接收到指定的请求，就会来找搭到在映射关系中的对应控制方法来处理这个情况。")]),t._v(" "),e("h2",{attrs:{id:"requestmapping的位置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#requestmapping的位置"}},[t._v("#")]),t._v(" @RequestMapping的位置")]),t._v(" "),e("ul",[e("li",[t._v("标识一个类：设置映射请求的请求路径的初始信息")]),t._v(" "),e("li",[t._v("表示一个方法：设置映射请求的请求路径的具体信息")])]),t._v(" "),e("p",[t._v("下面通过一个RequestMappingController类的例子来说明区别")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("随便创建两个html页面，在其中一个中加上跳转另一个页面的超链接")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Hiyiin/picture/Typora/image-20220519113811772.png",alt:"image-20220519113811772"}})])])]),t._v(" "),e("h5",[t._v("注意")]),t._v(" "),e("p",[t._v("超链接最好用thymeleaf语法")]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[e("p",[t._v("创建一个请求访问index.html的TestController类，如下图")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Hiyiin/picture/Typora/image-20220519113307953.png",alt:"image-20220519113307953"}})])]),t._v(" "),e("li",[e("p",[t._v("之后创建一个请求访问success.html的RequestMappingController类，给它类上和方法上都加上@RequestMapping注解，如下图")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Hiyiin/picture/Typora/image-20220519113610565.png",alt:"image-20220519113610565"}})])]),t._v(" "),e("li",[e("p",[t._v('我们观察index.html可以看到它的超链接格式写法为：th:href="@{初始信息/具体信息}"')]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Hiyiin/picture/Typora/image-20220519114134774.png",alt:"image-20220519114134774"}})])])]),t._v(" "),e("h2",{attrs:{id:"requestmapping的属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#requestmapping的属性"}},[t._v("#")]),t._v(" @RequestMapping的属性")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Hiyiin/picture/Typora/image-20220519114610802.png",alt:"image-20220519114610802"}})]),t._v(" "),e("p",[t._v("通过查看RequestMapping类源码的结构可以看到，它一共有name、value、path、method、params、headers、consumes、produces八个参数，较为常用的五个参数。")]),t._v(" "),e("ul",[e("li",[t._v("path和value作用相同，可以互换，注意value可以是数组，表示同时满足多个请求。")]),t._v(" "),e("li",[t._v("method 通过请求方式(GET或POST等)来匹配请求。")]),t._v(" "),e("li",[t._v("params属性表示通过请求参数，也就是追加在URL上的键值对，来匹配请求。多个请求参数以&隔开。")]),t._v(" "),e("li",[t._v("headers 属性，表示通过请求头信息来匹配请求。")])]),t._v(" "),e("p",[t._v("较为重要的两个是value和method。")]),t._v(" "),e("h3",{attrs:{id:"value属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#value属性"}},[t._v("#")]),t._v(" value属性")]),t._v(" "),e("p",[t._v("value的值可以是数组，表示能够匹配多个请求地址所对应的请求")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Hiyiin/picture/Typora/image-20220519144014614.png",alt:"image-20220519144014614"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Hiyiin/picture/Typora/image-20220519143915933.png",alt:"image-20220519143915933"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Hiyiin/picture/Typora/image-20220519144234189.png",alt:"image-20220519144234189"}})]),t._v(" "),e("p",[t._v("这样一来无论点后面两个哪个标签，都会跳转到success页面。")]),t._v(" "),e("h5",[t._v("注意")]),t._v(" "),e("p",[t._v("RequestMapping注解中的其他属性均可以不设置，value一定要设置。")]),t._v(" "),e("h3",{attrs:{id:"method属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#method属性"}},[t._v("#")]),t._v(" method属性")]),t._v(" "),e("p",[t._v("当给注解配置method属性时，表示除了要满足注解的value属性(value时一定要设置的)，还要满足注解的method属性。")]),t._v(" "),e("p",[t._v("GET方式和POST方式提交请求的区别")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("请求方式")]),t._v(" "),e("th",[t._v("参数存放位置")]),t._v(" "),e("th",[t._v("安全性")]),t._v(" "),e("th",[t._v("速度")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("容量")]),t._v(" "),e("th",[t._v("是否能上传文件")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("GET")]),t._v(" "),e("td",[t._v("拼接在请求地址后面(以问号进行拼接，格式为?name=value&name=value&...")]),t._v(" "),e("td",[t._v("低")]),t._v(" "),e("td",[t._v("快")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("小")]),t._v(" "),e("td",[t._v("否")])]),t._v(" "),e("tr",[e("td",[t._v("POST")]),t._v(" "),e("td",[t._v("存放在请求体中，格式跟GET一致")]),t._v(" "),e("td",[t._v("高")]),t._v(" "),e("td",[t._v("慢")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("大")]),t._v(" "),e("td",[t._v("是")])])])]),t._v(" "),e("p",[t._v("假定不设置method属性就是默认以GET方式匹配请求。")]),t._v(" "),e("p",[t._v("我们通过form表单来测试一下method用法。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Hiyiin/picture/Typora/image-20220519151331998.png",alt:"image-20220519151331998"}})]),t._v(" "),e("p",[t._v("设置一个form表单和一个超链接，不设置method属性，部署后。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Hiyiin/picture/Typora/image-20220519151420012.png",alt:"image-20220519151420012"}})]),t._v(" "),e("p",[t._v("发现无论点击第三个超链接还是点击提交按钮，都能匹配。")]),t._v(" "),e("p",[t._v("说明不设置method的意思就是，无论是POST还是GET请求都能匹配，也就是匹配所有请求。")]),t._v(" "),e("p",[t._v("下面我们加上method=POST")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Hiyiin/picture/Typora/image-20220519151855211.png",alt:"image-20220519151855211"}})]),t._v(" "),e("p",[t._v("由下拉框可以看到它也可以是数组，所以，method也可以同时匹配多种请求方式。")]),t._v(" "),e("p",[t._v("我们只填一个POST，重新部署后，发现，只有提交按钮能够实现跳转。点击超链接则会报405请求方式不允许的错")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Hiyiin/picture/Typora/image-20220519152126230.png",alt:"image-20220519152126230"}})]),t._v(" "),e("p",[t._v("原因是超链接默认使用GET方式实现跳转，而我们把method设置成了POST方式，它就匹配不了GET方式了。")]),t._v(" "),e("h5",[t._v("注意")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("对于处理指定请求方式的的控制器方法，SpringMVC中共提供了@RequestMapping的派生注解")]),t._v(" "),e("p",[t._v("处理GET请求的映射--\x3e@GetMapping")]),t._v(" "),e("p",[t._v("处理POST请求的映射--\x3e@PostMapping")]),t._v(" "),e("p",[t._v("处理PUT请求的映射--\x3e@PutMapping")]),t._v(" "),e("p",[t._v("处理DELETE请求的映射--\x3e@DeleteMapping")])]),t._v(" "),e("li",[e("p",[t._v("请求方式共有7种，常用的有4种")]),t._v(" "),e("ul",[e("li",[t._v("GET(最常用)")]),t._v(" "),e("li",[t._v("POST(最常用)")]),t._v(" "),e("li",[t._v("PUT(有时候会用)")]),t._v(" "),e("li",[t._v("DELETE(有时候会用)")])]),t._v(" "),e("p",[t._v("其他的基本不用。但是浏览器只支持GET和POST，若在form表单提交时，为method设置了其他的请求方式，则按照默认的请求方式GET处理。")]),t._v(" "),e("p",[t._v("若要发送PUT和DELETE请求。则需要通过Spring提供的过滤器HlddenHttpMethodFilter。")])])]),t._v(" "),e("h3",{attrs:{id:"params属性-了解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#params属性-了解"}},[t._v("#")]),t._v(" params属性(了解)")]),t._v(" "),e("p",[t._v("@RequestMapping注解的params属性通过请求的请求参数匹配请求映射。")]),t._v(" "),e("p",[t._v("@RequestMapping注解的params属性是一个字符串类型的数组，可以通过四种表达式设置请求参数和请求映射的匹配关系")]),t._v(" "),e("ul",[e("li",[t._v('"patam":要求请求映射所匹配的请求必须携带param请求参数')]),t._v(" "),e("li",[t._v('"!param":要求请求映射所匹配的请求必须不能带param请求参数')]),t._v(" "),e("li",[t._v('"param=value":要求请求映射所匹配的请求必须携带param请求参数且param=value')]),t._v(" "),e("li",[t._v('"!param=value":要求请求映射所匹配的请求必须携带param请求参数但是param!=value')])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Hiyiin/picture/Typora/image-20220519162801394.png",alt:"image-20220519162801394"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Hiyiin/picture/Typora/image-20220519162727874.png",alt:"image-20220519162727874"}})]),t._v(" "),e("p",[t._v("这里由于加上了username请求参数，所以还是成功了，下面删除该参数。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Hiyiin/picture/Typora/image-20220519162900866.png",alt:"image-20220519162900866"}}),e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Hiyiin/picture/Typora/image-20220519162955726.png",alt:"image-20220519162955726"}}),t._v("可以看到这个时候报了一个请求参数username没有看到的错误，这就是params参数的用法。")]),t._v(" "),e("h2",{attrs:{id:"headers-了解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#headers-了解"}},[t._v("#")]),t._v(" headers(了解)")]),t._v(" "),e("p",[t._v("@RequestMapping注解的headers属性通过请求的请求头信息匹配请求映射。")]),t._v(" "),e("p",[t._v("@RequestMapping注解的headers属性是一个字符串类型的数组，可以通过四种表达式设置请求头信息和请求映射的匹配关系")]),t._v(" "),e("ul",[e("li",[t._v('"header":要求请求映射所匹配的请求必须携带param请求参数')]),t._v(" "),e("li",[t._v('"!header":要求请求映射所匹配的请求必须不能带param请求参数')]),t._v(" "),e("li",[t._v('"header=value":要求请求映射所匹配的请求必须携带param请求参数且param=value')]),t._v(" "),e("li",[t._v('"!header=value":要求请求映射所匹配的请求必须携带param请求参数但是header!=value')])]),t._v(" "),e("p",[t._v("用法也跟params参数一模一样，就不敲代码验证了。")]),t._v(" "),e("p",[t._v("请求头信息是F12后点击network")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Hiyiin/picture/Typora/image-20220519171053658.png",alt:"image-20220519171053658"}})]),t._v(" "),e("h2",{attrs:{id:"拓展-测试form表单能否提交put和delete方式的请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#拓展-测试form表单能否提交put和delete方式的请求"}},[t._v("#")]),t._v(" 拓展：测试form表单能否提交PUT和DELETE方式的请求")]),t._v(" "),e("p",[t._v("写一个在RequestMappingController中写一个测试put请求的方法，然后在主页中写一个form表单，method设置为put。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Hiyiin/picture/Typora/image-20220519155404806.png",alt:"image-20220519155046080"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Hiyiin/picture/Typora/image-20220519155559137.png",alt:"image-20220519155559137"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Hiyiin/picture/Typora/image-20220519155728837.png",alt:"image-20220519155728837"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Hiyiin/picture/Typora/image-20220519155851611.png",alt:"image-20220519155851611"}})]),t._v(" "),e("p",[t._v("运行后可以发现，form表单是不允许提交put和delete请求的，且可以看到，如果填put请求方式则会以默认的get请求方式提交表单。")]),t._v(" "),e("h2",{attrs:{id:"拓展-value属性支持ant风格的路径"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#拓展-value属性支持ant风格的路径"}},[t._v("#")]),t._v(" 拓展：value属性支持ant风格的路径")]),t._v(" "),e("p",[t._v("ant风格的路径：可以理解为模糊匹配。")]),t._v(" "),e("p",[t._v("?：表示任意的单个字符")]),t._v(" "),e("p",[t._v("*：表示任意的0个或多个字符")]),t._v(" "),e("p",[t._v("**：表示任意的一层或多层目录")]),t._v(" "),e("p",[t._v("注意：在使用**时，只能使用/**/xxx的方式")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Hiyiin/picture/Typora/image-20220519171555864.png",alt:"image-20220519171555864"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Hiyiin/picture/Typora/image-20220519171807621.png",alt:"image-20220519171807621"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Hiyiin/picture/Typora/image-20220519171756387.png",alt:"image-20220519171756387"}})]),t._v(" "),e("p",[t._v("点击该超链接后可以看到跳转成功。")]),t._v(" "),e("h2",{attrs:{id:"springmvc支持路径中的占位符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#springmvc支持路径中的占位符"}},[t._v("#")]),t._v(" SpringMVC支持路径中的占位符")]),t._v(" "),e("p",[t._v("原始方式：/deleteUser?id=1")]),t._v(" "),e("p",[t._v("rest方式：/deleteUser/1")]),t._v(" "),e("p",[t._v("即参数用斜线分割，如果你要传多个参，例如/deleteUser?id=1&name=小明&age=18")]),t._v(" "),e("p",[t._v("则用rest方式为：/deleteUser/1/小明/18")]),t._v(" "),e("p",[t._v("首先创建一个超链接来测试")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Hiyiin/picture/Typora/image-20220519181843778.png",alt:"image-20220519181843778"}})]),t._v(" "),e("p",[t._v("然后编写testPath方法")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Hiyiin/picture/Typora/image-20220519182030208.png",alt:"image-20220519182030208"}})]),t._v(" "),e("h5",[t._v("注意")]),t._v(" "),e("p",[t._v('{id}即表示占位符，表示路径后的第一个斜线是id，假如是/testPath/{id}/{name}则表示第二个斜线后是name，而超链接中第一个斜线后是124，就表示id=124，@PathVariable("id")注解则表示获取id的值，赋值给后面哪个参数名叫id的变量，然后在方法中输出了。')]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Hiyiin/picture/Typora/image-20220519182414401.png",alt:"image-20220519182414401"}})]),t._v(" "),e("p",[t._v("可以看到，方法中输出了这个id，")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Hiyiin/picture/Typora/image-20220519182505585.png",alt:"image-20220519182505585"}})]),t._v(" "),e("p",[t._v("浏览器中url的参数?id=124也变成了路径/124.")])])}),[],!1,null,null,null);e.default=v.exports}}]);