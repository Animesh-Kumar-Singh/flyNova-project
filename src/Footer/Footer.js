import {TextField, Stack, Button, Link} from '@mui/material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import "./Footer.css"

const Footer = () => {


    return (
        <div>
            <div className="suscribe-section" >
                <div className="footer-suscribe">
                    <p style={{color:"#1262AF"}}>SUSCRIBE TO OUR NEWSLETTER</p>
                    <h2 style={{margin:"0"}}>Get weekely updates</h2>
                </div>
                <div className='footer-text'>
                    <Stack spacing={1.5}>
                    <p>Fill in your details to join the party!</p>

                    <TextField
                    fullWidth
                    placeholder='Your name'
                    variant="outlined"
                    />

                    <TextField
                    fullWidth
                    placeholder='Email address'
                    variant="outlined"
                    /> 

                    <span>
                    <Button variant="contained" style={{ backgroundColor: 'orange' }}>
                        Submit
                    </Button>
                    </span>

                    </Stack>
                </div>
            </div>
            <div className='footer-info'>
                <div className='sub-footer-info'>
                    <div>
                        <img src="logoWhite.png" alt="logo" />
                    </div>
                    <div style={{color: "white"}}>
                        <p>
                        Fickle Flight is your one-stop travel portal. We offer hassle free flight<br/> and hotel bookings. We also have all your flight needs in you online<br/> shop.
                        </p>
                    </div>
                    <div style={{display:"flex", justifyContent:"flex-start", alignItems:"center"}}>
                        <Stack direction={"row"} spacing={1.5}>
                            <FacebookRoundedIcon style={{color:"white"}}/>
                            <img src="insta.png" alt='logo-instagram' />
                            <img src="tweeter.png" alt='logo-tweeter' />
                        </Stack>

                    </div>
                </div>
                <div className='line'>
                </div>
                <div style={{display:"flex", justifyContent:"space-between",alignItems:"center"}}>
                    <div style={{marginLeft:"1%"}}>
                        <h5 className='link'>Company</h5>
                        <a href='#' className='link' style={{textDecoration:'none'}}><h6>about Us</h6></a>
                        <a href='#' className='link' style={{textDecoration:'none'}}><h6>News</h6></a>
                        <a href='#' className='link' style={{textDecoration:'none'}}><h6>Careers</h6></a>
                        <a href='#' className='link' style={{textDecoration:'none'}}><h6>How we work</h6></a>
                    </div>
                    <div style={{marginLeft:"1%"}}>
                        <h5 className='link'>Support</h5>
                        <a href='#' className='link' style={{textDecoration:'none'}}><h6>Account</h6></a>
                        <a href='#' className='link' style={{textDecoration:'none'}}><h6>Support Center</h6></a>
                        <a href='#' className='link' style={{textDecoration:'none'}}><h6>FAQ</h6></a>
                        <a href='#' className='link' style={{textDecoration:'none'}}><h6>Accessibility</h6></a>
                    </div>
                    <div style={{marginLeft:"1%"}}>
                        <h5 className='link'>More</h5>
                        <a href='#' className='link' style={{textDecoration:'none'}}><h6>Covid Advisory</h6></a>
                        <a href='#' className='link' style={{textDecoration:'none'}}><h6>Airline Fees</h6></a>
                        <a href='#' className='link' style={{textDecoration:'none'}}><h6>Tips</h6></a>
                        <a href='#' className='link' style={{textDecoration:'none'}}><h6>Quaratine Rules</h6></a>
                    </div>
                    

                </div>
            </div>
        </div>
    )
}

export default Footer
