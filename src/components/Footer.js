const Footer = ()=>{
    const currentYear = new Date().getFullYear();
    return (
        <footer className="App-footer">
            <p>Copyright ©{currentYear}</p>
        </footer>
    )

}
export default Footer;