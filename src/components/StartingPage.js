import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { useNavigate } from 'react-router-dom';
import DashboardPage from './DashboardPage';

function StartingPage() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
            navigate('/dashboard/overview')
        }, 5000)
    }, [navigate])

    return (
        <>
            {
                isLoading ? (
                    <Loading />
                ) : (
                    <DashboardPage />
                )
            }
        </>
    )
}

export default StartingPage