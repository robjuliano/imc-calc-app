import { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './css/Calc.css'

function App() {
  const [height, setHeight] = useState(1);
  const [weight, setWeight] = useState(0);
  const [bmi, setBMI] = useState(0);
  const [situation, setSIT] = useState(1);

  function handleHeight(e) {
    let h = e.target.value;
    setHeight(h);
  }
  function handleWeight(e) {
    let w = e.target.value;
    setWeight(w);
  }
  useEffect(() => {

    let bmi1 = (weight / (height * 2)) * 100;
    setBMI(bmi1.toFixed(2));
    if (bmi1 < 1) {
      setSIT("Preencha os dados.")
      console.log("Preencha Altura e Peso")
    }
      else if (bmi1 < 18.5) {
        setSIT("Magreza")
        console.log("Magreza")
      } else if (bmi1 >= 18.5 && bmi1 <= 25) {
        setSIT("Normal")
        console.log("Normal")
      } else if (bmi1 > 25 && bmi1 < 30) {
        setSIT("Sobrepeso")
        console.log("Sobrepeso")
      } else if (bmi1 > 30 && bmi1 < 40) {
        setSIT("Obesidade")
        console.log("Obesidade")
      } else {
        setSIT("Obesidade Grave")
        console.log("Obesidade Grave")
      }

    }, [height, weight]);





  return (


    <section id="cover" className="min-vh-100" >
      <div id="cover-caption">
        <div className="container">
          <div className="row text-white">
            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
              <h1 className="display-4 py-2 text-truncate">Calculadora IMC</h1>
              <div className="px-2">
                <form action="" className="justify-content-center">


                  <div className="form-group">
                    <input type="number" onChange={handleHeight} placeholder="Altura"></input>
                  </div>
                  <div className="form-group">
                    <input type="number" onChange={handleWeight} placeholder="Peso"></input>
                    <h2><br></br>IMC :{bmi}</h2>
                    <h3>{situation}</h3>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default App;
