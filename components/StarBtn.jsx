
import {useState , useEffect} from 'react'
import Link from 'next/link'

import { StarIcon } from '@heroicons/react/outline'
import StarIconS from '@heroicons/react/solid/StarIcon'
import {useMutation , gql} from '@apollo/client'

const StarBtn = ({user, posto:{likes , id} }) => {
  
    const [like, setLike ]= useState(false)
    useEffect(()=>{
        if(user && likes.find(like => like.username === user.username)){
            setLike(true)
        }else{
            setLike(false)
        }
    },[likes , user ])

   
    const [likePost] = useMutation(LIKE_POST_MUTATION, {
      onError(err) {
    
       console.log(err)
      },
        variables: { postid: id }
      });
    return (
        <div>

           {user ? (
        like ? (
            <button onClick={likePost} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            <StarIconS className="h-5 w-5 text-yellow-500"/>       
    </button>
        ) :(
            <button onClick={likePost}  className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            <StarIcon className="h-5 w-5 text-yellow-500"/>       
    </button>
        )
    ) :(
      <Link href="/login">
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
        <StarIcon className="h-5 w-5 text-yellow-500"/>       
</button>
      
      </Link>

    )}
        </div>
    )
}

export default StarBtn



const LIKE_POST_MUTATION = gql`
  mutation likePost($postid: String!) {
    likePost(postid: $postid) {
      id
      likes {
        id
        username
      }
      likeCount
    }
  }
`;