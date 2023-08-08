import { useState } from "react";
import questions from "./data.js";

import data from './data.js'
import SingleQuestion from'./Questions'

function App() {
  const [question,setQuestion] = useState(data)

  return(
    <main>
      <div className="container">
        <h3>Questions and Answers about login</h3>
         <section className="info">
          {
            questions.map((question) => {
              return <SingleQuestion key={question.id} {...question}/>
            })
          }
         </section>
      </div>
    </main>
  );
}

export default App;
