import l from './layout.module.css'

const Layout = ({title, desc, urlBg, colorBg}) =>{
    console.log('######bgc', colorBg);
    const lBackground = urlBg ? {backgroundImage : `url(${urlBg})`} : {backgroundColor : colorBg};
    return(
    <>
        <section class={l.root} style = {lBackground}>
            <div class="wrapper">
                <article>
                    <div class={l.title}>
                        <h3>{title}</h3>
                        <span class={l.separator}></span>
                    </div>
                    <div class={l.desc, l.full}>
                        <p>{desc}</p>
                    </div>
                </article>
            </div>
        </section>
    </>
    );
}

export default Layout;
