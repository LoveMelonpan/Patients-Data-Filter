/*
 * @Author: One_Random
 * @Date: 2020-11-15 21:10:45
 * @LastEditors: One_Random
 * @LastEditTime: 2020-11-15 22:09:33
 * @FilePath: \Nodejs\Patients-Data-Filter\js\select-folder.js
 * @Description: Copyright © 2020 One_Random. All rights reserved.
 */
const { ipcRenderer } = require('electron')
const fs = require('fs')

function walkAllFiles(path, fileList) {
	let dirList = fs.readdirSync(path)
	dirList.forEach(function(item) {
		if (fs.statSync(path + '\\' + item).isDirectory()) {
            walkAllFiles(path + '\\' + item, fileList)
            
		} else {
            fileList.push(path + '\\' + item)
            
		}
	});
}

function walkAllDirs(path, folderList) {
    let dirList = fs.readdirSync(path)
	dirList.forEach(function(item) {
		if (fs.statSync(path + '\\' + item).isDirectory()) {
            folderList.push(path + '\\' + item + '\\')
            
            walkAllDirs(path + '\\' + item, folderList)
            
		}
	});
}

function walkOneDir(path, list) {
    let dirList = fs.readdirSync(path)
	dirList.forEach(function(item) {
		if (fs.statSync(path + '\\' + item).isDirectory()) {
            list.push(path + '\\' + item + '\\')

		} else {
            list.push(path + '\\' + item)
            
		}
	});
}

function walk(path, type='') {
    list = []

    try {
        if (type == 'files') {
            walkAllFiles(path, list)
    
        } else if (type == 'folders') {
            walkAllDirs(path, list)
    
        } else {
            walkOneDir(path, list)
            
        }
    }
    catch(e) {
        console.log(e)
    }
    
    return list
}

window.onload = () => {
    let selectFolderButton = this.document.querySelector('#select-folder-button')

    selectFolderButton.onclick = () => {
        options = {
            defaultPath : './/',
            properties : ['openDirectory']
        }
        
        ipcRenderer.send('open-directory-dialog', options)
    }
}

// get main process ipc return
ipcRenderer.on('selectedFolder', (e, path) => {
    console.log(path)

    console.log(walk(path))
})