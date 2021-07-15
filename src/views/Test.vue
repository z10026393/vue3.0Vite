<template>
  <div>
    <!-- {{ Num }}
        <button @click="Add">添加</button> -->
        <div class="add"></div>
    <form>
      <input type="text" v-model="state2.stu.id" />
      <input type="text" v-model="state2.stu.name" />
      <input type="text" v-model="state2.stu.age" />
      <button @click="AddObj">添加</button>
    </form>
    <ui v-for="(item, index) in state.sut" :key="index">
      <li @click="remStu(index)">{{ item.name }} - {{ item.age }}</li>
    </ui>
  </div>
</template>
<script>
import { reactive, ref } from "vue";
import useAddStudent from "../assets/js/add";
import useRemoveStudent from "../assets/js/Rem";
export default {
  setup(props) {
    /*
        // 监听 ref
        const Num = ref(0)
        // 注 方法或变量需暴露出去
        // 定义方法
        function Add () {
            Num.value +=1;
        }
        return {
            Num,
            Add
        }
        */
    /*
        创建对象
        let state = reactive({
            stat:[
                {name:'张三',age:30},
                {name:'李四',age:20}
            ]
        })
        function remStu (index) {
            state.stat = state.stat.filter((stu, idx) => idx != index)
        }
        return {
            state,
            remStu
        }
        */
    let { state, remStu } = useRemoveStudent();
    let { state2, AddObj } = useAddStudent(state);
    return {
      state,
      remStu,
      state2,
      AddObj,
    };
  },
};
/*
function useAddStudent(state) {
    let state2 = reactive({
        stu: {
            id:'',
            name: '',
            age: ''
        }
    })
    function AddObj (e) {
        e.preventDefault();
        const stu = Object.assign({},state2.stu);
        state.sut.push(stu)
        state2.stu.id = '';
        state2.stu.name = '';
        state2.stu.age = '';
    }
    return { state2, AddObj };
}
function useRemoveStudent() {
  let state = reactive({
    sut: [
      { id:'1', name: "张三", age: 30 },
      { id:'2', name: "李四", age: 20 },
    ],
  });
  function remStu(index) {
    state.sut = state.sut.filter((stu, idx) => idx != index);
  }
  return { state, remStu };
}
*/
</script>
<style lang="scss" scoped>
.add {
    width: 100px;
}
</style>