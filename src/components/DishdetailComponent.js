import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem,
    Button, Modal, ModalHeader, ModalBody,
    Row, Col, Label,
} from 'reactstrap';

import { Control, LocalForm, Errors } from 'react-redux-form';

import { Link } from 'react-router-dom';
import { Component } from 'react';

function DishDetail(props) {
    const dish = props.dish;
    if (dish != null)
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {renderDish(dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments}
                            addComment={props.addComment}
                            dishId={props.dish.id}
                        />
                    </div>
                </div>
            </div>
        );
    else
        return (
            <div></div>
        );
}

const renderDish = (dish) => (
    <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
        </CardBody>
    </Card>
)

function RenderComments({ comments, addComment, dishId }) {
    if (comments == null) return <div></div>;
    const commentsq = comments.map(c => <div>
        <div className='mb-2'>{c.comment}</div>
        <div className='mb-2'>-- {c.author}, {(new Date(c.date)).toDateString()}</div>
    </div>);

    return (
        <div>
            <div>
                <h4>Comments</h4>
            </div>
            <div>
                <div className='list-unstyled'>
                    {commentsq}
                </div>
                <div>
                    <CommentForm dishId={dishId} addComment={addComment} />
                </div>
            </div>
        </div>);
}

export default DishDetail;

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);

    }

    handleSubmit(values) {
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        return <div>
            <Button outline onClick={this.toggleModal}><span className=""></span> Submit Comment</Button>

            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group">
                            <div md={10}>
                                <Label htmlFor="rating" md={10}>Rating</Label>

                                <Control.select model=".rating" name="rating"
                                    className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                </Control.select>
                            </div>
                        </Row>

                        <Row className="form-group">
                            <Label htmlFor="author" md={10}>Your Name</Label>
                            <div md={10}>
                                <Control.text model=".author" id="author" name="author"
                                    placeholder="Your Name"
                                    className="form-control"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".author"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                />
                            </div>
                        </Row>

                        <Row className="form-group">
                            <Label htmlFor="comment" md={10}>Comment</Label>
                            <div md={10}>
                                <Control.textarea model=".comment" id="comment" name="comment"
                                    rows="6"
                                    className="form-control" />
                            </div>
                        </Row>

                        <Row className="form-group mt-3">
                            <Col md={10}>
                                <Button type="submit" color="primary">
                                    Submit Comment
                                </Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </ModalBody>
            </Modal>
        </div>
    }
}