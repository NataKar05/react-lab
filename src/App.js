import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
    const [email, setEmail] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        if (email.trim() !== '') {
            setIsLoggedIn(true);
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setEmail('');
    };

    return (
        <div style={{ border: '1px solid lightgray', padding: '20px' }}>
            <h1>Witaj w systemie do zapisów na zajęcia</h1>

            {isLoggedIn ? (
                <>
                    <h2>Witaj {email}!</h2>
                    <a href="#" onClick={handleLogout}>Wyloguj</a>
                </>
            ) : (
                <>
                    <label>
                        Zaloguj się e-mailem{' '}
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <button type="button" onClick={handleLogin}>
                        Wchodzę
                    </button>
                </>
            )}
        </div>
    );
}

export default App;
