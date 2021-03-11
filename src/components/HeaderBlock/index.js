import s from './style.module.css'

console.log('##### s: ', s);
const HeaderBlock = ({ title, hideBackground = false, descr}) => {
    const styleRoot = hideBackground ? {background: 'none'} : {};
    return (
        <div className={s.header} style = {styleRoot}>
            <div className={s.header_container}>
                {
                   title ? (<h1 className={s.header_container__h}>
                                {title}
                            </h1>) : null
                }
                {
                   descr && <p className={s.header_conatiner__paragraph}>
                        {descr}
                    </p>
                }
            </div>
        </div>
    );
};

export default HeaderBlock;