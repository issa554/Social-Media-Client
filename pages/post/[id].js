
import Layout from "../../components/Layout"
import { useRouter } from 'next/router'
import { useQuery , gql } from "@apollo/client";
import {FETCH_POST_QUERY} from '../../util/graphql'
import moment from "moment"
import {useContext} from 'react'
import { AuthContext } from '../../context/auth';
import StarBtn from '../../components/StarBtn'
import DeleteBtn from '../../components/DeleteBtn'
import DeleteBtnCo from '../../components/DeleteBtnComent'

import AddCommint from '../../components/AddCommint'


const Post = () => {
  const { user } = useContext(AuthContext);
  const router = useRouter()
  const { id } = router.query
  const {
    data 
  } = useQuery(FETCH_POST_QUERY , {
    variables: { postid: id }
  });
  let postMarkup;
  if (!data) {
    postMarkup = <p>Loading post..</p>;
  } else {
    const {
      
      body,
      createdAt,
      username,
      comments,
      likes,
      likeCount,
      commentCount
    } = data.getPost;

    postMarkup = (



      

<>
<h1>refresh to update</h1>
<div className="bg-green-300 m-5 rounded w-4/5 ">
    <div class="w-full flex justify-between p-3">
      <div class="flex">
      <div class="bg-gray-300 rounded-full avatar placeholder">
  <div class="rounded-full h-10 w-10 flex items-center justify-center">
    <span>{username[0]}</span>
  </div>
</div>

        <div class="pl-5 mb-2 text-sm">
          <span class="text-lg mr-2 text-black">{username}</span> 
        </div>
   </div>
      {moment(createdAt).fromNow(true)}
      <span class="px-2 hover:bg-gray-300 cursor-pointer rounded"><i class="fas fa-ellipsis-h pt-2 text-lg"></i></span>
    </div>
  <div class="px-3 pb-2">
      <div class="pt-2">
        <i class="far fa-heart cursor-pointer"></i>
       
       
      
 
        {body}
      </div>
        <div className="flex">
<div className="mr-4 ">

<StarBtn  user={user} posto={data.getPost} />
</div>
 

          <p>
          {likeCount} likes
            </p>  
        </div>
      {user && user.username === username && (
        <DeleteBtn id={id} />
    
      )}
      <AddCommint id={id}  />
   {comments.map((com) =>(
     <div  key={com.id} className="flex justify-between bg-green-200 m-3 rounded h-10">
       <div  className="flex ">

       <p className="-right-0">
         @{com.username} : {com.body}
       </p>
         </div>
         {user && user.username === com.username && (
        <DeleteBtnCo id={id} commentid={com.id} />
    
      )}
       </div>
   ))}
      <div class="mb-2">
        <div class="mb-2 text-sm">
        </div>
      </div>
    </div>
  </div>


   
    </>
    )
  }
  return(
  <Layout>
    {postMarkup}
  </Layout>)
}
export default Post




