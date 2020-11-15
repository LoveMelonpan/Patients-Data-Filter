/*
 * @Author: One_Random
 * @Date: 2020-11-15 22:11:30
 * @LastEditors: One_Random
 * @LastEditTime: 2020-11-15 22:11:40
 * @FilePath: \Nodejs\Patients-Data-Filter\js\save-json.js
 * @Description: Copyright © 2020 One_Random. All rights reserved.
 */
function getJsonObject() {
    let stores = this.document.getElementsByName('check_test')

    let obj = {}

    obj.check_test = []
    for (let i = 0; i < stores.length; i++) {
        if (stores[i].checked) {
            obj.check_test.push(stores[i].value)
        }
    }
    
    console.log(obj)

    return obj
}

function saveAsJsonFile(path, obj) {
    const fs = require('fs')
    
    fs.writeFile(path, JSON.stringify(obj), (err, data) => {
        if (err) throw err
    });
}

window.onload = () => {
    let store_bt = this.document.querySelector('#store_bt')

    store_bt.onclick = () => {
        saveAsJsonFile("./config.json", getJsonObject())
    }
}