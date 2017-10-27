import { connect } from 'react-redux';
import { setSiderVisibility } from '../actions/sider';
import SiderMenu from '../component/UI_SiderMenu'

const getSiderVisible = (filter) => {
    switch(filter){
        case 'SHOW':
            return true
        case 'HIDE':
            return false
        default:
            return
    }
}

const mapStateToProps = (state) => {
    console.log(state.SiderVisibility)
    return {
        visible : getSiderVisible(state.SiderVisibility)
    }
}

const SiderVisibility = connect(mapStateToProps)(SiderMenu);
export default SiderVisibility


