import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import Box from 'grommet/components/Box';


class Header extends Component {

  render() {
    return (
      <Box direction='row'>
        <Link to='/' className='ml1 no-underline black'>new</Link>
        <div className='ml1'>|</div>
        <Link to='/create' className='ml1 no-underline black'>submit</Link>
      </Box>
    )
  }

}

export default withRouter(Header)