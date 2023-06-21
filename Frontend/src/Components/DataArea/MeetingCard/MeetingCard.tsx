import MeetingModel from "../../../Models/meetingsModel";
import "./MeetingCard.css";

interface MeetingCardProps {
	meeting: MeetingModel;
}

function MeetingCard(props: MeetingCardProps): JSX.Element {
    return (
        <div className="MeetingCard Box">
			<h3>Meeting details</h3>
            <span><b>From: </b>{props.meeting.startMeeting}</span> <br/><br/>
            <span><b>To: </b>{props.meeting.endMeeting}</span> <br/><br/>
            <span><b>Description: </b>{props.meeting.description}</span> <br/><br/>
            <span><b>Room: </b>{props.meeting.meetingRoom}</span> <br/><br/>
        </div>
    );
}

export default MeetingCard;
