/*
 * @Author: One_Random
 * @Date: 2020-11-23 18:52:11
 * @LastEditors: One_Random
 * @LastEditTime: 2020-11-23 19:09:55
 * @FilePath: \Nodejs\Patients-Data-Filter\src\renderer\static\js\read-json.js
 * @Description: Copyright © 2020 One_Random. All rights reserved.
 */

function getResultsObjectFromFile(path) {
    let fs = require('fs')
    return JSON.parse(fs.readFileSync(path, 'utf8').toString())
}

function setOptionsDisplayAsResults(options, results) {
    for (let i = 0; i < options.length; i++) {
        if (options[i].type == 'single') {
            let elements = this.document.getElementsByName(options[i].name)

            for (let j = 0; j < elements.length; j++) {
                if (results[options[i].name] == elements[j].value) {
                    
                    elements[j].checked = true
                    break
                }
            }
        }
        else if (options[i].type == 'multiple') {
            let elements = this.document.getElementsByName(options[i].name)
            
            let index = 0;

            for (let j = 0; j < elements.length; j++) {
                if (results[options[i].name][index] == elements[j].value) {                
                    elements[j].checked = true
                    index++
                }
            }
        }
        else if (options[i].type == 'text') {
            let elements = this.document.getElementsByName(options[i].name)

            elements[0].value = results[options[i].name]
        }
    }
}