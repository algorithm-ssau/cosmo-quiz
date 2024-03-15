import Input from "../ui/Input"
import Button from "../ui/Button"
import { useEffect, useState } from "react"
export default function LoginWindow(){
    const [content, setContent] = useState(true)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState("Введите email")
    const [passwordError, setPasswordError] = useState("Введите пароль")
    const [formValid, setFormValid] = useState(false)

    useEffect(()=>{
        if(emailError||passwordError){
            setFormValid(false)
        }else{
            setFormValid(true)
        }
    }, [emailError, passwordError])

    const emailHandler = (e)=>{
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(!re.test(String(e.target.value).toLocaleLowerCase())){
            setEmailError("Некорректный email")
            if(!e.target.value){
                setEmailError("Введите email")
            }
        }else{
            setEmailError("")
        }
        
    }

    const passwordHandler = (e)=>{
        setPassword(e.target.value)
        if(!e.target.value){
            setPasswordError("Введите пароль")
        }
        else{
            setPasswordError("")
        }
    }
    
    const blurHandler = (e) =>{
        switch(e.target.id){
            case "email":
                setEmailDirty(true)
                break
            case "password":
                setPasswordDirty(true)
                break
        }
        
    }
    
    if(content){
        return(
            <div className="flex items-stretch place-content-center">
                <form action="" className="grid grid-cols-1 border-2 rounded place-items-center">
                    <h1 className="text-xl">Вход</h1>
                    <Input type = "text" label = "Логин" id = "email" value = {email} setValue = {emailHandler} onBlur = {blurHandler} ></Input>
                    {(emailDirty && emailError) && <div className=" text-error">{emailError}</div>}
                    <Input type = "password" label = "Пароль" id = "password" value = {password} setValue = {passwordHandler} onBlur = {blurHandler}></Input>
                    {(passwordDirty && passwordError) && <div className=" text-error">{passwordError}</div>}
                    <Button isActive = {formValid}>Войти</Button>
                    <p>Нет аккаунта? <a className="cursor-pointer text-accent hover:underline" onClick={()=>setContent(false)}>Зарегестрироваться</a></p>
                </form>
            </div>
        )
    }
    else{
        return(
            <div className="flex items-stretch place-content-center">
                <form action="" className="grid grid-cols-1 border-2 rounded place-items-center">
                    <h1 className="text-xl">Вход</h1>
                    <Input label = "Имя"></Input>
                    <Input label = "Логин"></Input>
                    <Input label = "Пароль"></Input>
                    <Button>Зарегестрироваться</Button>
                    <p>Уже есть аккаунт? <a className="cursor-pointer text-accent hover:underline" onClick={()=>setContent(true)}>Войти</a></p>
                </form>
            </div>
        )
    }
}