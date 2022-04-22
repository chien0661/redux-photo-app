import { useNavigate } from "react-router-dom"
import Banner from "../../../../components/Banner"
import Images from '../../../../constants/images';

const MainPage = () => {

    const navigate = useNavigate()

    const handleClickAdd = () => {
        navigate('1')
    }
    return (
        <div>
            <Banner title="🎉 Your awesome photos 🎉" backgroundUrl={Images.PINK_BG} />
            <h1>Main page</h1>
            <button onClick={handleClickAdd}>Add new photo</button>
        </div>
    )
}

export default MainPage