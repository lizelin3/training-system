<template>
  <div>
    <h3>环境变量</h3>
	  <p>
		环境变量（environment variables）一般是指在操作系统中用来指定操作系统运行环境的一些参数，如：临时文件夹位置和系统文件夹位置等。
	  </p>
	  <p>
		环境变量是在操作系统中一个具有特定名字的对象，它包含了一个或者多个应用程序所将使用到的信息。例如Windows和DOS操作系统中的path环境变量，当要求系统运行一个程序而没有告诉它程序所在的完整路径时，系统除了在当前目录下面寻找此程序外，还应到path中指定的路径去找。用户通过设置环境变量，来更好的运行进程。
	  </p>
	  <h3>32位和64位区别</h3>
	  <p>
		第一：支持的内存不同<br/>
		32位的操作系统，最高支持的2G的内存，2个G以上的内存就浪费了，二64位的系统必须是4G以上的内存才能完全运行。
	  </p>
	  <p>
		第二：支持的处理器不同<br/>
		64位的操作系统支持基于64位的处理器，而32位的系统却不能完全支持64位的处理器。
	  </p>
	  <p>
		第三：用户定位不同<br/>
		32位的系统一般都是追求简洁，实用的用户安装，64位的系统是追求性能，高配的用户安装的系统。
	  </p>
	  <p>
		第四：系统性能不同
		64位的系统性能是比32位的系统性能要好的，好多大型软件必须是64位的系统才能支持运行。
	  </p>
	  <h3>常用DOS命令</h3>
	  <p>WIN+R 输入cmd进行DOS命令行</p>
	  <p>
		cd :    进入指定目录<br/>
		cd .. :  退回到上一级目录<br/>
		dir :    列出当前目录下的文件以及文件夹<br/>
		md :   创建目录<br/>
		exit :   退出 dos 命令行<br/>
	  </p>
	  <h3>Java技术体系平台</h3>
	  <p><strong>Java SE(Java Standard Edition)标准版</strong><br/>
		支持面向桌面级应用（如Windows下的应用程序）的Java平台，提供了完整的Java核心API，此版本以前称为J2SE
	  </p>
	  <p><strong>Java EE(Java Enterprise Edition)企业版</strong><br/>
		是为开发企业环境下的应用程序提供的一套解决方案。该技术体系中包含的技术如:Servlet 、Jsp等，主要针对于Web应用程序开发。版本以前称为J2EE
	  </p>
	  <p><strong>Java ME(Java Micro Edition)小型版</strong><br/>
		支持Java程序运行在移动终端（手机、PDA）上的平台，对Java API有所精简，并加入了针对移动终端的支持，此版本以前称为J2ME
	  </p>
	  <h3>Java虚拟机</h3>
	  <p>
		JVM是一个虚拟的计算机，具有指令集并使用不同的存储区域。负责执行指令，管理数据、内存、寄存器。
	  </p>
	  <h3>JDK</h3>
	  <p>
		JDK是提供给Java开发人员使用的，其中包含了java的开发工具，也包括了JRE。所以安装了JDK，就不用在单独安装JRE了。
	  </p>
	  <h3>JRE</h3>
	  <p>
		包括Java虚拟机(JVM Java Virtual Machine)和Java程序所需的核心类库等，如果想要运行一个开发好的Java程序，计算机中只需要安装JRE即可。
	  </p>
	  <h3>Hello world</h3>
	  <h5>1.新建Test.java文件,输入内容:</h5>
	  <pre><code>
		class Test {
			public static void main(String[] args){
				System.out.println("Hello world!");
			}
		}
	  </code></pre>
	  <h5>2.打开DOS命令行:<kbd>javac Test.java</kbd> 编译出class文件</h5>
	  <h5>3.输入<kbd>java Test</kbd>,运行class文件，输出结果。</h5>
	  <p>注意：java语言区分大小写，括号成对。</p>
	  <h3>Java 注释</h3>
	  <p>
		单行注释： <code> // </code><br/>
		多行注释： <code>/**/</code><br/>
		文档注释： <pre>
/**
* @author  指定java程序的作者
* @version  指定源文件的版本
* @param   方法的参数说明信息
*/

注释内容可以被JDK提供的工具 javadoc 所解析，生成一套以网页文件形式体现的该程序的说明文档。
				    </pre>
					<kbd>
						javadoc -d mydoc -author -version HelloWorld.java
					</kbd><br/>
					注释是一个程序员必须要具有的良好编程习惯。将自己的思想通过注释先整理出来，再用代码去体现。
	  </p>
	  <p>
		对于单行和多行注释，被注释的文字，不会被JVM（java虚拟机）解释执行。<br/>
		多行注释里面不允许有多行注释嵌套。
	  </p>
	  <h3>Java API</h3>
	  <p>
		API （Application Programming Interface,应用程序编程接口）是 Java 提供的基本编程接口。
		Java语言提供了大量的基础类，因此 Oracle 也为这些基础类提供了相应的API文档，用于告诉开发者如何使用这些类，以及这些类里包含的方法。
	  </p>
	  <h3>补充</h3>
	  <p>
		开发工具:<br/>
		EditPlus   UltraEdit  TextPad  Jbuilder  NetBean
	  </p>
	  <p>
		程序员编写的Java源文件(.java)首先要经过编译，生成所谓的字节码文件(.class);
		Java程序的运行需要JVM的支持。JVM是一个软件，安装在操作系统中，为字节码文件提供运行环境。
	  </p>
  </div>
</template>
