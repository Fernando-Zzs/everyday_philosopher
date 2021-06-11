Page({
  data: {
    
  },

  onLoad: function (options) {
    const db = cloud.database();
    db.collection('story').add({
      data:{
        _openid: "oMvG85UMUzpeWyT0DmqQzfApoOMM",
        collect_openid: [],
        container_height: 1000,
        icon: "",
        like_openid: [],
        poster: "",
        relative: [],
        series: [],
        story_id: 6,
        tags: [],
        title: "柏拉图：柏拉图之死",
        type:"text",
        story_content:[
          {
            class:"text p1",
            component:"text",
            content:"",
            endScrollOffset:0,
            keyframes:[],
            offset:0,
            selector:".p1",
            startScrollOffset:0
          },
        ]
      }
    })
  }
  
})
