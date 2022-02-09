import Button from "../button.vue"
import {mount} from "@vue/test-utils"

test("test button", () => {
  const wrapper = mount(Button, {
    props: {
      value: "button"
    }
  })
  expect(wrapper.text()).toContain("button")
})
