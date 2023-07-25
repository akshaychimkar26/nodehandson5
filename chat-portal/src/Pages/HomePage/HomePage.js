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
          <div className={style.cht_sub}>This is chat-application where people can chat with each other via online without any interupptions.This is a way to communicate with people they can share their feelings,talks and much more.</div>
         </div>
        </div>
        </>
  )
}

export default HomePage