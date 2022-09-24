import { DECREMENT, INCREMENT, RESET } from "../consts/consts";

const initialCount = {
    count:0
}


const counterReducer = (state = initialCount, action) => {
    switch (action.type) {
        case INCREMENT:
            return { count: state.count + 1}
        case DECREMENT:
            return {count: state.count > 0 ? state.count - 1 : state.count}
        case RESET:
            return {count: 0}

        default:
          return{ count:state.count};
    }
}

export default counterReducer;