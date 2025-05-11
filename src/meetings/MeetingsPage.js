import { useState } from "react";
import NewMeetingForm from "./NewMeetingForm";
import MeetingsList from "./MeetingsList";

export default function MeetingsPage({ meetings, setMeetings, loggedIn }) {
    const [showForm, setShowForm] = useState(false);

    function handleNewMeeting(meeting) {
        const newMeeting = {
            ...meeting,
            attendees: []
        };
        setMeetings([...meetings, newMeeting]);
        setShowForm(false);
    }

    function handleSignUp(index) {
        const updated = [...meetings];
        const meeting = updated[index];
        if (!meeting.attendees.includes(loggedIn)) {
            meeting.attendees.push(loggedIn);
            setMeetings(updated);
        }
    }

    function handleDelete(index) {
        const updated = [...meetings];
        updated.splice(index, 1);
        setMeetings(updated);
    }

    return (
        <div>
            <h2>Zajęcia</h2>
            <button onClick={() => setShowForm(true)}>Dodaj spotkanie</button>

            {showForm && (
                <NewMeetingForm onSubmit={handleNewMeeting} />
            )}

            {meetings.length > 0 ? (
                <MeetingsList
                    meetings={meetings}
                    onSignUp={handleSignUp}
                    onDelete={handleDelete}
                />
            ) : (
                <p>Brak spotkań.</p>
            )}
        </div>
    );
}
