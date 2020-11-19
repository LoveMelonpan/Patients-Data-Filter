/*
 * @Author: One_Random
 * @Date: 2020-11-17 16:02:37
 * @LastEditors: One_Random
 * @LastEditTime: 2020-11-17 16:28:09
 * @FilePath: \Nodejs\Patients-Data-Filter\js\operation-onload.js
 * @Description: Copyright © 2020 One_Random. All rights reserved.
 */
window.onload = () => {
    let contentDiv = document.getElementById('content')
    let config = getConfigFromJsonFile()

    setDisplayAsConfig(contentDiv, config)

    let store_bt = this.document.querySelector('#store_bt')

    store_bt.onclick = () => {
        saveAsJsonFile("./test.json", getConfigJsonObject(config))
    }
}