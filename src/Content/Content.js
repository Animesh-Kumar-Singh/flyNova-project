import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import "./Content.css"
const Content = ({allDestination, recommendedHoliday}) => {



    return (
        <div className='parent-content'>
            <div>
                <div className='destination-title'>
                    <div className='destination-subTitle' >
                        <p style={{color:"#1262AF"}}>PLAN YOUR NEXT TRIP</p>
                        <h3>Most Popular Destinations</h3>
                    </div>
                    <div>
                        <div style={{display:"flex",alignItems:"center",color:"#1262AF"}}><p>View all destinations <ArrowForwardOutlinedIcon /> </p></div>
                    </div>
                </div>
                <Grid container spacing={1}>
                    {
                        allDestination.map((place) => (
                            <Grid item md={3} sm={6} key={place.id}>
                              <a href='#' style={{textDecoration:'none'}}>
                                <Card className='image' sx={{ maxWidth: 280 }} >
                                    <CardMedia 
                                    sx={{ height: 182 }}
                                    image={place.imageURL}
                                    title= {place.name}
                                    ><div style={{display:"flex",color:"white", justifyContent:"space-between"}}>
                                        <div>
                                               <strong>
                                                <h4>
                                                
                                                    {place.name}
                                                
                                                </h4>
                                                </strong>

                                        </div>
                                        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                                        <h4>
                                                FROM
                                        </h4>                                           
                                        <h2>
                                            {place.cost}
                                        </h2>
                                        
                                        </div>

                                    </div></CardMedia>
                                    
                                </Card>
                              </a>
                            </Grid >
                        ))
                    }
                </Grid>
            </div>

            <div className='recommended-holiday'>
                <div className='sub-recommended-tray'>
                    <h3>Recommended Holidays</h3>
                    <p style={{display:"flex",alignItems:"center",color:"#1262AF"}}>view all holidays <ArrowForwardOutlinedIcon /> </p>
                </div>
                <Grid container spacing={1}>
                    {
                        recommendedHoliday.map((place) => (
                            <Grid item md={3} sm={6} key={place.id}>
                                <Card sx={{ maxWidth: 288 }} key={place.id} >
                                    <CardMedia 
                                    sx={{ height: 182 }}
                                    image={place.imageURL}
                                    title= {place.name}                                   
                                    />
                                    <div className='recommend-holiday-content'>
                                        <div className='recommend-holiday-subContent'>
                                            <div className='name'><h4>{place.name}</h4></div>
                                            <div>{place.days}</div>
                                        </div>
                                        <div ><h2 className='cost'>{place.cost}</h2></div>
                                    </div>

                                </Card>
                            </Grid>
                        ))
                    }
                </Grid>

            </div>
        </div>
    )
}

export default Content