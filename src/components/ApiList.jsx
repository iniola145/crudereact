import React, {useContext} from 'react'
import { Context } from './Context';
import ApiItems from './ApiItems';

const ApiList = () => {
    let {posts, deleteReview} = useContext(Context);
    
  return (
    <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap', padding: '20px', alignItems: 'center'}}>
        {posts.map((x) => (
            <ApiItems key={x.id} tunde={x} deleteItem={deleteReview}/>
        ))}
    </div>
  )
}

export default ApiList