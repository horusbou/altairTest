import React from 'react';
import {  BrowserRouter as Router,Routes,Route, useParams  } from "react-router-dom";
import { Users } from './User/users';
import { PersonalInfos } from './User/userId';
import { AppContextProvider } from './Context';
import Services from './User/Services';
import NavBar from './Componenets/NavBar';
import { Dashboard } from './Componenets/Dashboard';

function App() {
    const { userId } = useParams();

  return (
        <div className="relative h-[700px] min-h-screen w-[1350px] min-w-full">
            <NavBar />
            <div
            className={`relative bg-bgGray grid grid-cols-12 gap-6 px-10 py-6 font-poppins min-h-[calc(100%-71px)]`}
          >
            <div>
                <Dashboard />
            </div>
                <div className='col-span-9 relative bg-white rounded-md'>
                    <Routes>
                        <Route path="/" element={<Users/>} />
                        <Route path="/users/:userId" element={
                            <PersonalInfos/>
                        } />
                        <Route path="/users/:userId/services" element={
                            <Services/>
                        } />
                    </Routes>
                </div>
            </div>
        </div>
  );
}

export default App;
