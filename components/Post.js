

import PostCard from "./PostCard"
import { useQuery } from "@apollo/client";
import {FETCH_POSTS_QUERY} from '../util/graphql'
import CreatePost from '../components/CreatePost'

import {useContext} from 'react'
import {AuthContext} from '../context/auth'

export default function Post() {
  const { data, loading, error } = useQuery(FETCH_POSTS_QUERY);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  const posts = data.getPosts
  const {user} = useContext(AuthContext)
  return (
    <div>

    

   {user && <CreatePost /> }
   <div class="grid lg:grid-cols-2 md:gap-cols-1 center">

      {posts.map((post)=>{
        return <div key={post.id} >

          <PostCard post={post} />
        </div> 
        
      })}
   
      
</div></div>
  );
}