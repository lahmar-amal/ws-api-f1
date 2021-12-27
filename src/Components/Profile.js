import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Profile = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/users/?id=${id}`)
            .then((res) => setUser(res.data[0]))

            .catch((err) => console.error(err));
    }, []);
    console.log("user", user);
    return (
        <div>
            <h1>profile</h1>
            <Card style={{ width: "18rem" }}>
                <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Text>{user.phone}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Profile;
