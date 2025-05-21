
function Miniproject1() {
  
  const bio = {
    name: 'Jane Doe',
    age: 25,
    description: 'I am a passionate developer learning React.'
  };
  return (
    <div className="bio-card">
      <h2>Mini Project 1: Personal Bio</h2>
      <p>Name: {bio.name}</p>
      <p>Age: {bio.age}</p>
      <p>{bio.description}</p>
    </div>
  );
}
export default Miniproject1;