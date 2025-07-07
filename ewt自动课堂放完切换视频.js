// ==UserScript==
// @name         ewt自动课堂放完切换视频
// @namespace    http://tampermonkey.net/EWT_1
// @version      2025-07-07
// @description  ！ewt自动课堂放完切换视频（只能从第一个开始放！）-->vidio
// @author       hnbc666777
// @match        https://teacher.ewt360.com/ewtbend/bend/index/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
//致谢Greasy Fork上Panda_Chen写的EWT自动过课堂检测，链接https://greasyfork.org/en/scripts/524509-ewt%E8%87%AA%E5%8A%A8%E8%BF%87%E8%AF%BE%E5%A0%82%E6%A3%80%E6%B5%8B

//learning-progress-9vkNF
// id : lesson-finished-container
//document.getElementById('lesson-finished-container') ;

//class : divide-2aQV2
//document.getElementsByClassName('divide-2aQV2').
//document.querySelectorAll('.item-IPNWw')
//document.querySelectorAll('.item-IPNWw')[1].click()
(function() {
    'use strict';
    let i =0
    function myTask() {
        if (document.getElementById('lesson-finished-container') == null) {
            console.log('没找到finished按钮！目前切换视频',i,'次')
        }else{
            console.log('找到finished按钮！')
            i+=1
            document.querySelectorAll('.item-IPNWw')[i].click()
        }
        setTimeout(myTask, 5000);
    }
    myTask();

    // Your code here...
})();