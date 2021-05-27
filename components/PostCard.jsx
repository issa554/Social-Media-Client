
import moment from "moment"
import {useContext} from 'react'
import Link from 'next/link'
import { AuthContext } from '../context/auth';
import StarBtn from './StarBtn'
import DeleteBtn from './DeleteBtn'
import AddCommint from './AddCommint'
const PostCard = ({post:{createdAt,body,id,username,commentCount,likeCount },post}) => {
  
  const { user } = useContext(AuthContext);
    return (

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

<StarBtn  user={user} posto={post} />
</div>
 

          <p>
          {likeCount} likes
            </p>  
        </div>
      {user && user.username === username && (
        <DeleteBtn id={id} />
    
      )}
      <AddCommint id={id}  />
    <Link href={`/post/${id}`}>
      
      <div class="text-sm mb-2 text-gray-400 cursor-pointer font-medium">View all {commentCount} comments</div>
      </Link>
      <div class="mb-2">
        <div class="mb-2 text-sm">
        </div>
      </div>
    </div>
  </div>
    )
}

export default PostCard
