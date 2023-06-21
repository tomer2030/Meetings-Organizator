import { ChangeEvent, useEffect, useState } from "react";
import DevGroupModel from "../../../Models/devGroupModel";
import MeetingModel from "../../../Models/meetingsModel";
import dataService from "../../../Services/DataService";
import MeetingCard from "../MeetingCard/MeetingCard";
import "./List.css";

function List(): JSX.Element {

    // state for the devGroups
    const [groups, setGroups] = useState<DevGroupModel[]>([]);

    // state for the meetings
    const [meetings, setMeetings] = useState<MeetingModel[]>([]);

    // useEffect for get all the devGroup 
    useEffect(()=>{
        dataService.getAllDevGroups()
            .then(g => setGroups(g))
            .catch(err => alert(err.message));
    },[]);

    // use the function as a callback for change Event when the user choose the devGroup. it send back the meeting of the devGroup that chosen
    async function submitMeetings(args: ChangeEvent<HTMLSelectElement>): Promise<void>{
        const value = +args.target.value;
        dataService.getAllMeetingForOneDevGroup(value)
            .then(m => setMeetings(m))
            .catch(err => alert(err.message));
    }

    return (
        <div className="List">
			<h2>List Of all The meetings</h2>
            <label>Select the development group: </label>
            {/* the selection of all the groups: */}
            <select defaultValue="" onChange={submitMeetings}>
                <option value="" disabled>Select team</option>
                {groups.map(g => <option key = {g.devGroupId} value={g.devGroupId}>{g.devGroupName}</option>)}
            </select>
            <br/>

            {/* print the meetings: */}
            {meetings.map(m => <MeetingCard key={m.meetingId} meeting={m}/>)}

        </div>
    );
}

export default List;
