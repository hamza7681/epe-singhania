import React from 'react'
import Sidebar from '../components/Header'
import Transaction from '../components/Transaction'
const TransactionPage = () => {
  return (
    <>
    <div>
        <Sidebar>
            <Transaction/>
        </Sidebar>
    </div>
    </>
  )
}

export default TransactionPage