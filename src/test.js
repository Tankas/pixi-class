/*
 * @Author: tanka 
 * @Date: 2022-01-10 17:05:24
 * @LastEditors: tanka 
 * @LastEditTime: 2023-03-01 10:29:51
 * @FilePath: /pixi-demo/src/test.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function test(arr, k) {
    let len = arr.length
    if (k < arr.length / 2) {
        return
    }
    let middleItem = arr.splice(arr.length / 2, 1)
    let left = []
    let right = []
    for (const element of arr) {
        if (element < middleItem) {
            left.push(element)
        } else {
            right.push(element)
        }
    }
}


