import React, { Component } from 'react';
import Header from '../../common/header/Header.js';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
          profile_picture: "",
          username: "",
          media: 0,
          follows: 0,
          followed_by: 0,
          full_name: "",
          access_token: sessionStorage.getItem("access-token"),
          userPostsDetails: null,
          filterPostsDetails: null,
          addNewComment: [],
          addNewCommentCheck: ""
        };
      }

    render() {
        return (
            <div>
                <Header />
            </div>
        )
    }
}

export default Home;