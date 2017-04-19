import React, {Component} from 'react'

class Results extends Component {

  constructor(props) {
    super(props)

    this.vacation = this.vacation.bind(this)
  }

  vacation() {
   const vacation = {
     Asia: {
       Spring: {$: "Hanoi, Vietnam", $$: "Hong Kong, China", $$$: "Kyoto, Japan"},
       Summer: {$: "Borneo, Malaysia", $$: "Uluwatu, Bali, Indonesia", $$$: "Singapore"},
       Fall: {$: "Hanoi, Vietnam", $$: "Beijing, China", $$$: "Tokyo, Japan"},
       Winter: {$: "Chang, Mai, Thailand", $$: "Panjim, India", $$$: "Hokkaido, Japan"}
     },
     Europe: {
       Spring: {$: "Budapest, Hungary", $$: "Barcelona, Spain", $$$: "Milan, Italy"},
       Summer: {$: "Prague, Czech Republic", $$: "Berlin, Germany", $$$: "Stokholm, Sweden"},
       Fall: {$: "Budapest, Hungary", $$: "Madrid, Spain", $$$: "Paris, France"},
       Winter: {$: "Lisbon, Portugol", $$: "Amsterdam, Netherlands", $$$: "Vienna, Austria"}
     }
   }

   return vacation;
  }


  render() {
    return (
      <div>
        {console.log(this.vacation()[this.props.continent][this.props.season][this.props.price])}
        Check out {(this.vacation()[this.props.continent][this.props.season][this.props.price])}!

        

      </div>

    )
  }
}

export default Results
