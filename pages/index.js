import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import code from "../public/screen.png"
import {useSession,signIn,signOut} from  "next-auth/react"

export default function Home() {

  const session= useSession();
  console.log('session', session);
  if(session.data === null){
       return <button onClick={signIn}>Login</button> 
  }
  return (
    <div className={styles.container}>
      <h1>hello {session?.data?.user?.name}</h1>
      <button onClick={signOut}>logout</button>

      
{/* <Image src={code} alt="codeimage" width={200} height={100}/> */}
{/* <Image src={"/screen.png"} alt="codeimage" width={200} height={100}/> */}
{/* <Image src={"https://media.istockphoto.com/id/1467976868/photo/the-convenience-of-shopping-online.jpg?s=1024x1024&w=is&k=20&c=TW1sWVSVTo-GtbD7tLz3IO98v_JUJWqAnbgMrjtKLfs="} alt="codeimage" width={200} height={100}/> */}
       
    </div>
  )
}
