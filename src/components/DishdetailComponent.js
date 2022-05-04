import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

export function DishdetailComponent(props = {}) {
    const dish = props.dish;
    if (dish != null)
        return (
            <div className='row'>
                <div className='col-12 col-md-5 m-1'>
                    {renderDish(dish)}
                </div>
                <div className='col-12 col-md-5 m-1'>
                    {renderComments(dish.comments)}
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

function renderComments(commentsArray = null) {
    if (commentsArray == null) return <div></div>;
    const comments = commentsArray.map(c => <div>
        <div className='mb-2'>{ c.comment }</div>
        <div className='mb-2'>-- {c.author}, {(new Date(c.date)).toDateString()}</div>
    </div>);

    return (
        <div>
            <div>
                <h4>Comments</h4>
            </div>
            <div>
                <div className='list-unstyled'>
                    {comments}
                </div>
            </div>
        </div>);
}