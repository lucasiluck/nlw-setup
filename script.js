const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form) //new cria um novo objeto nlwSetup
const button = document.querySelector('header button')

button.addEventListener('click' , add)
form.addEventListener('change', save)

function add(){

    const today = new Date().toLocaleDateString('pt-br').slice(0, -5)

    const dayExists = nlwSetup.dayExists(today)

    if(dayExists){
        alert("Dia já registrado")
        return
    }

    alert("Registrado com sucesso✅")
    nlwSetup.addDay(today)

}
function save(){
    localStorage.setItem('NLWSetup@habits',JSON.stringify(nlwSetup.data)) 
    //JSON.stringify(nlwSetup.data) transforma o nlwSetup de objeto para string para salvar dados
}


// const data = {
//     run:['01-01','01-02','01-03','01-04','01-05','01-06','01-07','01-08','01-09','01-10','01-11','01-12','01-13','01-14']
// }

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}

nlwSetup.setData(data)
nlwSetup.load()