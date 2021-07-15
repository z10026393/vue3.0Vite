import { reactive } from "vue";
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
export default useAddStudent;