import Message from "./message"

Message.install = function (app) {
  app.config.globalProperties.$message = Message
}

export default Message
