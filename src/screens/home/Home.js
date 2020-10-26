import React, { Component } from 'react';
import Header from '../../common/header/Header.js';
import Config from '../../common/Config.js';

class Home extends Component {

    constructor() {
        super();
        this.state = {
            searchPattern: "",
            posts: [],
            userPosts: []
        }
    }

    async componentDidMount() {

        if (!Config.api.mock) {
            let accessToken = window.sessionStorage.getItem("access-token");
            let getPostsURI = Config.api.endpoints.find((endpoint) => endpoint.name === "Get Posts").uri.replace('$accessToken', accessToken);
            let getPostDetailsURI = Config.api.endpoints.find((endpoint) => endpoint.name === "Get Post Details").uri.replace('$accessToken', accessToken);
    
            let response = await fetch(getPostsURI);
            let posts = await response.json();
            posts = posts.data;
    
            for (let i = 0; i < posts.length; i++) {
                response = await fetch(getPostDetailsURI.replace('$postId', posts[i].id));
                let details = await response.json();
                posts[i].media_type = details.media_type;
                posts[i].media_url = details.media_url;
                posts[i].username = details.username;
                posts[i].timestamp = details.timestamp;
                posts[i].comments = [];
                posts[i].isLiked = false;
                posts[i].numLikes = Math.round(100 + Math.random() * 100);
            }
            this.setState({userPosts: posts});
            this.setState({posts: posts.filter(x => true)});
        }
        else {
            this.setState({userPosts: postsDetails});
            this.setState({posts: postsDetails.filter(x => true)});
        }
        
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