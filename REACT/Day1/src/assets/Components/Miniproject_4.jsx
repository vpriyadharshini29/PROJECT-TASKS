function Miniproject4() {
  const hobbies = ['Reading', 'Gaming', 'Cooking'];
  return (
    <>
      <h2>Mini Project 4: Hobbies List</h2>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </>
  );
}
export default Miniproject4;
