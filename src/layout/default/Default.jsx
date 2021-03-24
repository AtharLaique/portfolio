import React from 'react';

const DefaultLayout = props => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <p className='text-center'> Here we putt our Header</p>
                </div>
                <div className='col-12'>
                     <p className='text-center'> Here we putt our Banner</p>
                </div>
                <div className='col-12'>
                     <p className='text-center'> Here we putt our Portfolio</p>
                </div>
                <div className='col-12'>
                    <p className='text-center'> Here we putt our About</p>
                </div>
                <div className='col-12'>
                    <p className='text-center'> Here we putt our Contact</p>
                </div>
            </div>
        </div>
    )
}
export default DefaultLayout;