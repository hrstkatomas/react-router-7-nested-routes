import './App.css'
import {Navigate, NavLink, NavLinkProps, Route, Routes} from "react-router";
import {ReactNode} from "react";

const SelectLink = ({children, ...props}: NavLinkProps & {
    children: ReactNode
}) => {
    return <NavLink {...props} style={{margin:"5px"}}>
        {({isActive}) => (<span>{isActive && "*"}{children}</span>)}
    </NavLink>
}

function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
            <nav>
                <SelectLink to="../home" end>Home</SelectLink>
                <SelectLink to="../team">Team</SelectLink>
                <SelectLink to="../projects">Projects</SelectLink>
                <SelectLink to="../dashboard">Dashboard</SelectLink>
            </nav>

            <Routes>
                <Route path="home" element={<div>DashboardHome</div>}/>
                <Route path="team" element={<div>DashboardTeam</div>}/>
                <Route path="projects" element={<div>DashboardProjects</div>}/>

                <Route path="dashboard/*">
                    <Route path="*" element={<Dashboard/>}/>
                </Route>

                <Route path="/" element={<Navigate to={"../home"}/>}/>
            </Routes>
        </div>
    );
}

function App() {
    return (
        <>
            <nav>
                <SelectLink to="../home">Home</SelectLink>
                <SelectLink to="../dashboard">Dashboard</SelectLink>
            </nav>

            <Routes>
                <Route path="home" element={<div>Home</div>}/>

                <Route path="dashboard/*">
                    <Route path="*" element={<Dashboard/>}/>
                </Route>

                <Route path="/" element={<Navigate to={"../home"}/>}/>
            </Routes>
        </>
    )
}

export default App
