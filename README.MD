###一个简单的小函数，解决后台同学联动问题，需要引入jquery和underscore就可以了
###按照如下格式，定义好数据结构
    {
        '1': {
            value: '1',
            text: '1期',
            city: [{
                value: '1',
                text: '北京'
            }]
        }
    }
###按照如下签名调用函数，其中data为你定义的数据结构，s1为一级下拉框的选择器，s2为二级下拉框的选择器
    linkage2level(data,s1,s2);