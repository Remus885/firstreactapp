document.getElementById("pont").addEventListener("change", (r)=>{
    document.getElementById("pontErtek").innerHTML=r.target.value
})

document.querySelectorAll("input[name=card]").forEach(o => o.addEventListener("keyup",ugrik))

document.getElementById("elkuld").addEventListener("click",ellenoriz)

function ugrik(e){
    console.log(e.target.tabIndex)
    let ti=e.target.tabIndex
    let db=document.getElementsByName("card").length
    console.log("db: ",db)
    console.log(e.target.value.length , e.target.maxLength)
    if(parseInt(e.target.value.length)===parseInt(e.target.maxLength) && parseInt(ti)<db)
        document.getElementsByName("card")[ti].focus()
}

let hibak

function ellenoriz(e) {
    hibak=[]
    document.getElementById("hibalista").innerHTML=""

    // e-mail
    if(document.getElementById("email").value.length<5){
        hibak.push("Helytelen e-mail cím");
    }
    // jelszó
    let pw=document.getElementById("passw").value
    if (checkPassword(pw).length>0)
        hibak=[...hibak,...checkPassword(pw)]

    // select
    let selIndex=document.getElementById("sel").selectedIndex
    console.log(selIndex,document.getElementById("sel").options[selIndex].text)
    if(selIndex===0)
        hibak.push("Válassz ki egy érdeklődési kört!")

    //checkbox
    if(!document.querySelector('input[name=nyelv]:checked'))
        hibak.push("Válassz ki egy idegennyelvet!")

    //radio
    if(document.querySelector('input[name]=rOp:checked'))
        hibak.push("Válassz kategóriát!")

    //card
    let cardArr=document.querySelectorAll('input[name=card]')
    console.log("cardArr: ",cardArr.length)
    cardArr.forEach(o=>{
        console.log(o.value)
    })


    document.getElementById("hibalista").innerHTML=hibak.map(h=>`<li>${h}</li>`).join("")
    if(hibak.length>0)
        e.preventDefault();


    
}

const checkPassword=(pw)=>{
    let err=[]
    if(pw.length<8)
        err.push("A jelszó túl rövid! Min 8 karakter kell legyen!")

    let reg=/\d/
    if(!reg.test(pw))
        err.push("A jelszónak számot is kell tartalmaznia!")


}