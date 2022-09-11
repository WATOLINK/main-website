import styled from 'styled-components'

const StyledCopyright = styled.p`
    width: 340px;
    height: 30px;
    box-sizing: border-box;
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    position: absolute;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%);
    font: ${({theme}) => theme.fonts.footer};
`

const StyledMenuItems = styled.div`
    height: 30px;
    box-sizing: border-box;
    display: table-cell;
    vertical-align: middle;
    margin: 15px;
    font: ${({theme}) => theme.fonts.footer};
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
