import {createApp} from "vue"
import message from "./message.vue"

export default new Message()
export function Message () {
  const div = document.createElement("div")
  this.app = createApp(message).mount(div)
  document.body.append(div)
}

Message.prototype.success = success
Message.prototype.error = error
Message.prototype.info = info
Message.prototype.warning = warning
Message.prototype.warn = warn
Message.prototype.loading = loading

function check (that) {
  if (!that.app) {
    const div = document.createElement("div")
    that.app = createApp(message).mount(div)
    document.body.append(div)
  }
}

function success (content, duration, onClose) {
  check(this)
  this.app.push({
    type: "success",
    content,
    duration,
    onClose
  })
}

function error (content, duration, onClose) {
  check(this)
  this.app.push({
    type: "error",
    content,
    duration,
    onClose
  })
}

function info (content, duration, onClose) {
  check(this)
  this.app.push({
    type: "info",
    content,
    duration,
    onClose
  })
}

function warning (content, duration, onClose) {
  check(this)
  this.app.push({
    type: "warning",
    content,
    duration,
    onClose
  })
}

function warn (content, duration, onClose) {
  check(this)
  this.app.push({
    type: "warn",
    content,
    duration,
    onClose
  })
}

function loading (content, duration, onClose) {
  check(this)
  this.app.push({
    type: "loading",
    content,
    duration,
    onClose
  })
}

