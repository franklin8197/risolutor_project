import {useState} from "react"
import classes from './like.module.css'

const Like = () => {
    const [likeCount,setLikeCount] = useState(100)
    const [isLiked,setIsLiked] = useState(false)

    const handleButton = () => {
        setIsLiked((prev) => !prev);
        setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1))
    }

    return (
        <section className={`buttonWrapper`}>
             <section className="buttonWrapper">
  <button className={`${classes.likeButton} ${isLiked ? classes.liked : ''}`} onClick={handleButton}>
  <span className={classes.likesCounter}>Like | {likeCount}</span>
  </button>
</section>

        </section>
    )
}

export default Like