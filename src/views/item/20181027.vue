<template>
    <div>
        <h3>JAVA变量</h3>
	  <h4>变量的声明:用特定的语法声明一个变量，让运行环境为其分配空间；</h4>
	  <img src="../../assets/images/201810271.png" class="img-fluid" />
	  <p>1.未经声明的变量不能使用</p>
	  <img src="../../assets/images/201810272.png" class="img-fluid" />
	  <p>2.多个变量在一起声明时，需要逗号分隔</p>
	  <img src="../../assets/images/201810273.png" class="img-fluid" />
	  <h4>变量的命名:变量需要有个见名知意的名字，而且要符合Java语言规范；</h4>
	  <p>1.命名需要符合标识符语法要求</p>
	   <img src="../../assets/images/201810274.png" class="img-fluid" />
	   <img src="../../assets/images/201810275.png" class="img-fluid" />
	   <img src="../../assets/images/201810276.png" class="img-fluid" />
	  <p>2.需要见名知意，符合Java规范</p>
	  <img src="../../assets/images/201810277.png" class="img-fluid" />
	  <h4>变量的初始化:变量声明后，要为其赋一个确定的初值后再使用；</h4>
	  <p>1.未经初始化的变量不能使用</p>
	  <img src="../../assets/images/201810278.png" class="img-fluid" />
	  <img src="../../assets/images/201810279.png" class="img-fluid" />
	  <img src="../../assets/images/2018102710.png" class="img-fluid" />
	  <h4>变量的访问:可以对变量中的数据进行存取，操作，但必须和其类型匹配；</h4>
	  <img src="../../assets/images/2018102711.png" class="img-fluid" />
	  <img src="../../assets/images/2018102712.png" class="img-fluid" />
	  <h3>JAVA基本类型</h3>
	  <img src="../../assets/images/2018102713.png" class="img-fluid" />
	  <img src="../../assets/images/2018102714.png" class="img-fluid" />
	  <img src="../../assets/images/2018102715.png" class="img-fluid" />
	  <h4>int类型</h4>
	  <img src="../../assets/images/2018102716.png" class="img-fluid" />
	  <p>
		首先jdk中定义int占4个字节,1个字节8位,4x8=32位,32位就是jvm仅仅给分配32个格子的空间，用以存放数据。

		总所周知计算机中用0和1存放数据。

		那么，32个格子中放满0或1的方法 有2的32次方种：

		所以。这32个格子中。或者说32位的空间能标识10进制的数字：<br/>
		2的32次方种算法，那么依照10进制最大的数就是2的32次方。即4294967296；
		可惜。上面这样的计算的是无符号。即正数。可是java中int有正负之分。所以32个格子中占用一个格子标识正负。
		所以仅仅能用31个格子来标识数值。<br/>
		正数包含0，因此最大值需要减1，为2的31次方-1
	  </p>
	  <img src="../../assets/images/2018102717.png" class="img-fluid" />
	  <img src="../../assets/images/2018102718.png" class="img-fluid" />
	  <img src="../../assets/images/2018102719.png" class="img-fluid" />
	  <img src="../../assets/images/2018102720.png" class="img-fluid" />
	  <h4>long类型</h4>
	  <img src="../../assets/images/2018102721.png" class="img-fluid" />
	  <p>JDK 1.7后增加了新特性:可写为100_00000_000，以增加可读性。</p>
	  <img src="../../assets/images/2018102722.png" class="img-fluid" />
	  <img src="../../assets/images/2018102723.png" class="img-fluid" />
	  <h4>double类型</h4>
	  <img src="../../assets/images/2018102724.png" class="img-fluid" />
	  <img src="../../assets/images/2018102725.png" class="img-fluid" />
	  <img src="../../assets/images/2018102726.png" class="img-fluid" />
	  <p>
		<code>
		BigDecimal a1 = new BigDecimal(Double.toString(1.0));<br/>
        BigDecimal b1 = new BigDecimal(Double.toString(0.9));<br/>

        double c = a1.subtract(b1).doubleValue();
	  </code>
	  </p>
	  <h4>char类型</h4>
	  <img src="../../assets/images/2018102727.png" class="img-fluid" />
	  <img src="../../assets/images/2018102728.png" class="img-fluid" />
	  <img src="../../assets/images/2018102729.png" class="img-fluid" />
	  <h4>boolean类型</h4>
	  <img src="../../assets/images/2018102730.png" class="img-fluid" />
	  <h4>类型间转换</h4>
	  <img src="../../assets/images/2018102731.png" class="img-fluid" />
	  <img src="../../assets/images/2018102732.png" class="img-fluid" />
	  <img src="../../assets/images/2018102733.png" class="img-fluid" />
	  <img src="../../assets/images/2018102734.png" class="img-fluid" />
	  <h4>运算符与表达式</h4>
	  <h5>算术运算</h5>
	  <img src="../../assets/images/2018102735.png" class="img-fluid" />
	  <img src="../../assets/images/2018102736.png" class="img-fluid" />
	  <h5>关系运算</h5>
	  <img src="../../assets/images/2018102737.png" class="img-fluid" />
	  <h5>逻辑运算</h5>
	  <img src="../../assets/images/2018102738.png" class="img-fluid" />
	  <img src="../../assets/images/2018102739.png" class="img-fluid" />
	  <img src="../../assets/images/2018102740.png" class="img-fluid" />
	  <img src="../../assets/images/2018102741.png" class="img-fluid" />
	  <img src="../../assets/images/2018102742.png" class="img-fluid" />
	  <img src="../../assets/images/2018102743.png" class="img-fluid" />
    </div>
</template>
