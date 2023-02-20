import classes from "./Menu.module.css"
import  gitIco from "./images/git_ico.svg"
import  themeIco from "./images/sun.svg"
function Menu(){
    return (
        <div className={classes.menu}>
            <a href={"https://github.com/ExXxMachine"}>
                <button className={classes.menu__button}> <img src={gitIco} alt={"git button"}/></button>
            </a>
            <button className={classes.menu__button}><img src={themeIco} alt={" theme button"}/></button>
        </div>
    );
}
export default Menu;