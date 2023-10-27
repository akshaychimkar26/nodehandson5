import NavBar from '../../components/Navbar/Navbar'
import style from './homepage.module.css'
import chat_pic from '../../static/chat_2.jpg'


function HomePage() {



  return (
    <>
        <NavBar/>
        <div className={style.home_ctn}>
          <div className={style.left}>
            <img className={style.homepage_img} src={chat_pic} alt="err"/>
          </div>
         <div className={style.right}>
          <div className={style.cht_head}>ChatSocket - Chat with friends and meet them online</div>
         </div>
        </div>
        </>
  )
}

export default HomePage