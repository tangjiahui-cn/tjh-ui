import rootResolve from "./utils/rootResolve";

export default {
  "~": rootResolve("./packages/_styles"),
  "packages": rootResolve("./packages")
};
