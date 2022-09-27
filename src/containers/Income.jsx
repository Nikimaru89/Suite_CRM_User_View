import { useSSRSafeId } from '@react-aria/ssr';
import React, { useState } from 'react';
import IncomeComponent from '../components/Income';

const Income = () => {
  const [job, setJob] = useState('')
  const [joinDate, setJoinDate] = useState(new Date())
  const [companyName, setCompanyName] = useState('')
  const [industry, setIndustry] = useState('Finance')
  const [employmentStatus, setEmploymentStatus] = useState('Employee at a company')
  const [duration, setDuration] = useState('0 to 5 years')
  const [share, setShare] = useState('')
  const [salary, setSalary] = useState('')
  const [addIncomeType, setAddIncomeType] = useState('Bonus')
  const [addIncomeMonthly, setAddIncomeMonthly] = useState('')
  const [bank, setBank] = useState('Abu Dhabi Commercial Bank')
  const [monthlyAmount, setMonthlyAmount] = useState('')
  const [outstandingAmount, setOutstandingAmount] = useState('')
  const [notification, setNotification] = useState('')
  const [cardLimit, setCardLimit] = useState('')
  console.log('cardLimit',cardLimit)
  return (
    <IncomeComponent 
      job={job}
      setJob={setJob}
      joinDate={joinDate}
      setJoinDate={setJoinDate}
      companyName={companyName}
      setCompanyName={setCompanyName}
      industry={industry}
      setIndustry={setIndustry}
      employmentStatus={employmentStatus}
      setEmploymentStatus={setEmploymentStatus}
      duration={duration}
      setDuration={setDuration}
      share={share}
      setShare={setShare}
      salary={salary}
      setSalary={setSalary}
      addIncomeType={addIncomeType}
      setAddIncomeType={setAddIncomeType}
      addIncomeMonthly={addIncomeMonthly}
      setAddIncomeMonthly={setAddIncomeMonthly}
      bank={bank}
      setBank={setBank}
      monthlyAmount={monthlyAmount}
      setMonthlyAmount={setMonthlyAmount}
      outstandingAmount={outstandingAmount}
      setOutstandingAmount={setOutstandingAmount}
      notification={notification}
      setNotification={setNotification}
      cardLimit={cardLimit}
      setCardLimit={setCardLimit}
    />
  )
}

export default Income