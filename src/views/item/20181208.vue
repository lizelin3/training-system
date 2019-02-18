<template>
    <div>
       <h1>1. 引言</h1>
	  <p>
		人们使用字处理程序编写文档，使用Web浏览器在互联网中探索，使用
		电子邮件程序发送电子邮件。这些字处理程序，Web浏览器以及电子邮件
		程序都是在计算机上运行的软件实例。软件是用程序设计语言开发出来的。
		程序设计语言有很多种——那么为什么要选择Java这种程序设计语言呢？
		答案就是Java能够让用户开发和部署可用于Internet上的服务器，台式
		电脑和小型手持设备的应用程序。互联网将会对计算机技术的未来产生
		深远的影响，而Java肯定会在未来计算技术中占很大的比重。所以说，
		Java是一种真正的互联网程序设计语言。<br/>
		我们即将开始一段激动人心的的旅行，学习一门功能强大的程序设计语言。
	  </p>
      <h1>2. 什么是计算机</h1>
	  <p>
		计算机是存储和处理数据的电子设备。它包括硬件(hardware)和软件(software)两部分。一般来说，硬件包括计算
		机中可以看得见的物理部分，而软件提供看不见的指令，这些指令控制硬件并且
		要求硬件完成特定的任务。编写指令让计算机来完成的过程就称为计算机程序设计。<br/>
		<img src="../../assets/images/20181208/1.png" class="img-fluid" />
	  </p>
	  <ul class="list-group">
		<li class="list-group-item">中央处理器(CPU)</li>
		<li class="list-group-item">内存(主存)</li>
		<li class="list-group-item">存储设备(例如，磁盘，光盘，磁带)</li>
		<li class="list-group-item">输入和输出设备(例如，显示器，键盘，鼠标，打印机)</li>
		<li class="list-group-item">通信设备(例如，调制解调器网络接口卡(NIC,简称网卡))</li>
	  </ul>
	  <p>这些组件通过一个称为总线(bus)的子系统连接起来，总线负责在这些组件之间传输数据和电信号。</p>
	  <h2>中央处理器</h2>
	  <p>
		中央处理器(Central Processing Unit,CPU)是计算机的大脑。它从内存中
		获取指令然后执行这些指令。CPU通常由两部分组成：控制单元(control unit)
		和算术/逻辑单元(arithmetic/logic unit)。控制单元用于控制和协调除CPU之外
		其他组件的动作。算术/逻辑单元用于完成数值运算(加法，减法，乘法，除法)和逻辑运算(比较)。
	  </p>
	  <h3>内存</h3>
	  <p>最小单位bit，一个字符占8bit，1TB=1024GB,1GB=1024MB,1MB=1024KB,1KB=1024B</p>
	  <h1>3. Java 执行过程</h1>
	  <img src="../../assets/images/20181208/2.png" class="img-fluid" />
	  <h1>4. (GUI)在消息对话框中显示文本</h1>
	  <img src="../../assets/images/20181208/3.png" class="img-fluid" />
	  <p>另一种使用方式</p>
	  <img src="../../assets/images/20181208/4.png" class="img-fluid" />
	  <img src="../../assets/images/20181208/5.png" class="img-fluid" />
	  <h1>5. Java import语句</h1>
	  <p>import 语句有两种类型：明确导入(specific import) 和通配符导入(wildcard import)。
		明确导入是指将某个单独的类放在import语句中。例如:<code>import javax.swing.JOptionPane;</code>
		<br/>通配符导入是指导入一个包中所有的类。例如:<code>import javax.swing.*;</code>
		<br/>
		除非要在程序中使用某个类，否则关于被导入包中的这些类的信息在编译时或
		运行时是不被读入的。导入语句只是告诉编译器在什么地方能找到这些类。
		声明明确导入和声明通配符导入在性能上是没有什么差别的。
	  </p>
	  <p>
		注意:<code>System.out.println("Hello world!");</code>中用到的System类。这个System
		类并没有被导入，那是因为它在java.lang包内。java.lang包内所有类在每个Java程序
		中都被隐式导入。
	  </p>
	  <p>补充:静态导入<code>import static ...</code></p>
	  <h1>6. Scanner 屏幕输入</h1>
	  <img src="../../assets/images/20181208/6.png" class="img-fluid" />
	  <p>
		可以输入三个用空格符分隔开的数值，然后按回车键，或者每输入一个数值后按一次回车键。
	  </p>
	  <h1>7. 标识符</h1>
	  <img src="../../assets/images/20181208/7.png" class="img-fluid" />
	  <p>注意:由于Java区分大小写的，所以area,Area和AREA是完全不同的标识符。</p>
	  <p>
		提示:标识符是为了命名变量，常量，方法，类和包。描述性的标识符可提高程序可读性。<br/>
		提示:不要用字符$命名标识符。习惯上，字符$只用在机器自动产生的的源代码中。
	  </p>
	  <h1>8. 自增自减运算符</h1>
	  <img src="../../assets/images/20181208/8.png" class="img-fluid" />
	  <img src="../../assets/images/20181208/9.png" class="img-fluid" />
	  <img src="../../assets/images/20181208/10.png" class="img-fluid" />
	  <h1>9. (GUI)从输入对话框获取输入</h1>
	  <img src="../../assets/images/20181208/11.png" class="img-fluid" />
	  <img src="../../assets/images/20181208/12.png" class="img-fluid" />
	  <p>
		将一个字符转为一个int型值<code>int intValue = Integer.parseInt(intString);</code><br/>
		将一个字符转为一个double型值
		<code>double doubleValue = Double.parseDouble(doubleString);</code>
	  </p>
	  <h1>9. 选择语句常见错误</h1>
	  <img src="../../assets/images/20181208/13.png" class="img-fluid" />
	  <img src="../../assets/images/20181208/14.png" class="img-fluid" />
	  <img src="../../assets/images/20181208/15.png" class="img-fluid" />
	  <img src="../../assets/images/20181208/16.png" class="img-fluid" />
	  <h1>10. 格式化控制台输出</h1>
	  <p>如果希望显示浮点值小数点后两位，可以这样:<br/>
		<code>double x = 2.0/3;</code><br/>
		<code>System.out.println("x is " + (int)(x * 100)/100.0);</code><br/>
		更好的方式，使用printf<br/>
		<code>System.out.printf(format,item1,item2,...);</code>
	  </p>
	  <img src="../../assets/images/20181208/17.png" class="img-fluid" />
	  <img src="../../assets/images/20181208/18.png" class="img-fluid" />
	  <p>提示:保留后两位: %.2f</p>
	  <h1>11. (GUI)确认对话框</h1>
	  <img src="../../assets/images/20181208/19.png" class="img-fluid" />
	  <p>练习使用GUI改造收银台程序</p>
	  <h1>12. 输入输出重定向</h1>
	  源码:<br/>
	  <img src="../../assets/images/20181208/20.png" class="img-fluid" />
	  <img src="../../assets/images/20181208/21.png" class="img-fluid" />
	  输入重定向:<code>java SentineValue &lt; input.txt</code><br/>
	  <img src="../../assets/images/20181208/22.png" class="img-fluid" /><br/>
	  输出重定向:<code>java ClassName > output.txt</code><br/>
	  综合使用:<code>java SentineValue &lt; input.txt > output.txt</code>
	  <h1>13. (GUI)使用确认对话框控制循环</h1>
	  <img src="../../assets/images/20181208/23.png" class="img-fluid" />
	  <h1>14. 循环常见错误</h1>
	  <img src="../../assets/images/20181208/24.png" class="img-fluid" />
	  <img src="../../assets/images/20181208/25.png" class="img-fluid" />
	  <img src="../../assets/images/20181208/26.png" class="img-fluid" />
	  <h1>15. for-each循环</h1>
	  <img src="../../assets/images/20181208/27.png" class="img-fluid" />
	  <h1>16. 可变长数组</h1>
	  <p><code>public void static printMax(double... num){}</code></p>
    </div>
</template>
