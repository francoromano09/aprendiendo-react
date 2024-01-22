import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwtitterFollowCard.jsx'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Angel Duran',
        isFollowing: true
    },
    {
        userName: 'pherald',
        name: 'Pablo Heraldo',
        isFollowing: false
    },
    {
        userName: 'franckdra',
        name: 'Franco Romano',
        isFollowing: true
    },
    {
        userName: 'maxidiaz11',
        name: 'Maximiliano Diaz',
        isFollowing: false
    }
]

export function App() {

    return(
        <section className='App'>
            {
                users.map(user =>{
                    const {userName,name,isFollowing} = user
                    return(
                        <TwitterFollowCard 
                            key={userName}
                            userName={userName}
                            initialIsFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
        
    )
}