import React from "react";

import Modal from "./Modal";

function AuthUser(props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="authUser">
        <div>
          <button onClick={props.onDeleteBadge} className="btn btn-danger mr-4">
            Login Spotify
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default AuthUser;
