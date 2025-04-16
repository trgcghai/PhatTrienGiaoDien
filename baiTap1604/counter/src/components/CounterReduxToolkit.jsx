import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../libs/reduxToolkit/slices/counterSlice";

const CounterReduxToolkit = () => {
  const count = useSelector((state) => state.toolkitCounter.value);
  const dispatch = useDispatch();

  return (
    <div className="p-4 border rounded-lg bg-purple-50">
      <h2 className="text-xl font-semibold mb-4">Redux Toolkit Counter</h2>
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          -
        </button>
        <span className="text-2xl font-bold">{count}</span>
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          +
        </button>
      </div>
    </div>
  );
};
export default CounterReduxToolkit;
