import h from './header.module.css';

const Header = ({descr, title}) => {
    return(
    <>
        <header class={h.root}>
            <div class={h.forest}>

            </div>
            <div class={h.container}>
                <h1>{title}</h1>
                <p>{descr}</p>
            </div>
        </header>
    </>
    );
}

export default Header;