import React from 'react';
import { Card, Button, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

const alertTexts = [
  'Basic information about your identity and residency status.',
  'Details about your financial situation to help us calculate your loan amount.',
  'Information about the property you’re buying and the type of financing you need.',
  'Calculate your estimated monthly payments based on the loan amount.',
  'See personalized recommendations for the best offers based on the info you provided.',
  'Easily upload all the documents required by the bank.',
  'Review and finalize the application to send to the bank of your choice.',
  'Once the bank issues your pre-approval, you can download it from here.',
]

const FirstView = () => {

  const _alertData = useSelector((state) => state.sidebar)
  const _progressValue = useSelector((state) => state.progress.progressValue)

  return (
    <div className='welcome_back' style={{paddingTop:'20px'}}>
      <div className='wrapper'>
        <h1 className='h1' style={{fontFamily: 'AGaramond-regular'}}>Welcome back</h1>
        <p style={{ maxWidth: '671px', fontSize: '14px'}}>
          Ready to continue? All your progress has been saved automatically, so you can easily pick up where you left off.</p>
        <div className='center-section'>
          <div className='left-block'>
            <div className='progress'>
              <CircularProgressbarWithChildren
                value={_progressValue}
                styles={buildStyles({
                  textColor: "red",
                  pathColor: "#65CCBC",
                })}
                className='progress-bar'
              >
                <img src='/assets/images/house-heart.1f206df2.svg'/>
              </CircularProgressbarWithChildren>
            </div>
            <div className='text-bar'>
              <div className='subtext1'>
                <span>{_progressValue}%</span>closer to your home financing
              </div>
              <div className='subtext2'>
                The more you progress, the higher the number gets! Your progress is saved automatically.
              </div>
            </div>
          </div>
          <div className='right-block'>
            {
              _alertData.map((item, idx)=>{
                return (
                  <div key={idx} className='item'>
                    <div className='item-wrapper'>
                      <div className='left-text'>
                        <img
                          src={item.imgurl}
                          className={`${item.check ? 'checked-img' : 'uncheck-img'}`}
                          style={{ width: '22px'}}/>
                        {item.check ? 
                          <img
                            className={`check-img`}
                            src='/assets/images/check-circle-1.2f883aa2.svg'
                          /> : <></>
                        }
                      </div>
                      <div className='right-text'>
                        <div className='subtext1'>{item.name}</div>
                        <div className='subtext'>{alertTexts[idx]}</div>
                      </div>
                    </div>
                    <Link to={`/${item.name}`} style={{textDecoration:'none'}}>
                      <button className={`${item.check ? 'done' : 'todo'}`}>
                        {
                          item.check ? 'Done' : 'To-do'
                        }
                      </button>
                    </Link>
                  </div>
                )
              })
            }
          </div>
        </div>
        {/* <div className='bottom-section'>
          <div className='title1'>Why Huspy?</div>
          <div className='bottom-wrapper'>
            <div className='bloc'>
              <img src='/assets/images/currency-dollar.4ce2d3f6.svg'/>
              <div className='title'>No broker fees</div>
              <div className='text'>
                Unlike traditional mortgage brokers in the UAE, Huspy provides services free of charge. No fees, no surprises.
              </div>
            </div>
            <div className='bloc'>
              <img src='/assets/images/flash.26a0a099.svg'/>
              <div className='title'>Manage everything in one place</div>
              <div className='text'>
                Compare offers, upload documents, and submit your mortgage application all from the comfort of your couch. We’ll handle the rest.
              </div>
            </div>
            <div className='bloc'>
              <img src='/assets/images/award-ribbon-star-3.c3dca0e0.svg'/>
              <div className='title'>Best rates guaranteed</div>
              <div className='text'>
                We're helping hundreds of families save up to AED 100,000 each over their mortgage term.
              </div>
            </div>
          </div>
        </div> */}
        <Row className='d-flex justify-content-end mt-3' style={{float:'right'}}>
          <Link to='/profile' 
            style={{
              textDecoration: 'none'
            }}>
            <Button variant='primary'
              className="d-flex justify-content-center align-items-center rounded-4"
              style={{minWidth:'150px'}}
             
            >
              Continue
            </Button>
          </Link>
        </Row>
      </div>
    </div>
  )
}

export default FirstView;