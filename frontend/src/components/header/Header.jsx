import Message from "../message/Message";

const Header = ({MesHist}) => {

    return (
        <div >
        {MesHist.map((message, index) => (
        <Message key={index} message={message} />))}
        </div>
    )
}

export default Header
