import React from 'react';
import '../styles/pageTitle.css'

const PageTitle = props => (
    <div className='page-title_container'>
        <div className='title_container'>
            <h1>{props.title}</h1>
        </div>
    </div>
)
export default PageTitle;