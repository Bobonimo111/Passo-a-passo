
function count(inicio, fim, passo){
    resultado = [inicio]
    let x = inicio
    let tratamento;
    
    tratamento = fim%passo
    
      
    while((x != (fim - tratamento))){
        
        x = x + passo
        if(x > fim){
            break
        }
        resultado.push(x)
        
    }    
    return resultado
}

function main(){
    const inicio = document.querySelector("input#inicio")
    const fim = document.querySelector("input#fim")
    const passo = document.querySelector("input#passo")
    const h2 = document.querySelector("h2#resultado")

    if(passo.value == 0 || passo.value == ''){
         window.alert('Valor de passo definido para 1')
         passo.value = 1
    }
    if(inicio.value == ''){
        h2.innerHTML = ("Insira um valor no campo <strong>inicio</strong>")        
    }else{
        let resultado = count(Number(inicio.value),Number(fim.value),Number(passo.value))
        h2.innerHTML = resultado.join(" &#128073; ") + " &#127937"
        

    }
    

}

