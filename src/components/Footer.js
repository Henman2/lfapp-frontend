const Footer = ()=>{
    const currentYear = new Date().getFullYear();
    return (
        <footer className="App-footer f6 pv4 ph3 ph5-m ph6-l"><b className="ttu">Designed by Henry </b>
            <small className="f6 db tc">©{currentYear}, All Rights Reserved</small>
            <div className="tc mt3">
            <a href="/language/" title="Language" className="f6 dib ph2 link mid-gray dim">Language</a>
            <a href="/terms/"    title="Terms" className="f6 dib ph2 link white dim">Terms of Use</a>
            <a href="/privacy/"  title="Privacy" className="f6 dib ph2 link mid-gray dim">Privacy</a>
            </div>
        </footer>
    )

}
export default Footer;