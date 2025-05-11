export default function MeetingsList({ meetings, onSignUp, onDelete }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Nazwa spotkania</th>
                    <th>Opis</th>
                    <th>Akcja</th>
                    <th>Zapisani</th>
                    <th>Usuń</th>
                </tr>
            </thead>
            <tbody>
                {meetings.map((meeting, index) => (
                    <tr key={index}>
                        <td>{meeting.title}</td>
                        <td>{meeting.description}</td>
                        <td>
                            <button onClick={() => onSignUp(index)}>
                                Zapisz się
                            </button>
                        </td>
                        <td>
                            {meeting.attendees.length > 0
                                ? meeting.attendees.join(', ')
                                : 'brak'}
                        </td>
                        <td>
                            <button onClick={() => onDelete(index)}>
                                Usuń
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}