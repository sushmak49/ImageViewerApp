var Config =
{
    "auth": {
        "access-token": "IGQVJWaFJycDR0VVkzSFdGSzVwRWU4OFBCallqd00wdmN2RFdaWTc5aElIWVRvYVd1NkJ6T21aczJSRWdjeXpFTG1TSnczOGdXZA19uMnhNdTRaQVdlSzFkaU9NUDlMQ3ZA4aHBXOWtObndLTk1yZA2RDMVIyRUJTak9UZA3lz"
    },
    "api": 
    {
        "mock": false,
        "endpoints": 
        [
            {
                "name": "Get Posts",
                "uri": "https://graph.instagram.com/me/media?fields=id,caption&access_token=$accessToken"
            },
            {
                "name": "Get Post Details",
                "uri": "https://graph.instagram.com/$postId?fields=id,media_type,media_url,username,timestamp&access_token=$accessToken"
            }
        ]
    }
};
export default Config;