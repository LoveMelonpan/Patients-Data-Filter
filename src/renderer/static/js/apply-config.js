/*
 * @Author: One_Random
 * @Date: 2020-11-15 22:12:14
 * @LastEditors: One_Random
 * @LastEditTime: 2020-11-23 19:18:09
 * @FilePath: \Nodejs\Patients-Data-Filter\src\renderer\static\js\apply-config.js
 * @Description: Copyright © 2020 One_Random. All rights reserved.
 */

// when you use the html file as iframe
<<<<<<< HEAD
function getOptionsFromMainProcess() {
    return ipcRenderer.sendSync('get-config-options', true)
}

function setDisplayAsConfig(contentDiv, options) {
=======
//const require=parent.window.require

function getConfigFromJsonFile(path='./config/config.json') {
    let fs = require('fs')
    return JSON.parse(fs.readFileSync(path, 'utf8').toString())
}

function setDisplayAsConfig(contentDiv, config) {
    console.log(contentDiv)
>>>>>>> c087c0af72d6a5e032b44b91aaf581a77aa67696
    let html = ''
    for (let i = 0; i < options.length; i++) {
        let newHtml = ''
        if (options[i].type == 'single') {
            newHtml += '<div '
                    + 'id="' + options[i].name + '-div"' 
                    + 'class="' + 'single-options' + '"'
                    + '>'

            for (let j = 0; j < options[i].selections.length; j++) {
                let addHtml = '<input '
                            + 'id="' + options[i].name + '-' + j + '"'
                            + 'name="' + options[i].name + '"'
                            + 'value="' + options[i].selections[j] + '"'
                            + 'type="' + 'radio' + '"'
                            + '>' + options[i].selections[j] + '</>'
                
                newHtml += addHtml + '<br/>'
            }

            newHtml += '</div>'
        }
        else if (options[i].type == 'multiple') {
            newHtml += '<div '
                    + 'id="' + options[i].name + '-div"' 
                    + 'class="' + 'multiple-options' + '"'
                    + '>'

            for (let j = 0; j < options[i].selections.length; j++) {
                let addHtml = '<input '
                            + 'id="' + options[i].name + '-' + j + '"'
                            + 'name="' + options[i].name + '"'
                            + 'value="' + options[i].selections[j] + '"'
                            + 'type="' + 'checkbox' + '"'
                            + '>' + options[i].selections[j] + '</>'
                
                newHtml += addHtml + '<br/>'
            }

            newHtml += '</div>'
        }
        else if (options[i].type == 'text') {
            newHtml += '<div '
                    + 'id="' + options[i].name + '-div"' 
                    + 'class="' + 'text-options' + '"'
                    + '>'

            let addHtml = '<input '
                    + 'id="' + options[i].name + '-' + j + '"'
                    + 'name="' + options[i].name + '"'
                    + 'type="' + 'text' + '"'
                    + '>' + '</>'

            newHtml += addHtml + '<br/>'
            newHtml += '</div>'
        }


        html += newHtml
    }

    contentDiv.innerHTML = html + '<input id="store_bt" type="button" value="store to json"></>'
}
