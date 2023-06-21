class MeetingModel {
    public meetingId: number;
    public devGroupId: number;
    public startMeeting: Date;
    public endMeeting: Date;
    public description: string;
    public meetingRoom: string;

    public constructor(meeting: MeetingModel){
        this.meetingId = meeting.meetingId;
        this.devGroupId = meeting.devGroupId;
        this.startMeeting = meeting.startMeeting;
        this.endMeeting = meeting.endMeeting;
        this.description = meeting.description;
        this.meetingRoom = meeting.meetingRoom;
    }
}

export default MeetingModel;