<script setup lang="ts">
import { getNotes } from '@/api/note';
import type { NoteList } from '@/types'

import { ref } from 'vue';

// const notes = ref([] as NoteList);

// getNotes<NoteList>(1, 10).then((res) => {
//   notes.value = res;
//   console.log(notes.value);
// });


// notes 虚拟数据
let notes: any = [
  {
    id: 1,
    content: '这是一条测试数据',
    date: '2021-08-01',
  },
  {
    id: 2,
    content: '这是一条测试数据',
    date: '2021-08-01',
  },
  {
    id: 3,
    content: '这是一条测试数据',
    date: '2021-08-01',
  },
  {
    id: 4,
    content: '这是一条测试数据',
    date: '2021-08-01',
  },
  {
    id: 5,
    content: '这是一条测试数据',
    date: '2021-08-01',
  },
  {
    id: 6,
    content: '这是一条测试数据',
    date: '2021-08-01',
  },
  {
    id: 7,
    content: '这是一条测试数据',
    date: '2021-08-01',
  },
  {
    id: 8,
    content: '这是一条测试数据',
    date: '2021-08-01',
  },
  {
    id: 9,
    content: '这是一条测试数据',
    date: '2021-08-01',
  },
  {
    id: 10,
    content: '这是一条测试数据',
    date: '2021-08-01',
  },
  {
    id: 11,
    content: '这是一条测试数据',
    date: '2021-08-01',
  },
];
</script>

<template>
  <div class="note-box">
    <div class="list-box">
      <div class="init-list">
        <div class="list-item" v-for="item in notes" :key="item['id']">
          <div class="item-content">
            <p class="item-text">{{ item.content }}</p>
          </div>
          <div class="item-bottom">
            <p>
              {{ item.date }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.note-box {
  width: 100%;
  overflow: hidden;
  flex: 1;
  padding: 0 0.1rem;
  box-sizing: border-box;
  .list-box {
    width: 100%;
    height: 100%;
    overflow: auto;
    &::-webkit-scrollbar {
      /* 滚动条宽 */
      display: none;
    }
    &::-webkit-scrollbar-thumb {
      /* 滚动条 拖动条 */
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 6px;
    }
    &::-webkit-scrollbar-track {
      /* 滚动条背景槽 */
      background-color: #eee;
      border-radius: 6px;
    }
    .list-left {
      width: 50%;
      float: left;
      padding-bottom: 50px;
      padding-left: 5px;
    }
    .list-right {
      width: 50%;
      float: left;
      display: flex;
      flex-flow: column wrap;
      align-items: flex-end;
      padding-bottom: 50px;
      padding-right: 5px;
    }
    .init-list {
      width: 50%;
      /* background-color: rgb(122, 129, 127); */
      position: absolute;
      /* visibility: hidden; */
      /* height: 2rem; */
      /* overflow: hidden; */
    }
    .list-item {
      box-sizing: border-box;
      width: 95%;
      max-height: 2rem;
      background-color: rgb(245, 245, 245);
      border-radius: 0.15rem;
      margin-top: 0.1rem;
      padding: 0.2rem;
      position: relative;
      box-shadow: 2px 2px 9px #ccc;
      .item-content {
        max-height: 1.25rem;
        font-size: 0.16rem;
        line-height: 0.25rem;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
        color: rgb(99, 99, 99);
        .item-text:first-line {
          color: rgb(27, 27, 27);
          font-weight: 600;
        }
      }
      .item-bottom {
        height: 0.35rem;
        color: rgb(151, 151, 151);
        display: flex;
        align-items: flex-end;
      }
      .click-model {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
    }
  }
}
</style>
