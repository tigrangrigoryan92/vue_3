let onMouseOver = e => {
  e.target.style.backgroundColor = "green"
  e.target.style.cursor = "pointer"
}
let onMouseOut = e => {
  e.target.style.backgroundColor = ""
}

export default {
  mounted(el, binding) {
    console.log(el);
    console.log(binding);

    el.style[binding.arg] = binding.value;

    if (binding.modifiers.hover) {
      el.addEventListener("mouseover", onMouseOver);
      el.addEventListener("mouseout", onMouseOut);
    }
  },
  updated(el, binding) {
    el.style[binding.arg] = binding.value
  },
  unmounted() {
  },
}
