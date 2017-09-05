import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import Box from 'grommet/components/Box';
import Head from 'grommet/components/Header';
import Anchor from 'grommet/components/Anchor';
import { GC_USER_ID, GC_AUTH_TOKEN } from '../constants'


class Header extends Component {

  render() {
    const userId = localStorage.getItem(GC_USER_ID)
    return (
      <Head >
          <Anchor path='/' label='new' className='ml1 no-underline black'/>
          {userId &&
         
              <Anchor label='submit'
  path='/create'
  primary={true} />
          }
          {userId ?
            <div className='ml1 pointer black' onClick={() => {
              localStorage.removeItem(GC_USER_ID)
              localStorage.removeItem(GC_AUTH_TOKEN)
              this.props.history.push(`/new/1`)
            }}>logout</div>
            :
            <Anchor path='/login' label='login' />
          }
      </Head >
          
    )
  }

}

export default withRouter(Header)