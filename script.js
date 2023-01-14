export const getData = async (url) =>{
    const api = await fetch(url)
    const response = await api.json();
    return response;
}

export const btn=document.getElementById("btn")
console.log(btn)


