import React from "react";
import { Jumbotron, Navbar } from "reactstrap";

const Header = () => {
  return (
    <React.Fragment>
      <Navbar dark color="primary" expand="md">
        <div className="container">
          <Jumbotron>
            <header>
              <div className="row row-header">
                <div className="col-12">
                  <h1 style={{ color: "white", textAlign: "center" }}>
                    Fake Shop
                  </h1>
                </div>
              </div>
            </header>
          </Jumbotron>
        </div>
      </Navbar>
      <br />
    </React.Fragment>
  );
};

export default Header;
