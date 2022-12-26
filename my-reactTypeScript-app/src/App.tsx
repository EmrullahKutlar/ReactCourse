import { Person, Country } from "./Person"

function App() {

  // const getAge = (name: string): number => {
  //   return 21 // sadece number donebilir
  // }

  return (
    <div className="App">
      <div className="contianer">
        <div className="row">
          <Person
            name='Emrullah'
            email='asd@mail.com'
            age={23}
            isMarried={false}
            friends={["ali", "veli", "hasan", "hüseyin"]}
            country={Country.Turkey}

          />
        </div>
      </div>

    </div>
  )
}

export default App
