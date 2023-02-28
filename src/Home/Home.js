import { useState } from "react"

import Header from "../Header/Header";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";

const Home = () => {

    let allCategory = [
        {label: "Explore", value:"Explore"},
        {label: "Search", value:"Search"},
        {label: "Hotels", value:"Hotels"},
        {label: "Offers", value:"Offers"}
    ]

    let allDestination = [
        {name:"Paris", cost: "$699", imageURL: "ParisImage.png", id:1},
        {name:"Greece", cost: "$1079", imageURL: "GreeceImage.png",id:2},
        {name:"Norway", cost: "$895", imageURL: "NorwayImage.png",id:3},
        {name:"Paris", cost: "$699", imageURL: "TuscanyImage.png",id:4}
    ]

    let recommendedHoliday = [
        {name:"Ball", cost:"$899", imageURL: "Ball.png",days: "4D3N",id:1},
        {name:"Swiss", cost:"$900", imageURL: "Swiss.png",days: "6D5N", id:2},
        {name:"Boracay", cost:"$699", imageURL: "BoracayImage.png",days: "5D4N", id:3},
        {name:"Palawan", cost:"$789", imageURL: "PalawanImage.png",days: "4D3N", id:4}
    ]

    const [category , setCategory] = useState(["Explore"]);

    const handleCategoryChange = (data) => {
        const val = data.value;
        if(val === "Explore"){
            setCategory(["Explore"])
        }else{
            setCategory(val)
        }

    }


    return (
        <div>
            <Header
            allCategory = {allCategory}
            handleCategoryChange = {handleCategoryChange}
            select = {category}
             />

             <Content
             allDestination = {allDestination}
             recommendedHoliday = {recommendedHoliday}
             />

             <Footer
             />
     
        </div>
    )

}


export default Home