import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, CardSubtitle, CardText, Col,CardTitle } from 'reactstrap'
import { useContext } from 'react';
import { AppContext } from './../../AppContext';
import Swal from 'sweetalert2'
export default function Product(props) {
    const { product } = props
    const{addCart}=useContext(AppContext)
    const  handle_add=(id)=>{
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
          });
        addCart(id)
    }
    return (
        <Col lg={3} md={4} sm={6} xs={6} className='' >


            <Card>
                <CardBody>
                    <CardTitle tag="h5">
                        Card title
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Card subtitle
                    </CardSubtitle>
                    <CardText>
                        <h1>product</h1>
                        <p>Info: {product.name}</p>
                        <Link to={`/detail/${product.id}`}>Chi tiết sản phẩm</Link>
                    </CardText>
                    <Button onClick={()=>handle_add(product.id)} >
                        add to cart
                    </Button>
                </CardBody>
            </Card>
        </Col>
    )
}
