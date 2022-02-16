
import { Button, Table, TableHead, TableRow, TableCell, TableBody, makeStyles, Grid } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';

import { categories } from '../../constants/data';


const useStyles = makeStyles({
    create:{
        margin: 20,
        background: '#000000',
        color:'#ffff',
        width: '86%',
        "&:hover":{
            fontWeight:'bold',
            color:'#000000',
            outline:"1px solid #000000",
            background: "white"
        }
    },
    table:{
        border:"1px solid rgba(224, 224, 224, 1)",
    }
})

const Categories = () => {
    const classes = useStyles();
  return (
      <>
        <Link to={'/create'} style={{textDecoration:'none' , color:'inherit'}}><Button variant="contained" className={classes.create}>Create Blog</Button></Link>

        <Table className={classes.table}>
            <TableHead>
                <TableRow>
                    <TableCell>
                        <Link to={'/'} style={{textDecoration:'none' , color:'inherit'}}>
                        All Categories
                        </Link>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    categories.map(category=>(
                        <TableRow>
                            <TableCell>
                                <Link to={`/?category=${category}`} style={{textDecoration:'none' , color:'inherit'}}>
                                {category}
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
      </>
  )
}

export default Categories;   