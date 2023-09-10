
import Car from "../components/Car"
import { connect } from "react-redux";


const mapsStateToProps = (state) => {
    return {
        cars: state.cars
    }
}

export default connect(mapsStateToProps(Car))