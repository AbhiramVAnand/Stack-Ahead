import Nav from "./nav";
import "./search.css";

const Search = () => {
  return (
    <div>
      <Nav />

      <div className="container">
        <h1 className="head">Book An Appoinment</h1>
        <div className="details">
          <form action="">
            <span id="title">Name</span> <br />
            <input type="text" className="txtbox" />
            <br /> <br />
            <span id="title">Sex</span> <br /> <br />
            <select name="sex" id="sex">
              <option value="--" selected>
                Choose
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <br /> <br />
            <span id="title">D.O.B</span> <br />
            <input type="text" className="txtbox" /> <br /> <br />
            <span id="title">Address</span> <br />
            <textarea
              name="address"
              className="adrsbox"
              id="address"
            ></textarea>{" "}
            <br /> <br />
            <span id="title">Phone Number</span> <br />
            <input type="text" className="txtbox" /> <br /> <br />
            <button type="submit">Book</button> &nbsp;
            <button type="reset">Cancel</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
