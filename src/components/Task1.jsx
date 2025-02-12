import { useEffect, useState } from "react"
import classes from './task.module.css'

const Task1 = () => {
    const [mainArr,setMainArr] = useState([4, 10, 5, 4, 2, 10])
    const [newArr,setNewArr] =useState([])

    // loop method

     useEffect(() => {
      const uniqueArr =[]

        for (let i = 0; i < mainArr.length; i++) {
        let isDuplicate = false;

      // Check if the current element repeats elsewhere in mainArr
     for (let j = 0; j < mainArr.length; j++) {
    if (i !== j && mainArr[i] === mainArr[j]) {
      isDuplicate = true; // Mark as duplicate
      break; // Exit the inner loop
    }
    }

  // If it's not a duplicate, add it to newArr
     if (!isDuplicate) {
    uniqueArr.push(mainArr[i]);
     }

}
setNewArr(uniqueArr);
     },[mainArr])


// predefined Method

    //  useEffect(() => {
    //       let uniqueArr = []
    //       uniqueArr = mainArr.filter((value, index, array) =>  array.indexOf(value) === array.lastIndexOf(value));
    //       setNewArr(uniqueArr)
    //  },[mainArr])

    return (
        <section>
            <div>
            <p className={classes.uniqueNum}>
            {newArr.length > 0 ? `The First Unique Number is: ${newArr[0]}` : "There are no Unique Numbers: -1"}
             </p>
            </div>
        </section>
    )
}

export default Task1