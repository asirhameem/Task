import React from 'react'
import PlanetGaia from './PlanetGaia'
import Navbar from './Navbar'
import CharacterDetails from './CharacterDetails'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Pagination from './Pagination'
import CharacterWithPage from './CharactersWithPage'


export default function Planet() {
    return (
        <div>
            <BrowserRouter>
                
                
                <Navbar/>
                <Pagination/>
                <Switch>  
                    <Route exact path="/" render={(routeProps) => <PlanetGaia {...routeProps} /> } /> 
                    <Route exact path="/:pageNum" render={(routeProps) => <CharacterWithPage {...routeProps} /> } />      
                    <Route exact path="/character/:id" render={(routeProps) => <CharacterDetails {...routeProps} /> } />      
                </Switch>

            </BrowserRouter>
                
        </div>
    )
}
