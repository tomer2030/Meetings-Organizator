import { OkPacket } from "mysql";
import dal from "../2-utils/dal";
import DevGroupModel from "../4-models/dev-group-model";
import MeetingModel from "../4-models/meetings-model";

// return all the development groups
async function getAllDevGroups():Promise<DevGroupModel[]> {
    const sql = `
        SELECT * FROM devGroups;
    `;
    const groups = await dal.execute(sql);
    return groups;
}

// return the meetings for only one group by groupId
async function getMeetingsForOneGroup(groupId: number):Promise<MeetingModel[]> {
    const sql = `
        SELECT
            meetingId,
            DATE_FORMAT(startMeeting, '%d/%m/%y %T') AS 'startMeeting',
            DATE_FORMAT(endMeeting, '%d/%m/%y, %T') AS 'endMeeting',
            description,
            meetingRoom
        FROM meetings
        WHERE meetings.devGroupId = ?;
    `;
    const meetings = await dal.execute(sql, groupId);
    return meetings;
}

// return the meetings for only one group by groupId
async function addNewMeeting(meeting: MeetingModel):Promise<MeetingModel> {
    const sql = `
        INSERT INTO meetings
        VALUES(
            DEFAULT, ?, ?, ?, ?, ?
        );
    `;

    // an array for all the data that will send to the DB
    const values = [meeting.devGroupId, meeting.startMeeting, meeting.endMeeting, meeting.description, meeting.meetingRoom] 
    const info: OkPacket = await dal.execute(sql, values);
    
    // add the new id of the meeting for return to the front
    meeting.meetingId = info.insertId;
    return meeting;
}

export default {
    getAllDevGroups, getMeetingsForOneGroup, addNewMeeting
};
