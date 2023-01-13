import "../../../common/styles/card.css";
import { useDispatch } from "react-redux/es/exports";
import {openModalPostInfo, openModalPostEdit, openModalPostDelete} from "../../../redux/slices/postsSlice";

const PostsCard = ({title, body, id}) => {

    const dispatch = useDispatch();

    const changeColor = (e) => {
        if (e.target.parentNode.classList.contains("card--gray")) {
            e.target.parentNode.classList.replace("card--gray", "card--yellow");
        } else if (e.target.parentNode.classList.contains("card--yellow")) {
            e.target.parentNode.classList.replace("card--yellow", "card--orange");
        } else {
            e.target.parentNode.classList.replace("card--orange", "card--gray");
        }
        return;
    }

    return (
        <div id="card" className="card card--gray">
            <div className="card__info">
                <h2 className="card__title">{title}</h2>
                <p className="card__desc">{body}</p>
            </div>
            <button onClick={() => dispatch(openModalPostInfo(id))}>View</button>
            <button onClick={() => dispatch(openModalPostEdit(id))}>Edit</button>
            <button onClick={() => dispatch(openModalPostDelete(id))}>Delete</button>
            <button onClick={(e) => changeColor(e)}>Change Color</button>
        </div>
    );
}
export default PostsCard;