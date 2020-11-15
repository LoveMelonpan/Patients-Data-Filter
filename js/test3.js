/*
 * @Author: One_Random
 * @Date: 2020-11-15 17:18:26
 * @LastEditors: One_Random
 * @LastEditTime: 2020-11-15 17:21:31
 * @FilePath: \Nodejs\Patients-Data-Filter\js\test3.js
 * @Description: Copyright © 2020 One_Random. All rights reserved.
 */
var fs = require('fs'),
fileList = [];
 
function walk(path) {
	var dirList = fs.readdirSync(path);
	dirList.forEach(function(item) {
		if (fs.statSync(path + '\\' + item).isDirectory()) {
			walk(path + '\\' + item);
		} else {
			fileList.push(path + '\\' + item);
		}
	});

	console.log(fileList)
}
 

window.onload = () => {
    let walk_bt = this.document.querySelector('#walk_bt')

    walk_bt.onclick = () => {
        walk('.\\');
    }
}