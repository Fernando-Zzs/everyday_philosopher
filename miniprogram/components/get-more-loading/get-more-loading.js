// components/get-more-loading/get-more-loading.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show:{
      type: String,
      value: '',
      observer: function(newVal, oldVal) {
        console.log('properties-num', newVal)
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },

  observers:{
    'show'(val){
      console.log('observers-num',val)
    }
  }
})
