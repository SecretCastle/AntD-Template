import { connect } from 'react-redux';
import { setSiderVisibility } from '../actions/sider';
import HeaderMenu from '../component/UI_HeaderMenu';

const mapDispatchToProps = (state) => {
    return {
         onClickMenu:() =>{
            dispatch(setSiderVisibility('HIDE'))
         }
    }
}

const HeaderClick = connect(mapDispatchToProps)(HeaderMenu);
export default HeaderClick