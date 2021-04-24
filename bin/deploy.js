#!/usr/bin/env node

const colors = require("colors")
const shell = require("shelljs")
const Rsync = require("rsync")
const path = require("path")
const ora = require("ora")
const spinner = ora("Loading unicorns").start()
const yargs = require("yargs/yargs")
const { hideBin } = require("yargs/helpers")
const argv = yargs(hideBin(process.argv)).argv
const chokidar = require("chokidar")

const watcher = chokidar.watch(process.cwd())

watcher.on("change", function(filePath) {
  const expectPath = path.resolve(__dirname, "expect.exp")
  console.error(filePath) // 修改的文件
  // 模拟shell输入密码
  shell.exec(
    `expect ${expectPath} ${filePath} root@106.12.49.47:/home/doc password`
  )
})

// const hostsMap = {
//   prod: "baiduyun",
// }

// function sendMessage(message) {
//   shell.exec(`
//     curl 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=e6ad01ff-7207-4183-abfa-4c89fa802177' \
//     -H 'Content-Type: application/json' \
//     -d '
//     {
//       "msgtype": "text",
//       "text": {
//           "content": "${message}"
//       }
//     }'
//   `)
// }

// if (!argv.th) {
//   console.log()
//   console.log(colors.yellow("测试主机不存在"))
// }

// // 通知构建
// sendMessage("开始构建")

// // 安装依赖
// console.log()
// console.log(colors.green("安装依赖"))
// if (shell.exec("npm install").code !== 0) {
//   shell.echo("Error: npm install failed")
//   shell.exit(1)
// }

// // 测试
// console.log()
// console.log(colors.green("开始测试"))
// if (shell.exec("npm run test").code !== 0) {
//   shell.echo("Error: npm run test failed")
//   shell.exit(1)
// }

// // 构建
// console.log()
// console.log(colors.green("开始构建"))
// if (shell.exec("npm run build").code !== 0) {
//   shell.echo("Error: npm run build failed")
//   shell.exit(1)
// }

// // 部署
// console.log()
// console.log(colors.green("开始部署"))
// const rsync = Rsync.build({
//   source: path.resolve(__dirname, "../.vuepress/dist/"),
//   destination: `${hostsMap["prod"]}:/home/doc/`,
//   flags: "avz",
//   shell: "ssh",
// })

// rsync.execute(function(err, code, cmd) {
//   console.error(err, code, cmd)
// })

// // 通知
// sendMessage("部署成功")
// spinner.stop()
