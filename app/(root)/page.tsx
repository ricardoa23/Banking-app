import HeaderBox from '@/components/HeaderBox'
import React from 'react'

const Home = () => {
    const loggedIn = {firstName: "Rick"}
  return (
    <section className="home">
        <div className="home-content">
            <header className="home-header">
                <HeaderBox 
                type="greeting"
                title="welcome"
                user={loggedIn?.firstName || 'Guest'}
                subtext="Access and manage your accounts and view Your transactions"
                />
                
            </header>
        </div>
    </section>
  )
}

export default Home