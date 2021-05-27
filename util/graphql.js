

import {  gql } from "@apollo/client";

export const FETCH_POSTS_QUERY = gql`
 
{
getPosts{
createdAt
body
id
likes {
        username
      }
username
comments{
  id
  body
  username
  
}
commentCount
likeCount
}
}

`;

export 
const FETCH_POST_QUERY = gql`
 query getPost($postid:ID!){
    getPost(postid: $postid) {
      id
      body
      createdAt
      username
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;


 