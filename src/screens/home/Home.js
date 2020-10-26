import React, { Component } from 'react';
import { Box, Card, CardContent, CardActions, CardHeader, Typography } from '@material-ui/core';
import PostMedia from '../../common/post/PostMedia.js';
import PostCaption from '../../common/post/PostCaption.js';
import PostLikes from '../../common/post/PostLikes.js';
import PostComments from '../../common/post/PostComments.js';
import ProfileIcon from '../../common/profile/ProfileIcon';
import './Home.css';
import Config from '../../common/Config.js';
import Header from '../../common/header/Header';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            searchPattern: "",
            posts: [],
            userPosts: []
        }
    }

    // Convert media post date from ISOFormat to DD/MM/YYYY HH:MM:SS
    convertDate = (x) => {
        let date = new Date(x);
        let dd = date.getDate();
        let mm = date.getMonth() + 1;
        dd = (dd < 10) ? ("0" + dd) : dd;
        mm = (mm < 10) ? ("0" + mm) : mm;
        return dd + '/' + mm + '/' + date.getFullYear()
            + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
    };

    // Get details on User's media posted on Instagram account
    async componentDidMount() {
        if (!Config.api.mock) {
            let accessToken = window.sessionStorage.getItem("access-token");
            let getPostsURI = Config.api.endpoints.find((endpoint) => endpoint.name === "Get Posts").uri.replace('$accessToken', accessToken);
            let getPostDetailsURI = Config.api.endpoints.find((endpoint) => endpoint.name === "Get Post Details").uri.replace('$accessToken', accessToken);
    
            let response = await fetch(getPostsURI);
            let posts = await response.json();
            posts = posts.data;
            console.log(posts);
    
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
        
    }

    render() {
        return (
            <div>
                <Header/>
                {
                    (this.state.userPosts.length > 0) ?
                    (
                        <Box display="flex" width="70%" m="auto" flexDirection="row" flexWrap="wrap" alignItems="space-around" flexBasis="1">
                            {
                                this.state.userPosts.map(userPost => (
                                    <Card key={userPost.id + "post"} raised className="post">
                                        <CardHeader className="post-header" disableTypography
                                            avatar={<ProfileIcon type="avatarOnly" />}
                                            title={<Typography className="text-bold" variant="body1">{userPost.username}</Typography>}
                                            subheader={<Typography className="text-lite" variant="subtitle2">{this.convertDate(userPost.timestamp)}</Typography>}>
                                        </CardHeader>
                                        <CardContent className="post-content">
                                            <PostMedia media={userPost.media_url} mediaId={userPost.id} />
                                            <PostCaption text={userPost.caption} />
                                        </CardContent>
                                        <CardActions className="post-footer">
                                            <Box width="100%" display="flex" flexDirection="column" alignItems="left">
                                                <PostLikes likes={userPost.numLikes} />
                                                <PostComments baseId={userPost.id} postUser={userPost.username} />
                                            </Box>
                                        </CardActions>
                                    </Card>
                                ))
                            }
                        </Box>) : ""
                }
                
                </div>
        )
    }
}

export default Home;