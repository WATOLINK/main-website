import styled from 'styled-components'
import useWindowSize from './WindowDimensions'

const StyledCopyright = styled.div`
    width: 340px;
    height: 30px;
    box-sizing: border-box;
    display:table-cell;
    text-align: center;
    vertical-align: middle;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    color: #000000;
    font-size: 20px;
    font-weight: bold;
    font-family: Poppins;
`

const StyledMenuItems = styled.div`
    height: 30px;
    box-sizing: border-box;
    display:table-cell;
    vertical-align: middle;
    color: #000000;
    font-size: 22px;
    font-weight: bold;
    font-family: Poppins;
`

const StyledMenu = styled.div`

`

export function Copyright() {
    return <StyledCopyright> &copy; WATOLINK 2022 </StyledCopyright>
}

export function DefaultFooter() {
    return (
        <div>
            <StyledMenuItems> About Us </StyledMenuItems>
            <StyledMenuItems> Projects </StyledMenuItems>
            <StyledMenuItems> Team </StyledMenuItems>
            <StyledMenuItems> Contact </StyledMenuItems>
            <StyledMenuItems> Join Our Team! </StyledMenuItems>
            <Copyright />
        </div>
    )
}

export function Footer() {
    return (
        <div>
            <DefaultFooter />
        </div>
    )
}
