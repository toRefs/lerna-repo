<template>
  <div class="slider">
    <div @click="hClick" class="slider-content" @mouseenter="mouseEnter" @mouseleave="mouseleave">
      <transition-group name="fade">
        <div class="slider-item" v-show="i === currentIdx" v-for="(item, i) in list" :key="item">
          <img :src="item.url" :alt="item.alt" />
        </div>
      </transition-group>
    </div>

    <!-- 左右按钮 -->
    <span class="btn btn_left" @click="hPrev"></span>
    <span class="btn btn_right" @click="hNext"></span>

    <!-- 标题区域 -->
    <div class="txt">{{list[currentIdx].alt}}</div>
    <!-- 指示条 -->
    <ol class="indirector">
      <li @mouseenter="hDirectorEnter(item - 1)" :class="{current: item - 1 === currentIdx}" v-for="item in list.length" :key="item"></li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'JSlider',
  props: {
    list: {
      type: Array,
      required: true
    },
    curIdx: {
      type: Number,
      default: 0,
      required: false
    },
    auto: {
      type: Number,
      default: 0,
      required: false
    }
  },
  data () {
    return {
      currentIdx: this.curIdx,
      timer: null
    }
  },
  created () {
    this.move()
  },
  watch: {
    currentIdx () {
      this.$emit('slider', this.currentIdx)
    }
  },
  methods: {
    // 用户点击事件
    hClick () {
      this.$emit('click', this.currentIdx)
    },
    // 指示条鼠标进入事件
    hDirectorEnter (i) {
      this.currentIdx = i
    },
    // 定时器自动播放
    move () {
      if (this.auto) {
        this.timer = setInterval(() => {
          this.hNext()
        }, this.auto)
      }
    },
    // 鼠标进入
    mouseEnter () {
      clearInterval(this.timer)
    },
    // 鼠标离开
    mouseleave () {
      this.move()
    },
    // 上一张
    hPrev () {
      this.currentIdx = this.currentIdx - 1
      if (this.currentIdx === -1) {
        this.currentIdx = this.list.length - 1
      }
    },
    // 下一张
    hNext () {
      this.currentIdx = this.currentIdx + 1
      if (this.currentIdx === this.list.length) {
        this.currentIdx = 0
      }
    }
  }
}
</script>

<style>
.fade-enter-active,.fade-leave-active {
  transition: all .3s ;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
.slider .slider-content,
.slider img {
  width: 100%;
  height: 100%;
}
.slider {
  margin: 0 auto;
  border: 1px solid #ccc;
  position: relative;
}
.slider .slider-content {
  overflow: hidden;
  position: relative;
}
.slider .slider-content .slider-item {
  position: absolute;
  top: 0;
  left: 0;
}
.slider img {
  width: 100%;
}
.slider .btn,
.slider .txt,
.slider .indirector {
  position: absolute;
}
.slider .btn {
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0);
  top: 50%;
  transform: translateY(-50%);
  transition: background-color 0.2s;
}
.slider .btn:hover {
  background-color: rgba(255, 255, 255, 1);
}
.slider .btn:before,
.slider .btn:after {
  content: "";
  height: 3px;
  width: 25px;
  background-color: #fff;
  position: absolute;
  left: 15px;
  top: 23px;
  transform: rotateZ(60deg);
  transform-origin: 0px center;
  transition: all 0.2s;
}
.slider .btn:after {
  transform: rotateZ(-60deg);
}
.slider .btn:hover:before {
  transform: rotateZ(45deg);
  background-color: red;
}
.slider .btn:hover:after {
  transform: rotateZ(-45deg);
  background-color: red;
}

.slider .btn.btn_right:before,
.slider .btn.btn_right:after {
  transform-origin: right center;
}

.slider .btn.btn_left {
  left: 20px;
}
.slider .btn.btn_right {
  right: 20px;
}

.slider .txt {
  text-indent: 1em;
  line-height: 40px;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: left;
  bottom: 0;
  left: 0;
  width: 100%;
  color: #fff;
}
.slider .indirector {
  bottom: 10px;
  right: 1em;
}
.slider .indirector li {
  display: inline-block;
  margin: 0 5px;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #fff;
}
.slider .indirector li {
  transition: transform 0.2s;
}
.slider .indirector .current {
  background-color: #369;
  transform: scale(1.2);
}
</style>
