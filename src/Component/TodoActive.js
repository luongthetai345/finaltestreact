import { useState } from "react";

const JOB_KEY = "JOB_LIST";

export default function TodoActive(){
    const [job, setJob] = useState("");
    const [jobList, setJobList] = useState(() => {
        const storageJobList = JSON.parse(localStorage.getItem(JOB_KEY));
        return storageJobList ?? [];
    })
    const handleAddJob = () => {
        if (job === "" ){
            return;
        }
        setJobList((prevState) => {
            const newJobList = [...prevState, job];
            const jsonJobList = JSON.stringify(newJobList);
            localStorage.setItem(JOB_KEY, jsonJobList);
            return newJobList;
        });
        setJob("");
    };
    const deleteJob = () => {
        
    }


    return(
        <div className="Todo">
            <div className="inputbox">
                <input type="text" value={job} onChange={(e) => setJob(e.target.value)}/>
                <div className="Add">
                    <input type="submit" value="Add" onClick={handleAddJob}/>
                </div>
            </div>
            <div>
                <ul>
                    {jobList.map((job, index) => (
                        <li>
                            <input type="checkbox" />
                            <p key = {index}>{job}</p>
                            <button>delete</button>
                        </li>
                    ))}
                </ul>
            </div> 
            <div  className="delete">
                <input type="submit" value="Delete All" />
            </div> 
        </div>
    )
}