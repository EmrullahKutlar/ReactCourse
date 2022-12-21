
import { useState,useEffect } from "react"

export const Text=()=>{
const [text,setText]=useState("")
useEffect(()=>{
    console.log("Component Mounted") 
    // main.jsx de StrictMode da olduğu için 2 kez çalışıyor yorum satırına aldım orayı
    // componentin içerisinde bir şey değiştiği zaman sürekli çalışır bunu istemeyiz.
    // sadece bir kere çalışmasını istiyorsak dizi boş bırakılır
    // arrayın içerisini değiştiğinde çalışmasını istediğimiz şeyi yazıyoruz mesela text değişirse çalışsın gibi

    return()=>{
        console.log("Component Unmounted");
    }
},[])

return(
    <div>
        <input type="text" className="form-control" onChange={(e)=>{setText(e.target.value)}} />
        <h3> {text} </h3>
    </div>
)

}