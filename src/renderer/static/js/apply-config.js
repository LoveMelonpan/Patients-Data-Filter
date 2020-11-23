/*
 * @Author: One_Random
 * @Date: 2020-11-15 22:12:14
 * @LastEditors: One_Random
 * @LastEditTime: 2020-11-19 11:40:23
 * @FilePath: \Nodejs\Patients-Data-Filter\src\renderer\static\js\apply-config.js
 * @Description: Copyright © 2020 One_Random. All rights reserved.
 */

// when you use the html file as iframe
//const require=parent.window.require

function getConfigFromJsonFile(path='./config/config.json') {
    let fs = require('fs')
    return JSON.parse(fs.readFileSync(path, 'utf8').toString())
}

function setDisplayAsConfig(contentDiv, config) {
    console.log(contentDiv)
    let html = ''
    for (let i = 0; i < config.length; i++) {
        let newHtml = ''
        if (config[i].type == 'single') {
            newHtml += '<div '
                    + 'id="' + config[i].name + '-div"' 
                    + 'class="' + 'single-config' + '"'
                    + '>'

            for (let j = 0; j < config[i].selections.length; j++) {
                let addHtml = '<input '
                            + 'id="' + config[i].name + '-' + j + '"'
                            + 'name="' + config[i].name + '"'
                            + 'value="' + config[i].selections[j] + '"'
                            + 'type="' + 'radio' + '"'
                            + '>' + config[i].selections[j] + '</>'
                
                newHtml += addHtml + '<br/>'
            }

            newHtml += '</div>'
        }
        else if (config[i].type == 'multiple') {
            newHtml += '<div '
                    + 'id="' + config[i].name + '-div"' 
                    + 'class="' + 'multiple-config' + '"'
                    + '>'

            for (let j = 0; j < config[i].selections.length; j++) {
                let addHtml = '<input '
                            + 'id="' + config[i].name + '-' + j + '"'
                            + 'name="' + config[i].name + '"'
                            + 'value="' + config[i].selections[j] + '"'
                            + 'type="' + 'checkbox' + '"'
                            + '>' + config[i].selections[j] + '</>'
                
                newHtml += addHtml + '<br/>'
            }

            newHtml += '</div>'
        }
        else if (config[i].type == 'text') {
            newHtml += '<div '
                    + 'id="' + config[i].name + '-div"' 
                    + 'class="' + 'text-config' + '"'
                    + '>'

            let addHtml = '<input '
                    + 'id="' + config[i].name + '-' + j + '"'
                    + 'name="' + config[i].name + '"'
                    + 'type="' + 'text' + '"'
                    + '>' + '</>'

            newHtml += addHtml + '<br/>'
            newHtml += '</div>'
        }


        html += newHtml
    }

    contentDiv.innerHTML = html + '<input id="store_bt" type="button" value="store to json"></>'
}
