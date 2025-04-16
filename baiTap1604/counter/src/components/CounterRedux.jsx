import { useSelector, useDispatch } from "react-redux";

const CounterRedux = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="p-4 border rounded-lg bg-blue-50">
      <h2 className="text-xl font-semibold mb-4">Redux Counter</h2>
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={() => dispatch({ type: "DECREMENT" })}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          -
        </button>
        <span className="text-2xl font-bold">{count}</span>
        <button
          onClick={() => dispatch({ type: "INCREMENT" })}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          +
        </button>
      </div>
    </div>
  );
};
export default CounterRedux;
