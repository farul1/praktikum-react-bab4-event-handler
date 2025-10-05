function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>Pengenalan React Tingkat Dasar</h1>
      <h2>Counter</h2>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Counter />);
