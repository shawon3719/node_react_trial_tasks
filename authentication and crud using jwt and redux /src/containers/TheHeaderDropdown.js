import React, { useEffect } from 'react'
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../_actions';

function TheHeaderDropdown() {
  const users = useSelector(state => state.users);
  const user = useSelector(state => state.authentication.user);
  const isLoggedIn = useSelector((state) => state.authentication.loggedIn);
  const token = localStorage.getItem('token')
  const dispatch = useDispatch();

  useEffect(() => {
    if(isLoggedIn != true){
      dispatch(userActions.logout());
      window.location.href = "/#/admin"
      }
  }, []);
  
const TheHeaderDropdownVar = () => {
  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={'assets/avatar.jpg'}
            className="c-avatar-img"
            alt="ideascale_user"
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          {
            user?
            <strong>{user && user.name}</strong>
            :''
          }
        </CDropdownItem>
        <CDropdownItem divider />
        <CDropdownItem>
        <Link to="/login">
          <CIcon name="cil-lock-locked" className="mfe-2" /> 
          Sign Out
          </Link>
        </CDropdownItem>
        
      </CDropdownMenu>
    </CDropdown>
  )
}
return(
  <TheHeaderDropdownVar/>
);
}
// }
export default TheHeaderDropdown
