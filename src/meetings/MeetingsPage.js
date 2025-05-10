import { useState } from "react";
import NewMeetingForm from "./NewMeetingForm";
import MeetingsList from "./MeetingsList";

export default function MeetingsPage() {
    const [meetings, setMeetings] = useState([]);
    const [showForm, setShowForm] = useState(false);

    function handleNewMeeting(meeting) {
        setMeetings([...meetings, meeting]);
        setShowForm(false);
    }

    return (
        <div>
            <h2>Zajęcia</h2>
            <button onClick={() => setShowForm(true)}>Dodaj spotkanie</button>

            {showForm && (
                <NewMeetingForm onSubmit={handleNewMeeting} />
            )}

            <MeetingsList meetings={meetings} />
        </div>
    );
}
