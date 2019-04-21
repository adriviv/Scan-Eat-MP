var windWidth = wx.getSystemInfoSync().windowWidth;
Component({
  options: {
    multipleSlots: true // Enable multi-slot support in options at component definition
  },
  /**
       * List of attributes of the component
   */
  properties: {
    //The width of the canvas is 0.4 times the width of the screen by default.
    canvasWidth: {
      type: Number,
      value: windWidth * 0.32
    },
    //Line width Default 10
    lineWidth: {
      type: Number,
      value: 10
    },
    //Line color default "#393"
    lineColor: {
      type: String,
      value: "#393"
    },
    //title default "completion rate"
    title: {
      type: String,
      value: "Completion rate"
    },
    //current value default 45
    value: {
      type: Number,
      value: 36
    },
    //The color of the value defaults to "#ff9c07"
    valueColor: {
      type: String,
      value: "#e33d35"
    },
    //Maximum Default 100
    maxValue: {
      type: Number,
      value: 100
    },
    //minimum default 0
    minValue: {
      type: Number,
      value: 0
    },
    //The suffix of the current value
    suffix: {
      type: null,
      value: "%"
    },
    //From what angle, starting from 0 to 360 (0 in the 12 o'clock direction, 180 in the 18 o'clock direction, and 360 in the 0 o'clock direction)
    startDegree: {
      type: Number,
      value: 0
    }

  },

  /**
       * Initial data for the component
   */
  data: {
    canvasWidth: windWidth * 0.4,
    isMarginTop: true
  },

  /**
       * List of methods for components
   */
  methods: {
    showCanvasRing() {
      
      // If the title is empty after removing the first space, then the current value of the area has no margin - top value
      if (this.data.title.replace(/(^\s*)|(\s*$)/g, "").length == 0) {
        this.setData({
          isMarginTop: false
        })
      }
      //painting

      var ctx = wx.createCanvasContext("circleBar", this); //canvas build package, need to add a this
      var circle_r = this.data.canvasWidth / 2; //Half of the canvas, used to find the center point and radius
      var startDegree = this.data.startDegree; //From what angle
      var maxValue = this.data.maxValue; //maximum
      var minValue = this.data.minValue; //minimum
      var value = this.data.value; //current value
      var lineColor = this.data.lineColor; //Line color
      var lineWidth = this.data.lineWidth; //Line width
      var percent = 360 * ((value - minValue) / (maxValue - minValue)); //Calculation results
      // Define the starting point
      ctx.translate(circle_r, circle_r);
      //Gray arc
      ctx.beginPath();
      ctx.setStrokeStyle("#ebebeb");
      ctx.setLineWidth(lineWidth);
      ctx.arc(0, 0, circle_r - 10, 0, 2 * Math.PI, true);
      ctx.stroke();
      ctx.closePath();
      //Colored arc
      ctx.beginPath();
      ctx.setStrokeStyle(lineColor);
      ctx.setLineWidth(lineWidth);
      ctx.arc(0, 0, circle_r - 10, startDegree * Math.PI / 180 - 0.5 * Math.PI, percent * Math.PI / 180 + startDegree * Math.PI / 180 - 0.5 * Math.PI, false);
      ctx.stroke();
      ctx.closePath();
      ctx.draw();
    }
  }
})