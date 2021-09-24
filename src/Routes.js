import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// import Second from './Second'
// import { Third } from './Third'
import Homepage from './Pages/Homepage'
import SignUp from './Pages/Auth/SignUp'
import Signin from './Pages/Auth/Signin'
import Cart from './Pages/Cart'
import Deals from './Pages/Deals'


const Routes = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route exact path="/SignUp" component={SignUp} />
                    <Route exact path="/Signin" component={Signin} />
                    <Route exact path="/Cart" component={Cart} />
                    <Route exact path="/Deals" component={Deals} />


                    {/* <Route exact path="/bijay" component={Third} />

              <Route exact path="/second" component={Second}/> */}

                </Switch>
            </Router>
        </>
    )
}

export default Routes
