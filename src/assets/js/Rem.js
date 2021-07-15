import { reactive } from "vue";
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
export default useRemoveStudent;