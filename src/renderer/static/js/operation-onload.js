/*
 * @Author: One_Random
 * @Date: 2020-11-17 16:02:37
 * @LastEditors: One_Random
 * @LastEditTime: 2020-11-23 19:28:06
 * @FilePath: \Nodejs\Patients-Data-Filter\src\renderer\static\js\operation-onload.js
 * @Description: Copyright © 2020 One_Random. All rights reserved.
 */

window.onload = () => {
    let contentDiv = document.getElementById('content')
    let options = getOptionsFromMainProcess()

    setDisplayAsConfig(contentDiv, options)

    let results = getResultsObjectFromFile('./config/test.json')

    setOptionsDisplayAsResults(options, results)

    let store_bt = this.document.querySelector('#store_bt')

    store_bt.onclick = () => {
        saveAsJsonFile("./config/test.json", getOptionsJsonObject(options))
    }
}