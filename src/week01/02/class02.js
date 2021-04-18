// 每个函数都是一个状态
function statue(input) // 函数参数就是输入
{
    // 在函数中，可以自由地编写代码，处理每个状态的逻辑
    return next; // 返回值作为下一个状态
}

// 以下是调用
while(input) {
    // 获取输入
    state = state(input); // 把状态机的返回值作为下一个状态
}