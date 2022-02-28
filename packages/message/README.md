## Message 消息

#### 1、Api

| 属性 | 描述 | 类型 | 默认值 | 可选项 | 
|  ----  |  ----  | ----  | ----  | ----  |
| this.$message.success | 成功消息 | Function | 无 | 无
| this.$message.error | 失败消息 | Function | 无 | 无
| this.$message.info | 普通消息 | Function | 无 | 无
| this.$message.warning | 警告消息 | Function | 无 | 无
| this.$message.warn | 警告消息 | Function | 无 | 无
| this.$message.loading | 加载中的消息 | Function | 无 | 无

```js
// 使用示例：
// (说明：打印"成功获取消息",3秒后关闭，并控制台打印"close hook.")
this.$message.success("成功获取信息", 3 * 1000, function () {
  console.log("close hook.")
})
```
