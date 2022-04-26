import PropTypes from 'prop-types';
import Header from './Header';

export default function Page({children,cool}){
    return (
    <div>
        <Header/>
        <p>Hello from Page Component!</p>
        {children}
        {cool}
    </div>
    )
    }
Page.propTypes={
    children:PropTypes.any,
    cool:PropTypes.string,
   
}