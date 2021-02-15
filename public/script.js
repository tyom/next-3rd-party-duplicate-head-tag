(() => {
  const style = document.createElement("style")
  style.appendChild(document.createTextNode('body { background: #aaa }'));
  const [head] = document.getElementsByTagName('head')
  head.appendChild(style);
})()
