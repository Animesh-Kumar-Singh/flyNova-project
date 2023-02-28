import "./Header.css"
import NotificationAddOutlinedIcon from '@mui/icons-material/NotificationAddOutlined';

const Header = ({allCategory, handleCategoryChange, select}) => {

    


    return (
        <div className="container-header">
            <div>
                <img src="Combined-Shape.png" alt="logo" />
            </div>
            <div className="category">
                {
                    allCategory.map((item) => (
                        <div
                        onClick={()=> handleCategoryChange(item)}
                        key = {item.value}
                        className = {select.includes(item.value)
                            ? "category-btn selected-btn"
                            : "category-btn"
                        }
                        >
                            {item.label}
                        </div>
                    ))
                }
                <div>
                    <NotificationAddOutlinedIcon />
                </div>
            </div>

        </div>
    )
}

export default Header