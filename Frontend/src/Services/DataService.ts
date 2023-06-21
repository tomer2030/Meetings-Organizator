import axios from "axios";
import DevGroupModel from "../Models/devGroupModel";
import MeetingModel from "../Models/meetingsModel";
import appConfig from "../Utils/Config";

class DataService {

    // func for get all the DevGroups
    public async getAllDevGroups(): Promise<DevGroupModel[]> {
        
        // do an AJAX request:
        const response = await axios.get<DevGroupModel[]>(appConfig.groupsUrl);
        const devGroups = response.data;
        return devGroups;
    }

    // func for get all the meetings for one DevGroup
    public async getAllMeetingForOneDevGroup(groupId: number): Promise<MeetingModel[]> {

        // do an AJAX request:
        const response = await axios.get<MeetingModel[]>(appConfig.meetingsUrl + groupId);
        const meetings = response.data;
        return meetings;
    }

    // func for get all the meetings for one DevGroup
    public async addNewMeeting(meeting: MeetingModel): Promise<MeetingModel> {

        // do an AJAX request:
        const response = await axios.post<MeetingModel>(appConfig.meetingsUrl, meeting);
        
        // return the added meeting with the id of the meeting
        const addedMeeting = response.data;
        return addedMeeting;
    }

}

const dataService = new DataService();

export default dataService;