import AnimalList from "../../components/AnimalList/AnimalList"
import { useUserContext } from "../../context/UserContext"
import notify from "../../utils/notify"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import "./HomePage.css"


const HomePage = ({ platformAnimals }) => {
    const { buyAnimal } = useUserContext()

    const handleBuyAnimal = (animal) => {
        const res = buyAnimal(animal)
        if (res.status) {
            notify(res.message, "success")
        } else {
            notify(res.message, "error")
        }
    }
   const popularAnimals = [...platformAnimals]
        .sort((a, b) => b.price - a.price)
        .slice(0, 4)

    return (
        <main>
            <section className="home-slider">
                <div className="container">
                    <Swiper
                        cssMode={true}
                        navigation={true}
                        pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Common_dolphin_noaa.jpg/1280px-Common_dolphin_noaa.jpg" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Naja_naja_juvenile_%28Karnataka%29.jpg/1280px-Naja_naja_juvenile_%28Karnataka%29.jpg" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Rhinoceros_male_2003.jpg/1280px-Rhinoceros_male_2003.jpg" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Cheetah_%28Acinonyx_jubatus%29_female_2_cubs.jpg/1280px-Cheetah_%28Acinonyx_jubatus%29_female_2_cubs.jpg" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Brown_bear.jpg" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Dasyatis_americana_bonaire.jpg" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Canis_lupus_laying_in_grass.jpg/1280px-Canis_lupus_laying_in_grass.jpg" alt="" /></SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <section className='home-animals'>
                <div className="container">
                    <h1>Популярні тварини</h1>
                    <AnimalList animals={popularAnimals} onAction={handleBuyAnimal} actionBtnText={"Купити"} />
                </div>
            </section>
        </main>
    )
}

export default HomePage 
