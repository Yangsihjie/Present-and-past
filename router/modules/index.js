// // router/modules/index.js
// const files = require.context('.', false, /\.js$/)
// const modules = []

// console.log(files)

// files.keys().forEach(key => {
//   if (key === './index.js') return
//   const item = files(key).default
//   modules.push(...item)
// })

// export default modules