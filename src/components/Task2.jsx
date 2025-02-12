import { useEffect, useState } from "react"
import classes from './task.module.css'

const Task2 = () => {
    const [str, setNewStr] = useState('racecar');
    const [result, setResult] = useState(null);  // To store the result

    // loop concept
    useEffect(() => {
        for (let i = 0; i < str.length; i++) {
            let left = "";
            let right = "";
            
            // Construct the left part manually
            for (let j = i - 1; j >= 0; j--) {
                left += str[j];
            }
            
            // Construct the right part manually
            for (let j = i + 1; j < str.length ; j++) {
                right += str[j];
            }
            
            if (left === right) {
                setResult(i);  // Set the result when condition is met
                return;
            }
        }
        
        setResult(-1);  // If no palindrome index is found
    }, [str]);  // Adding str to the dependency array ensures the effect runs when str changes.

    // predefined concept
    // useEffect(() => {
          
    // for (let i = 0; i < str.length; i++) {
    //     let left = str.slice(0, i).split('').reverse().join('');
    //     let right = str.slice(i + 1);
        
    //     if (left === right) {
    //         setResult(i)
    //         return;
    //     }
    // }
    
    // setResult(-1);

    // },[str])

    return (
        <section>
           <div>
           <p className={classes.uniqueNum}>
               {result !== null ? `Palindrome index: ${result}` : "No palindrome index found."}
               </p>
           </div>
        </section>
    );
};

export default Task2;
