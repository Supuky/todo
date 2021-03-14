import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    paper: {
        width: "100%"
    },
    list: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: "9px",
        display: "flex"
        
    },
    buttons: {
        display: "block"
    },
    edit__button: {
        color: "#76e2b3"
    },
    delete__button: {
        color:" #ec5e6f"
    }
}));