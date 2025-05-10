export default function UserPanel(props) {
    return (
        <div>
            <h2>Witaj {props.username}!</h2>
            <a href="#" onClick={props.onLogout}>Wyloguj</a>
        </div>
    );
}
