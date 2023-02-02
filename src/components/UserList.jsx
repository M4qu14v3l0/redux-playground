import { Container } from "@mui/system";
import { useEffect } from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

import { fetchAllUsers } from '../store/slices/users'
import { useDispatch , useSelector } from "react-redux";


const UserList = () => {

    const { list } = useSelector(state => state.users)

    const dispatch = useDispatch()
    
    useEffect( () => {
        dispatch(fetchAllUsers());
    } , [dispatch])

    return(
        <Container>
            <div>
                {
                    list.map((user , index) => (
                        <Card sx={{ minWidth: 275 }} key={index}>
                            <CardContent>
                                <Avatar alt="Remy Sharp" src={user.avatar} />
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    {user.first_name} {user.last_name}
                                </Typography>
                            </CardContent>
                      </Card>

                    ))
                }
            </div>
        </Container>
    )
}

export default UserList;