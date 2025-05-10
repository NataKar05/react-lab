import './App.css';
import { useState } from 'react';
import LoginForm from './LoginForm';
import UserPanel from './UserPanel';
import MeetingsPage from './meetings/MeetingsPage'; // uwzględnij ścieżkę

function App() {
    const [loggedIn, setLoggedIn] = useState(null);

    const login = (username) => {
        setLoggedIn(username);
    };

    const logout = () => {
        setLoggedIn(null);
    };

    return (
        <div className="app-container">
            <h1>System do zapisów na zajęcia</h1>
            {
                loggedIn
                    ? (
                        <>
                            <UserPanel username={loggedIn} onLogout={logout} />
                            <MeetingsPage />
                        </>
                    )
                    : <LoginForm onLogin={login} />
            }
        </div>
    );
}

export default App;
