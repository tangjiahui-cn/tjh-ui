import {getCurrentInstance} from "vue"

export default function useThis() {
  return getCurrentInstance().proxy
}
