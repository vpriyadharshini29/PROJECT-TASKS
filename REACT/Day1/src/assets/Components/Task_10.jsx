function Greeting({ name }) {
  return <p>Hello, {name}!</p>;
}
function Task10() {
  return (
    <>
      <h2>Task 10: Props Implementation</h2>
      <Greeting name="John" />
    </>
  );
}
export default Task10;
