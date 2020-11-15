/*
 * @Author: One_Random
 * @Date: 2020-11-13 13:45:43
 * @LastEditors: One_Random
 * @LastEditTime: 2020-11-14 02:28:29
 * @FilePath: \Nodejs\Patients-Data-Filter\js\test2.js
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