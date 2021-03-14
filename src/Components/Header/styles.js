import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    color: "rgba(0, 0, 0, 0.87)",
    [theme.breakpoints.down('sm')]: {
      fontSize: "2.5rem"
    },
  },
  image: {
    marginLeft: '15px',
  },
}));