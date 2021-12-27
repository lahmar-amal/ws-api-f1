import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
    return (
        <div>
            <Card style={{ width: "18rem" }}>
                <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Text>{user.username}</Card.Text>
                    <Card.Text>{user.email}</Card.Text>

                    <Button variant="primary">
                        <Link to={`/user/${user.id}`}>Go Check my Profile</Link>
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default UserCard;
