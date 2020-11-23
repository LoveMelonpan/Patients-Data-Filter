/*
 * @Author: One_Random
 * @Date: 2020-11-23 19:18:03
 * @LastEditors: One_Random
 * @LastEditTime: 2020-11-23 21:43:54
 * @FilePath: \Nodejs\Patients-Data-Filter\src\renderer\static\js\global-require.js
 * @Description: Copyright © 2020 One_Random. All rights reserved.
 */

const require = parent.window.require

const { ipcRenderer, remote } = require('electron')

const path = require('path')

// console.log(remote.app.getAppPath())

const configFolderPath = path.join(parent.window.__dirname, './config')