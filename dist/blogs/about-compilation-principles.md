# 关于编译原理

编译原理在现阶段已经是一项非常成熟的技术，这也导致每年都有好几款自制语言诞生。不过编译原理的学习却是有几个难点，尤其是对于像我这样非科班的野生程序猿。

第一点，主流几本如《编译原理》（龙书）大部头讲解的并非“编译器构造”，而是“编译器的编译器构造”，这种书讲解的原理是开发 YACC BISON 这种通过 BNF 文法生成编译器代码的理论。这就是为什么开篇各种 FIRST FOLLOW SELECT 集，很难想象你要先懂集合论再开始学编译器开发。随后的下一代的书也沿用这种理论，所以那个时期的书籍也是很难掌握。再后来类似《两周自制脚本语言》《游戏编程高级脚本》《自制编程语言》（作者是日本的，有几本都叫这个名字）此类书籍才开始放弃“编译器的编译器构造原理”的内容，转而只讲述“编译器构造”的内容。这个时候只需要掌握 有穷自动机 自顶向下语法分析 左递归 合并左公因式 几个概念就可以开发简单编译器前端。不至于被一堆理论所困扰。

第二点，是编程语言设计方面的，这种的数据基本没有，在我看过的书里面除了 Ruby 作者的《编程语言的设计与实现》才开始讲解为什么，这个语言要如此设计。大部分的讲解编译器的书，只会说，“我很喜欢 python 所以语法模仿了它。”，“C 是大家都比较熟悉的语言，所以我们就按照 C 的语法做一些删减和调整来开发一个语言。”诸如此类。做一件事需要胸有成竹才能有效率，而大部分时候在开发一个语言的时候，很多人的开始都是对目标语言没有设计的。

第三点，编译器后端的形式比较杂多，可以直接采用 LLVM ASMJIT 这种现成的方案（当然前端也可以用 YACC BISON ANTLR JAVACC 这种）。或者采用自定义的虚拟机，或者翻译成 JVM 或者 .Net 的字节码。直接解释执行 eval 等，甚至如果只是 JSON 或者 XML 的解析，那么生成物可能只是个字典或数据结构实例。后端的多选择导致没有前端那么清晰明了，直接手写 LL(1) 或者 BISON 搞定。如果要自己写机器码生成，还要学习 Intel x86 机器码，COFF PE ELF 文件结构，也是很耗费时间。即使使用 ASMJIT 这种就要学习 Intel x86 汇编（比机器码少了个机器码结构和目标和执行文件文件结构，但也是很多内容），LLVM 则要学 IR 中间表示，JVM .Net 各大虚拟机又要各自的字节码操作指令。如果自制虚拟机还要自己设计字节码，同时基本上还要带个 GC ，垃圾回收算法也是很耗费时间。此时大部分书籍都会直接用 标记-清除 算法直接实现，这种是比较好的，不应该在编译原理阶段涉及太多垃圾回收的内容，此内容不是一本书就能展开完整的。

第四点，基本上随着每年数个 211 985 学校的学生毕业，也就会有他们各自设计的语言诞生，又随着他们毕业留在了硬盘里吃灰。所以这种语言一生生一堆，但是个个都夭折，没有长大的现象也是导致学习资料都仅在很初阶的能用阶段。基本上这些毕业生到了社会上工作就不再做编程语言开发的工作。市场需求很少，只是爱好，非常小众。

总结：就是组合搭配多，所以确定一个开始的路线，先完整走一个流程，之后再把各个阶段的多种选择逐个补上。要好过很多大部头在每个阶段都展开又不能完全展开（每个阶段的内容实在太多）的“如展”状态，直接把新手绕晕要好得多。antlr 的作者写的《Antlr4 权威指南》就把示例做得很好。概览上他写的《编程语言实现模式》也把各种常规模式罗列出来，这样也是便于理解，总揽全局。
