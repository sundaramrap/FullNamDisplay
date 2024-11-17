function App() {
  return (
    <>
      <h1>Full Name Display</h1>
      <form action={SubmitEvent}>
        <label>
          First Name: <input type="text" />
        </label>
        <br />
        <label>
          Last Name: <input type="text" />
        </label>
        <br />
        <button>Submit</button>
        <br />
      </form>
      <p>Full Name:</p>
    </>
  );
}

export default App;
