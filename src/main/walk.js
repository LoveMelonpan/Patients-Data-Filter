/*
 * @Author: One_Random
 * @Date: 2020-11-19 11:25:58
 * @LastEditors: One_Random
 * @LastEditTime: 2020-11-19 12:03:34
 * @FilePath: \Nodejs\Patients-Data-Filter\src\main\walk.js
 * @Description: Copyright © 2020 One_Random. All rights reserved.
 */
const { exception } = require('console');
const fs = require('fs')

function walk(path) {
    let result = {
        folders : [],
        files: []
    }

    try {
        let dirList = fs.readdirSync(path)
        
        dirList.forEach((item) => {
            if (fs.statSync(path + '\\' + item).isDirectory()) {
                result.folders.push(item)
    
            } else {
                result.files.push(item)
            }
        });
    }
    catch (err) {
        console.error(err)
        return null
    }

    return result
}

exports.walk = walk