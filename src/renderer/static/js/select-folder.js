/*
 * @Author: One_Random
 * @Date: 2020-11-15 21:10:45
 * @LastEditors: One_Random
 * @LastEditTime: 2020-11-23 19:18:41
 * @FilePath: \Nodejs\Patients-Data-Filter\src\renderer\static\js\select-folder.js
 * @Description: Copyright © 2020 One_Random. All rights reserved.
 */

<<<<<<< HEAD
function getLastPathFromMainProcess() {
    return ipcRenderer.sendSync('config-last-path', true)
}
=======
// when you use the html file as iframe
//const require=parent.window.require

const { ipcRenderer } = require('electron')


>>>>>>> c087c0af72d6a5e032b44b91aaf581a77aa67696

function selectFolder() {
    options = {
        defaultPath : '.',
        properties : ['openDirectory']
    }
    
    ipcRenderer.send('open-directory-dialog', options) 
}

// get main process ipc return
ipcRenderer.on('selected-folder', (e, path) => {

<<<<<<< HEAD
    //ipcRenderer.send('walk-selected-folder', path)
    var promise = new Promise(function(resolve, reject){
        sessionStorage.setItem("base_path",path) 
        resolve(path)
=======
   // this.location.href = './test.html'
    var promise = new Promise(function(resolve, reject){
            sessionStorage.setItem("base_path",path) 
            resolve(path)
>>>>>>> c087c0af72d6a5e032b44b91aaf581a77aa67696
    }).then(()=>{
        ipcRenderer.sendSync('walk-selected-folder', path)
    }) 
})

ipcRenderer.on('directory-structure', (e, result) => {
<<<<<<< HEAD
    console.log(result)
    sessionStorage.setItem("base_folders",result)

    ipcRenderer.send('open-page',result)
})
=======
    
    sessionStorage.setItem("base_folders",result)

    ipcRenderer.send('open-page',result)
})
>>>>>>> c087c0af72d6a5e032b44b91aaf581a77aa67696
