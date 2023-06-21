import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import DevGroupModel from "../../../Models/devGroupModel";
import MeetingModel from "../../../Models/meetingsModel";
import dataService from "../../../Services/DataService";
import "./Insert.css";

function Insert(): JSX.Element {

    // useForm for send the data from the form to the backend
    const {register, handleSubmit} = useForm<MeetingModel>();

    // get all the DevGroups for put them in the form select
    const [groups, setGroups] = useState<DevGroupModel[]>([]);
    useEffect(()=>{
        dataService.getAllDevGroups()
            .then(g => setGroups(g))
            .catch(err => alert(err.message));
    },[]);

    // for go back to the home site
    const navigate = useNavigate()

    async function sendForm(meeting: MeetingModel){
        try {
            await dataService.addNewMeeting(meeting);
            alert("the meeting added successfully!!")
            navigate("/home");
            
            
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div className="Insert">
            <form onSubmit={handleSubmit(sendForm)}>
			    <h2>Insert New Meeting:</h2>
                <label>Development Group: </label>
                <select defaultValue="" {...register("devGroupId")} required>
                    <option value="" disabled>Select group</option>
                    {groups.map(g => <option key = {g.devGroupId} value={g.devGroupId}>{g.devGroupName}</option>)}
                </select> <br/>

                <label>From: </label>
                <input type="datetime-local" {...register("startMeeting")} required/> <br/>
                
                <label>To: </label>
                <input type="datetime-local" {...register("endMeeting")} required/> <br/>

                <label>Description: </label>
                <input type="textarea" {...register("description")} required maxLength={100}/> <br/>

                <label>Room: </label>
                <input type="text" {...register("meetingRoom")} required maxLength={100}/> <br/>

                <button>Add</button>
                
            </form>
        </div>
    );
}

export default Insert;
