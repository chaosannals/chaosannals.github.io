# 关于 CMake

CMake 的语法是更偏向命令的，定义函数是通过调用 function() 函数开始，调用 endfunction() 函数结束。与其他语言的块不同，这种纯粹就是利用函数来标记切换模式。同样的 if() else() endif() 也是如此，通过调用函数来切换整个脚本环境使得命令的执行发生变化。其他语言的块是语法分析阶段处理的。CMake 的这种方式是脚本运行阶段处理的。可见 CMake 在开发之初没有考虑此类操作。

其他脚本的实现方式，语法阶段，把语句翻译成对应的指令或操作符。

CMake 的实现方式：调用 if(...) 时把结果写入状态（if() 之前一定是 true），之后所有语句都根据这个状态 true 执行，false 不执行。else() 反转状态，endif() 把状态置为 true 这样之后的语句都会执行。这样的好处使得 CMake 的解释器语法简单，完全只需要支持 指令调用 这种语法就可以实现。坏处是所有操作都在解释执行期间做，且这种 endif() 的写法也很吊诡。

```cmake
if(${CMAKE_BUILD_TYPE} STREQUAL "Debug")
message(STATUS "Debug")
else()
message(STATUS "Not Debug")
endif()
```
