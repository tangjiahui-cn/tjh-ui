import {getCurrentInstance} from "vue"

/**
 * 在setup使用this的代理
 *
 * At 2022.03.16
 * By TangJiaHui
 */
export default function useThis () {
  return getCurrentInstance().proxy
}
