
import Home from "../components/Home"

import { connect } from "react-redux";


const mapsStateToProps = (state) => {
    return {
        cars: state.cars
    }
}

export default connect(mapsStateToProps(Home))