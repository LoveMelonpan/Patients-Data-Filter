/*
 * @Author: One_Random
 * @Date: 2020-11-15 22:11:30
 * @LastEditors: One_Random
 * @LastEditTime: 2020-11-17 16:27:58
 * @FilePath: \Nodejs\Patients-Data-Filter\js\save-json.js
 * @Description: Copyright © 2020 One_Random. All rights reserved.
 */
function getConfigJsonObject(config) {
    let obj = {}
    for (let i = 0; i < config.length; i++) {
        if (config[i].type == 'single') {
            let elements = this.document.getElementsByName(config[i].name)

            obj[config[i].name] = ''
            for (let j = 0; j < elements.length; j++) {
                if (elements[j].checked) {
                    obj[config[i].name] = elements[j].value
                    break
                }
            }
        }
        else if (config[i].type == 'multiple') {
            let elements = this.document.getElementsByName(config[i].name)

            obj[config[i].name] = []
            for (let j = 0; j < elements.length; j++) {
                if (elements[j].checked) {
                    obj[config[i].name].push(elements[j].value)
                }
            }
        }
        else if (config[i].type == 'text') {
            let elements = this.document.getElementsByName(config[i].name)

            obj[config[i].name] = elements[0].value
        }
        
    }

    return obj
}

function saveAsJsonFile(path, obj) {
    let fs = require('fs')
    
    fs.writeFile(path, JSON.stringify(obj), (err, data) => {
        if (err) throw err
    });
}

