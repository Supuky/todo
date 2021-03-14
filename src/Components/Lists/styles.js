import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    lists: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    item: {
        width: "60%",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
          },
    },
    

}));