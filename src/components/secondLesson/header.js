import h from './header.module.css';

const Header = () => {
    return(
        <header class={h.root}>
            <div class={h.forest}>

            </div>
            <div class={h.container}>
                <h1>This is title</h1>
                <p>This is Description!</p>
            </div>
        </header>
    );
}

export default Header;