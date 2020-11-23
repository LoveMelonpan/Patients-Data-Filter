/*
 * @Author: One_Random
 * @Date: 2020-11-15 21:10:45
 * @LastEditors: One_Random
 * @LastEditTime: 2020-11-19 12:13:57
 * @FilePath: \Nodejs\Patients-Data-Filter\src\renderer\static\js\select-folder.js
 * @Description: Copyright © 2020 One_Random. All rights reserved.
 */

// when you use the html file as iframe
//const require=parent.window.require

const { ipcRenderer } = require('electron')



function selectFolder() {
    options = {
        defaultPath : '.',
        properties : ['openDirectory']
    }
    
    ipcRenderer.send('open-directory-dialog', options) 
}

// get main process ipc return
ipcRenderer.on('selected-folder', (e, path) => {

   // this.location.href = './test.html'
    var promise = new Promise(function(resolve, reject){
            sessionStorage.setItem("base_path",path) 
            resolve(path)
    }).then(()=>{
        ipcRenderer.sendSync('walk-selected-folder', path)
    }) 
})

ipcRenderer.on('directory-structure', (e, result) => {
    
    sessionStorage.setItem("base_folders",result)

    ipcRenderer.send('open-page',result)
})
