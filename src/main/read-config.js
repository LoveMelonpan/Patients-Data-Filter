/*
 * @Author: One_Random
 * @Date: 2020-11-23 14:53:42
 * @LastEditors: One_Random
 * @LastEditTime: 2020-11-23 18:51:46
 * @FilePath: \Nodejs\Patients-Data-Filter\src\main\read-config.js
 * @Description: Copyright © 2020 One_Random. All rights reserved.
 */

function getConfigObjectFromFile(path='./config/config.json') {
    let fs = require('fs')
    return JSON.parse(fs.readFileSync(path, 'utf8').toString())
}

exports.getConfigObjectFromFile = getConfigObjectFromFile