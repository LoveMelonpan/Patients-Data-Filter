/*
 * @Author: One_Random
 * @Date: 2020-11-15 22:11:30
 * @LastEditors: One_Random
 * @LastEditTime: 2020-11-23 21:51:37
 * @FilePath: \Nodejs\Patients-Data-Filter\src\renderer\static\js\save-json.js
 * @Description: Copyright © 2020 One_Random. All rights reserved.
 */

function getOptionsJsonObject(options) {
    let obj = {}
    for (let i = 0; i < options.length; i++) {
        if (options[i].type == 'single') {
            let elements = this.document.getElementsByName(options[i].name)

            obj[options[i].name] = ''
            for (let j = 0; j < elements.length; j++) {
                if (elements[j].checked) {
                    obj[options[i].name] = elements[j].value
                    break
                }
            }
        }
        else if (options[i].type == 'multiple') {
            let elements = this.document.getElementsByName(options[i].name)

            obj[options[i].name] = []
            for (let j = 0; j < elements.length; j++) {
                if (elements[j].checked) {
                    obj[options[i].name].push(elements[j].value)
                }
            }
        }
        else if (options[i].type == 'text') {
            let elements = this.document.getElementsByName(options[i].name)

            obj[options[i].name] = elements[0].value
        }
        
    }

    return obj
}

function saveAsJsonFile(path, obj) {
    let fs = require('fs')
    
    fs.writeFile(path, JSON.stringify(obj), (err, data) => {
        if (err) throw err
    })

    ipcRenderer.send('set-config-last-path', path)

    ipcRenderer.once('return', (e, result) => {
        if (result) {
            console.log('Save successfully!')
        }
    })
}

